import Wrapper from "./(useClient)/Wrapper";
import Navbar from "./Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Server Actions Demo",
  description: "Made by Eyad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className && "dark:bg-black bg-white"}>
        <Wrapper>
          <Navbar />
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
