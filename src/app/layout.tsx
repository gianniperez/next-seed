import type { Metadata } from "next";
import "@/styles/globals.css";
import { AppProvider } from "@/providers/AppProvider";

export const metadata: Metadata = {
  title: "🚀 Next Seed Template",
  description:
    "A fast, scalable, and modern Next.js 16 template with FSD architecture.",
  openGraph: {
    title: "Next Seed",
    description: "Start your new project without boilerplate friction.",
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
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
