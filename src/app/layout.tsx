import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Josué Salazaku",
  description: "My developer Portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        id="main-body"
        className="flex flex-col min-h-screen font-normal text-[17px] mx-auto max-w-screen-sm w-full px-4 transition-colors duration-700 ease-in-out dark:bg-[#111111] dark:text-white"
      >
        <ThemeProvider>
          <Nav />
          <main className="flex-grow">{children}</main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
