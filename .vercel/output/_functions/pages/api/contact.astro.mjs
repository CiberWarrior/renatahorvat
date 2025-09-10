import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const form = await request.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const message = String(form.get("message") || "");
  if (!name || !email || !message) return new Response("Invalid input", { status: 400 });
  const resend = new Resend(undefined                              );
  await resend.emails.send({
    from: undefined                            ,
    to: undefined                          ,
    reply_to: email,
    subject: `New inquiry from ${name}`,
    text: `${message}

From: ${name} <${email}>`
  });
  return redirect("/contact?sent=1");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
