import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import ThemeBar from "@/components/ThemeBar"; // 👈 AJOUT ICI

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Mood Tracker",
  description: "Suivez vos émotions au quotidien",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="transition-colors duration-300">
        <ThemeBar />
        {children}
      </body>
    </html>
  );
}
