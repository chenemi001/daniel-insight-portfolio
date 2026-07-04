import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Insights | Data Analyst Portfolio",
  description:
    "Professional portfolio of Daniel Alhassan showcasing data analysis, business intelligence, Power BI dashboards, MySQL projects, and data visualization.",
  keywords: [
    "Data Analyst",
    "Power BI",
    "MySQL",
    "Business Intelligence",
    "Data Visualization",
    "Analytics",
    "Portfolio",
  ],
  authors: [{ name: "Daniel Alhassan" }],
  creator: "Daniel Alhassan",
  openGraph: {
    title: "Daniel Insights | Data Analyst Portfolio",
    description:
      "Explore Daniel Alhassan's portfolio featuring Power BI dashboards, analytics projects, and business intelligence solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}