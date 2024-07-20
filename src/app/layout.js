import { Inter } from "next/font/google";
import "./globals.css";
// import NavBar from './components/Navbar'
// import Footer from './components/Footer'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VIVO PUSHANDO - Skateboarding Ap",
  description: "A simple wheel of basic and medium skateboarding tricks. Click the spin button to spin the wheel and see what Trick you must to land. try it! Only for fun and practice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      {/* <NavBar/> */}
      <body className={inter.className}>{children}</body>
      {/* <Footer/> */}
    </html>
  );
}
