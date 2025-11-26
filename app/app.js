// /app/app.js

'use client'; // این خط ضروری است تا Next.js بداند این کد باید در مرورگر اجرا شود

import React, { useEffect } from 'react';

const GOOGLE_URL = "https://www.google.com";

// تابع هدایت
function handleRedirect() {
  // ما از تابع SDK برای هدایت استفاده می‌کنیم تا Warpcast بداند چه‌کار کند.
  if (window.sdk && window.sdk.actions && window.sdk.actions.navigateToExternalUrl) {
    window.sdk.actions.navigateToExternalUrl({ url: GOOGLE_URL });
  } else {
    // اگر در Warpcast نبودیم، به صورت عادی هدایت می‌کنیم
    window.location.href = GOOGLE_URL;
  }
}

export default function App() {
  
  // مهم: useEffect برای فراخوانی تابع ready() هنگام بارگذاری برنامه
  useEffect(() => {
    // این فراخوانی به Warpcast می‌گوید: "برنامه من آماده نمایش است!"
    if (window.sdk && window.sdk.actions && window.sdk.actions.ready) {
      window.sdk.actions.ready();
      console.log("Farcaster Mini App is Ready!");
    }
  }, []);

  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        backgroundColor: '#1E1E2F' 
    }}>
      <h1 style={{ color: 'white' }}>Mini App فعال شد!</h1>
      <button 
        onClick={handleRedirect}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          cursor: 'pointer',
          backgroundColor: '#7A00FF', // رنگ بنفش Warpcast
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          marginTop: '20px'
        }}
      >
        برو به Google 🚀 (Mini App)
      </button>
    </div>
  );
}