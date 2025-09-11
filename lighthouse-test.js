// Lighthouse SEO Test Simulation
// This script simulates what Google Lighthouse would check for SEO

const seoChecks = {
    // Meta Tags
    title: {
        check: (doc) => {
            const title = doc.querySelector('title');
            if (!title) return { score: 0, message: 'Missing title tag' };
            const length = title.textContent.length;
            if (length < 30) return { score: 0.5, message: 'Title too short (under 30 characters)' };
            if (length > 60) return { score: 0.5, message: 'Title too long (over 60 characters)' };
            return { score: 1, message: 'Title tag is optimal' };
        }
    },
    
    description: {
        check: (doc) => {
            const desc = doc.querySelector('meta[name="description"]');
            if (!desc) return { score: 0, message: 'Missing meta description' };
            const length = desc.getAttribute('content').length;
            if (length < 120) return { score: 0.5, message: 'Description too short (under 120 characters)' };
            if (length > 160) return { score: 0.5, message: 'Description too long (over 160 characters)' };
            return { score: 1, message: 'Meta description is optimal' };
        }
    },
    
    // Open Graph
    openGraph: {
        check: (doc) => {
            const ogTitle = doc.querySelector('meta[property="og:title"]');
            const ogDesc = doc.querySelector('meta[property="og:description"]');
            const ogImage = doc.querySelector('meta[property="og:image"]');
            const ogType = doc.querySelector('meta[property="og:type"]');
            
            let score = 0;
            let messages = [];
            
            if (ogTitle) { score += 0.25; messages.push('✅ OG Title'); }
            else messages.push('❌ Missing OG Title');
            
            if (ogDesc) { score += 0.25; messages.push('✅ OG Description'); }
            else messages.push('❌ Missing OG Description');
            
            if (ogImage) { score += 0.25; messages.push('✅ OG Image'); }
            else messages.push('❌ Missing OG Image');
            
            if (ogType) { score += 0.25; messages.push('✅ OG Type'); }
            else messages.push('❌ Missing OG Type');
            
            return { score, message: messages.join(', ') };
        }
    },
    
    // Structured Data
    structuredData: {
        check: (html) => {
            if (html.includes('application/ld+json')) {
                return { score: 1, message: 'Structured data found' };
            }
            return { score: 0, message: 'No structured data found' };
        }
    },
    
    // Images
    images: {
        check: (doc) => {
            const images = doc.querySelectorAll('img');
            const imagesWithoutAlt = doc.querySelectorAll('img:not([alt])');
            
            if (images.length === 0) return { score: 1, message: 'No images to check' };
            
            const score = (images.length - imagesWithoutAlt.length) / images.length;
            return { 
                score, 
                message: `${imagesWithoutAlt.length}/${images.length} images missing alt text` 
            };
        }
    },
    
    // Performance
    performance: {
        check: (doc) => {
            const preconnect = doc.querySelectorAll('link[rel="preconnect"]').length;
            const dnsPrefetch = doc.querySelectorAll('link[rel="dns-prefetch"]').length;
            const preload = doc.querySelectorAll('link[rel="preload"]').length;
            
            let score = 0;
            if (preconnect > 0) score += 0.33;
            if (dnsPrefetch > 0) score += 0.33;
            if (preload > 0) score += 0.34;
            
            return { 
                score, 
                message: `Preconnect: ${preconnect}, DNS Prefetch: ${dnsPrefetch}, Preload: ${preload}` 
            };
        }
    }
};

// Function to run all SEO checks
function runSEOAudit(html, url) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const results = {};
    let totalScore = 0;
    let totalChecks = 0;
    
    for (const [checkName, check] of Object.entries(seoChecks)) {
        const result = check.check(doc);
        results[checkName] = result;
        totalScore += result.score;
        totalChecks++;
    }
    
    const overallScore = totalScore / totalChecks;
    
    return {
        results,
        overallScore,
        grade: overallScore >= 0.9 ? 'A' : 
               overallScore >= 0.8 ? 'B' : 
               overallScore >= 0.7 ? 'C' : 
               overallScore >= 0.6 ? 'D' : 'F'
    };
}

// Export for use in browser
if (typeof window !== 'undefined') {
    window.runSEOAudit = runSEOAudit;
    window.seoChecks = seoChecks;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { runSEOAudit, seoChecks };
}
