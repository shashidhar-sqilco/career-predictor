import AuthProvider from "@/./utils/SessionProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import NavBar1 from "@/components/NavBar1";


export const metadata: Metadata = {
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressContentEditableWarning
        suppressHydrationWarning
       
      >
        <AuthProvider>
          <NavBar/>
          {children}
        
        </AuthProvider>
          <Footer />
      </body>
    </html>
  );
}
