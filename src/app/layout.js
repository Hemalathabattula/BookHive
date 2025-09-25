import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import BannerWrapper from "./components/BannerWrapper";
import { RecentlyViewedProvider } from "./context/RecentlyViewedContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BookHive - Your Book Destination",
  description: "Explore the latest books and genres at BookHive",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RecentlyViewedProvider>
          {/* Header includes Mega Menu and Banner */}
          <Header />
          <BannerWrapper />

          {/* Page content */}
          <main>{children}</main>
        </RecentlyViewedProvider>
      </body>
    </html>
  );
}
