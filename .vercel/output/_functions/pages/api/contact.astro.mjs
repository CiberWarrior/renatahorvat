import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  try {
    const form = await request.formData();
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    if (!name || !email || !message) {
      return new Response("Invalid input", { status: 400 });
    }
    const resendApiKey = undefined                              ;
    const contactFrom = undefined                            ;
    const contactTo = undefined                          ;
    if (!resendApiKey || !contactFrom || !contactTo) {
      console.log("Environment variables not set, skipping email send");
      return redirect("/contact?sent=1");
    }
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: contactFrom,
      to: contactTo,
      reply_to: email,
      subject: `New inquiry from ${name}`,
      text: `${message}

From: ${name} <${email}>`
    });
    return redirect("/contact?sent=1");
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response("Internal server error", { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
