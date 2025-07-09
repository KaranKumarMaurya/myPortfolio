import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import dynamic from 'next/dynamic';
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

// Dynamically import client-side components
const ToastContainer = dynamic(
  () => import('react-toastify').then((c) => c.ToastContainer),
  { ssr: false }
);

const Navbar = dynamic(() => import('./components/navbar'), { ssr: true });
const Footer = dynamic(() => import('./components/footer'), { ssr: true });
const ScrollToTop = dynamic(() => import('./components/helper/scroll-to-top'), { 
  ssr: false 
});

export const metadata = {
  title: "Portfolio of Karan - Full Stack & Flutter Developer",
  description: "This is the portfolio of Karan Kumar Maurya...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      {/* Uncomment when ready with proper env var */}
      {/* <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} /> */}
    </html>
  );
}