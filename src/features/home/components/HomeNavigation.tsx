import Image from "next/image"
import Link from "next/link"

export default function HomeNavigation() {
	return (
		<nav className="absolute top-0 z-10 w-full">
			<div className="container mx-auto flex items-center justify-between px-4 py-6">
				<div className="flex items-center gap-2">
					<Image
						src="/assets/35634168_04.svg?height=40&width=40"
						alt="Pawtastic Logo"
						width={40}
						height={40}
						className="rounded-full"
					/>
					<span className="text-xl font-semibold text-white">PAWTASTIC</span>
				</div>
				<div className="flex gap-6">
					<Link href="#bookingForm" className="text-white hover:text-white/80">
						About Us
					</Link>
					<Link href="#bookingForm" className="text-white hover:text-white/80">
						Schedule a visit
					</Link>
				</div>
			</div>
		</nav>
	)
}
