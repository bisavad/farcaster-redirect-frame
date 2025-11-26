// /app/api/redirect-handler/route.js

const GOOGLE_URL = "https://www.google.com";

export async function POST(req) {
  // این تابع هر زمان که کاربر روی دکمه کلیک کند اجرا می‌شود.
  
  // تنها کاری که ما می‌کنیم این است که پاسخ 302 (Redirect) را برمی‌گردانیم.
  return new Response(null, {
    status: 302, // 302: Found/Temporary Redirect
    headers: {
      'Location': GOOGLE_URL, // آدرس هدف نهایی
    },
  });
}