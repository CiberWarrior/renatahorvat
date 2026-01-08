import 'resend';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Server configuration error. Please contact the administrator."
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
