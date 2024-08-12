import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Portfolio",
  description: "portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./styles.css" />
        <link rel="icon" type="image.jpg" href="./images/harvardSolo.jpg" /> 
      </Head>
      <body >{children}</body>
    </html>
  );
}
