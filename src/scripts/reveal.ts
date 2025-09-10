import { animate, inView } from 'motion';

export function revealOnView(selector = '[data-reveal]') {
  inView(selector, ({ target }) => {
    animate(
      target,
      { 
        opacity: [0, 1], 
        y: [20, 0] 
      },
      { 
        duration: 0.6, 
        easing: 'ease-out' 
      }
    );
  });
}

export function revealOnViewStagger(selector = '[data-reveal-stagger]') {
  inView(selector, ({ target }) => {
    const children = target.querySelectorAll('[data-reveal-item]');
    children.forEach((child, index) => {
      animate(
        child,
        { 
          opacity: [0, 1], 
          y: [30, 0] 
        },
        { 
          duration: 0.5, 
          delay: index * 0.1,
          easing: 'ease-out' 
        }
      );
    });
  });
}
