// /app/page.js

// آدرس یک تصویر موقت برای فریم
const FRAME_IMAGE_URL = "https://picsum.photos/600/400"; 
// آدرس نقطه پایانی سرور (این را بعد از انتشار به‌روز می‌کنیم)
const POST_URL = "https://YOUR-DOMAIN.com/api/redirect-handler"; 

export default function Home() {
  return (
    <html>
      <head>
        <title>Google Redirect Frame</title>
        
        {/* Frame Meta Tags: These are essential for Farcaster */}
        <meta property="og:title" content="Farcaster Redirect Frame" />
        <meta property="og:image" content={FRAME_IMAGE_URL} />
        
        {/* Frame Definition (vNext is the latest standard) */}
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={FRAME_IMAGE_URL} />
        
        {/* Button Configuration: post_redirect tells Farcaster to redirect */}
        <meta property="fc:frame:button:1" content="جستجو در Google 🚀" />
        <meta property="fc:frame:button:1:action" content="post_redirect" /> 
        
        {/* The URL that will receive the button click request */}
        <meta property="fc:frame:post_url" content={POST_URL} />
      </head>
      <body>
        <p>صفحه اصلی بارگذاری شد. این صفحه در مرورگر باز می‌شود اما در Warpcast تبدیل به فریم می‌شود.</p>
      </body>
    </html>
  );
}