import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Headers from "@/components/Headers";
import "../components/Footer.css";
import Footer from "@/components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">

      <body>
        <Headers/>
        

        {children}

        <Footer/>

      </body>

    </html>
  );
}