import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LogiSwift - Streamline Your Logistics",
  description:
    "LogiSwift offers efficient booking, dispatching, tracking, and NDR management solutions for modern logistics.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
