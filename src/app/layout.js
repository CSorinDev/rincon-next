import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "El Rincón del Bocata",
  description: "Restaurante El Rincón del Bocata || Creado por Dev 55",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="mt-12 p-4 h-[calc(100vh-3rem)] overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  )
}