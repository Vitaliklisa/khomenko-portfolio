import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://khomenko.de"),
  title: {
    template: "%s | Vitalii Khomenko",
    default: "Vitalii Khomenko — Digital things, made with curiosity",
  },
  description:
    "The personal portfolio of Vitalii Khomenko: software developer, curious builder, and maker of digital things.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://khomenko.de",
    siteName: "Vitalii Khomenko",
    title: "Vitalii Khomenko — Digital things, made with curiosity",
    description:
      "A software developer turning curiosity into useful digital products.",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f5ef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="khomenko-theme"
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
