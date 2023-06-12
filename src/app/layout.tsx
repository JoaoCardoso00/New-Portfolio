import { CustomCursor } from "@/components/cursor";
import "./globals.css";
import { Playfair_Display } from "next/font/google";

const PlayFairDisplay = Playfair_Display({ subsets: ["latin"] });

export const metadata = {
  title: "João Cardoso",
  description: "Welcome to my Portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={PlayFairDisplay.className}>
        <CustomCursor>{children}</CustomCursor>
      </body>
    </html>
  );
}
