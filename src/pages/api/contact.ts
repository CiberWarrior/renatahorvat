import type { APIRoute } from "astro";
import { Resend } from "resend";
export const prerender = false;
export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const form = await request.formData();
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    
    if (!name || !email || !message) {
      return new Response("Invalid input", { status: 400 });
    }

    // Check if environment variables are set
    const resendApiKey = import.meta.env.RESEND_API_KEY;
    const contactFrom = import.meta.env.CONTACT_FROM;
    const contactTo = import.meta.env.CONTACT_TO;

    if (!resendApiKey || !contactFrom || !contactTo) {
      console.log("Environment variables not set, skipping email send");
      // Still redirect to success page for demo purposes
      return redirect("/contact?sent=1");
    }

    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: contactFrom,
      to: contactTo,
      reply_to: email,
      subject: `New inquiry from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
    });
    
    return redirect("/contact?sent=1");
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response("Internal server error", { status: 500 });
  }
};
