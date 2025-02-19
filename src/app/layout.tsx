import type { Metadata } from "next"
import { Geist, Geist_Mono, Open_Sans } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
})

const openSans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "600", "700"] })

export const metadata: Metadata = {
	title: "Pet Booking App",
	description: "We care for your furry little loved ones",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${openSans.className} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	)
}
