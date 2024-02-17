import type { Metadata } from "next"
import { Inter, Poppins, Volkhov } from "next/font/google"
import "./globals.css"
import Header from "./components/navigation/Header"
import Footer from "./components/navigation/Footer"

const inter = Inter({ subsets: [ "latin" ] })
const poppins = Poppins({ subsets: [ 'latin' ], weight: [ "400", "500", "600", "700" ] })
const volkhov = Volkhov({ subsets: [ 'latin' ], weight: [ "400", "700" ] })

export const metadata: Metadata = {
  title: "Private Hiking Guide in Hawaii | Hike Hawaii",
  description: "Personal Guide for your tour in Hawaii. Your are guaranteed of a great Adventure with us.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[ inter.className, poppins.className, volkhov.className ].toString()}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
