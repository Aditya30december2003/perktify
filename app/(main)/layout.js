
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import "@/styles/globals.css"
import Header from "@/modules/components/layout/Header";
import Footer from "@/modules/components/layout/Footer";
import ScrollProgress from "@/modules/components/layout/ScrollProgress";
import CustomScripts from "@/modules/scripts/CustomScripts";
import { fetchBanner, fetchheaderFooter } from "@/appwrite/data";
import { cookies } from "next/headers";
import PopUp from "@/modules/components/PopUp"; 
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from '../contexts/ThemeContext';
import BlogPost from '@/modules/components/BlogPost';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });


export const metadata = {
  title: "Perktify",
  description: "Your Gateway to cutting-edge Innovative Web Solutions ",
};

// export const fetchCache = 'force-no-store';
export default async function RootLayout({ children }) {
  cookies();

  let data = null;

  try {
    data = await fetchheaderFooter();
  } catch (error) {
    console.error("Failed to fetch header/footer data:", error);
  }

  if (!data) {
    return (
      <html lang="en">
        <body
          data-mobile-nav-style="full-screen-menu"
          data-mobile-nav-bg-color=""
          className={`${inter.className} antialiased`}
        >
          <div>{children}</div>
        </body>
      </html>
    ); 
  }

  return (
    <html lang="en">
      <body 
        data-mobile-nav-style="full-screen-menu"
        data-mobile-nav-bg-color=""
        className={`${inter.variable} ${jakarta.variable}`}
      >
        <ThemeProvider>
        <Header />
        {children}
        <Footer footerData={data.footerData} />
        {/* <ScrollProgress />
        <CustomScripts /> */}
               <ToastContainer position="top-center" autoClose={3000} /> 
               {/* <BlogPost/> */}
        {/* <PopUp banner={banner}/> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
