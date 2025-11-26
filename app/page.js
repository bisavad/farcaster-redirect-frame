// /app/page.js

import App from './app'; 

export default function Home() {
  return (
    <html>
      <head>
        <title>Google Redirect Mini App</title>
        
        {/* تگ‌های Open Graph برای نمایش صحیح در مرورگرها */}
        <meta property="og:title" content="Google Redirect Mini App" />
        <meta property="og:image" content="https://picsum.photos/600/400" />
        
        {/* مهم: اسکریپت SDK مینی اَپ فارکستر */}
        <script src="https://assets.warpcast.com/sdk/mini-app-sdk.js" defer></script>
      </head>
      <body>
        {/* این کامپوننت، برنامه اصلی ما را نمایش می‌دهد */}
        <App />
      </body>
    </html>
  );
}