import React from "react";

const PerformanceOptimizer = () => {
  return (
    <>
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/src/assets/fonts/Khula-ExtraBold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/src/assets/fonts/Khula-Regular.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/src/assets/fonts/Khula-SemiBold.ttf"
        as="font"
        type="font/ttf"
        crossOrigin="anonymous"
      />

      {/* Preload critical images */}
      <link rel="preload" href="/src/assets/img/header-img.jpg" as="image" />
      <link rel="preload" href="/Logo.png" as="image" />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Resource hints for better performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default PerformanceOptimizer;
