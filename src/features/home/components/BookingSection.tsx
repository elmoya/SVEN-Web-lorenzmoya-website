"use client"

import Image from "next/image"
import BookingForm from "./BookingForm"

export default function BookingSection() {
	return (
		<section className="bg-slate-50 py-16">
			<div className="container mx-auto px-4">
				<div className="grid gap-12 lg:grid-cols-2">
					{/* Services Include */}
					<div
						className="relative bg-cover bg-center bg-no-repeat py-16"
						style={{ backgroundImage: "url('/assets/jay-wennington-CdK2eYhWfQ0-unsplash.jpg')" }}
					>
						{/* Gradient Overlay */}
						<div className="absolute inset-0 bg-gradient-to-b from-black/100 to-transparent"></div>

						<div className="relative z-10 mb-8 flex items-center gap-4 justify-center">
							<Image
								src="/assets/35634168_04.svg?height=50&width=50"
								alt="Logo"
								width={50}
								height={50}
								className="rounded-full"
							/>
							<span className="text-xl font-semibold text-slate-800 text-white">PAWTASTIC</span>
						</div>
						<div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6">
							{/* Text Content */}
							<div className="space-y-6 lg:w-2/3">
								<h3 className="text-lg font-semibold text-slate-800 text-white">All services include:</h3>
								<ul className="space-y-3 text-slate-600">
									<h3 className="text-lg font-semibold text-slate-800 text-white">All services include:</h3>
									<li className="flex items-center gap-2 ">
										<span className="text-white">•A photo update for you along</span>
									</li>
									<h3 className="text-lg font-semibold text-slate-800 text-white">All services include:</h3>
									<li className="flex items-center gap-2 ">
										<span className="text-white">•Notification of their arrival</span>
									</li>
									<h3 className="text-lg font-semibold text-slate-800 text-white">All services include:</h3>
									<li className="flex items-center gap-2 ">
										<span className="text-white">•Treats for your pet with you</span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<BookingForm />
				</div>
			</div>
		</section>
	)
}
