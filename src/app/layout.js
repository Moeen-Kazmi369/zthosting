import "./globals.css";
import "../../public/assets/css/mediaqueries.css";
import "../../public/assets/css/owl.carousel.min.css";
import "../../public/assets/css/owl.theme.default.min.css";
import "../../public/assets/bootstrap/bootstrap.min.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import GlobalStateProvider from "@/components/GlobalStateProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>ZThosting.com</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="assets/images/favicon/apple-icon-57x57.png"
        />
        {/* <!-- Add the rest of your link and meta tags here --> */}
        <link rel="stylesheet" href="assets/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="./assets/js/bootstrap.min.js" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link href="assets/css/style.css" rel="stylesheet" type="text/css" />
        <link
          href="assets/css/mediaqueries.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assets/css/owl.carousel.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assets/css/owl.theme.default.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css"
        />
      </Head>

      <body className={inter.className}>
        <GlobalStateProvider>
          <Header/>
          {children}
          <Footer/>
        </GlobalStateProvider>
      </body>
    </html>
  );
}
