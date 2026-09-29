import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Ram Ponnala | Java Full Stack Developer",
  description:
    "Portfolio of Sai Ram Ponnala — Java, Spring Boot, Microservices, React, Next.js, SQL, MySQL and AWS.",
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