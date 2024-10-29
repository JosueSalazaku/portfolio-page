import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/Components/ThemeProvider";
import Nav from "@/Components/Nav";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mx-auto h-screen max-w-screen-sm font-roboto text-[17px] mb-14 w-full flex-1 px-4 pb-8 dark:bg-black dark:text-white">
        <ThemeProvider
          attribute="class"           
          defaultTheme="light"         
          enableSystem                 
          disableTransitionOnChange   
        >
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
