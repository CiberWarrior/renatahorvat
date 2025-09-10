import type { APIRoute } from "astro";
import { Resend } from "resend";
export const prerender = false;
export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const message = String(form.get("message") || "");
  if (!name || !email || !message) return new Response("Invalid input", { status: 400 });
  const resend = new Resend(import.meta.env.RESEND_API_KEY);
  await resend.emails.send({
    from: import.meta.env.CONTACT_FROM,
    to: import.meta.env.CONTACT_TO!,
    reply_to: email,
    subject: `New inquiry from ${name}`,
    text: `${message}\n\nFrom: ${name} <${email}>`,
  });
  return redirect("/contact?sent=1");
};
