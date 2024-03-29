import { Inter } from "next/font/google";
import "../components/style/style.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sumon Ahamed",
  description: "Sumon Ahamed Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
      <Navbar/>

        {children}
        
        <Footer></Footer>
        <ToastContainer/>
        </body>
      
    </html>
  );
}
