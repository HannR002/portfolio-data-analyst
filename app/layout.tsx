import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import { GoogleAnalytics } from "@next/third-parties/google";
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Muhammad Farhan | Data & Systems Portfolio",
    template: "%s | Muhammad Farhan",
  },
  description:
    "Selected projects by Muhammad Farhan: spatial analytics, information systems, and digital tools. Explore the problem, approach, implementation, and next steps.",
  authors: [{ name: "Muhammad Farhan" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-6C89K5WKQG" />
      </body>
    </html>
  );
}
