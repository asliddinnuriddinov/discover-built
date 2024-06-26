import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Link from "next/link";
import { FaPhoneAlt } from 'react-icons/fa'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import Rights from "@/components/Rights";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Discover Invest",
  description: "Website for organization called Discover Invest",
  icons:{
    icon:"/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer/>
        <Link className={`hidden z-50 md:block transition-colors text-white duration-500 text-xl lg:text-[24px] pulse__animation-2 bg-main fixed right-[3%] bottom-[5%] p-4 lg:p-5`} href={'tel:+998712888888'}>
            <FaPhoneAlt/>
        </Link>
        <Nav/>
        {children}
        <Footer/>
        <Rights/>
        </body>
    </html>
  );
}
