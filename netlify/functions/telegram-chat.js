export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  const { message = "", from = "" } = JSON.parse(event.body || "{}");
  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  const payload = {
    chat_id: 7897742822,
    text: `📨 New message from site\nFrom: ${from || "anonymous"}\n---\n${message}`.slice(0, 4096),
    disable_web_page_preview: true,
  };

  const r = await fetch(`https://api.telegram.org/bot${8573583660:AAEbX2SLC8XxJPKoZ8rEZ9bL_yBcBRQ8uTo}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  return r.ok
    ? { statusCode: 200, body: JSON.stringify({ ok: true }) }
    : { statusCode: 500, body: await r.text() };
};
