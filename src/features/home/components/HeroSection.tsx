import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
	return (
		<section className="relative h-[600px]">
			<Image
				src="/assets/andrew-s-ouo1hbizWwo-unsplash.jpg?height=600&width=1200"
				alt="Hero pet image"
				fill
				className="object-cover brightness-50"
			/>
			<div className="absolute inset-0 flex flex-col justify-center">
				<div className="container mx-auto px-4">
					<div className="ml-auto max-w-xl">
						<h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
							We care for your furry little loved ones.
						</h1>
						<Button size="lg" className="bg-white text-slate-800 hover:bg-white/90">
							<Link href="#bookingForm" className="text-black hover:text-gray/80">
								Schedule a visit
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}
