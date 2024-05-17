import AuthProvider from "@/./utils/SessionProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import NavBar from "@/components/NavBar";



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
      </body>
    </html>
  );
}
