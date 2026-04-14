import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VideoRep — B2B Video Presenter Trusted by 250+ Brands",
    template: "%s | VideoRep",
  },
  description:
    "VideoRep — Eric Presnall is the B2B video presenter trusted by 250+ brands. Presenter-led video ads, VSLs, and video funnels that outperform static creative.",
  metadataBase: new URL("https://videorep.co"),
  icons: {
    icon: "data:image/svg+xml,<svg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'><circle cx='16' cy='16' r='12.8' fill='none' stroke='%231e71e7' stroke-width='2.4' stroke-linecap='round'/><path d='M4.8 4.8L4.8 10.4M4.8 4.8L10.4 4.8' stroke='%231e71e7' stroke-width='2.4' fill='none' stroke-linecap='round'/><path d='M27.2 4.8L27.2 10.4M27.2 4.8L21.6 4.8' stroke='%231e71e7' stroke-width='2.4' fill='none' stroke-linecap='round'/><path d='M4.8 27.2L4.8 21.6M4.8 27.2L10.4 27.2' stroke='%231e71e7' stroke-width='2.4' fill='none' stroke-linecap='round'/><path d='M27.2 27.2L27.2 21.6M27.2 27.2L21.6 27.2' stroke='%231e71e7' stroke-width='2.4' fill='none' stroke-linecap='round'/></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,700;0,800;1,400&family=Cal+Sans&family=Inter+Tight:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://player.vimeo.com" />
      </head>
      <body>
        {children}

        {/* GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-26XY06GNDJ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-26XY06GNDJ');
          `}
        </Script>
      </body>
    </html>
  );
}
