import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function ServicesSection() {
	const pets = [
		{
			image: "/assets/alec-favale-Ivzo69e18nk-unsplash.jpg?height=300&width=300",
		},
		{
			image: "/assets/alvan-nee-ZCHj_2lJP00-unsplash.jpg?height=300&width=300",
		},
		{
			image: "/assets/krista-mangulsone-9gz3wfHr65U-unsplash.jpg?height=300&width=300",
		},
		{
			image: "/assets/bonnie-kittle-MUcxe_wDurE-unsplash.jpg?height=300&width=300",
		},
	]

	return (
		<section className="py-16">
			<div className="container mx-auto p-12">
				<div className="grid gap-12 lg:grid-cols-2">
					<div className="flex flex-col justify-center items-start text-left h-full">
						<h2 className="mb-4 text-3xl font-bold text-slate-800">
							Expert care for your furry, feathery, or scaley friend
						</h2>
						<p className="mb-6 text-slate-600">
							We know how stressful it is to leave your pets at home alone. We're a team of experienced animal
							caregivers, well connected to local veterinarians. Trust us to love them like our own, and to keep them
							safe and happy till you're home.
						</p>
						<Button size="lg" className="bg-white text-slate-800 hover:bg-white/90 self-start">
							<Link href="#bookingForm" className="text-black hover:text-gray-800">
								Schedule a visit
							</Link>
						</Button>
					</div>

					<div className="grid grid-cols-2 gap-4">
						{pets.map((pet, index) => (
							<Card key={index} className="overflow-hidden">
								<CardContent className="p-0">
									<div className="relative aspect-square">
										<Image
											src={pet.image}
											alt={`Pet care ${index}`}
											fill
											className="object-cover"
										/>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
