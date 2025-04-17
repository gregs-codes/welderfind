import { GoogleOAuthProvider } from "@react-oauth/google";
import { Geist, Geist_Mono } from "next/font/google";
import { UserProvider } from "./context/UserContext"; // Adjust the import path as necessary
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WelderFind",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description: "WelderFind is a platform to connect with professional welders in your area.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
          <UserProvider>{children}</UserProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}