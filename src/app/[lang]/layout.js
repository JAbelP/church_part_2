import { Inter } from "next/font/google";
import "./globals.css";
import LanguageSelector from "./_components/flagComponents/flagSelector";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <>
          <LanguageSelector />
          {children}
        </>
      </body>
    </html>
  );
}
