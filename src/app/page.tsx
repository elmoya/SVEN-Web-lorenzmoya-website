import BookingSection from "@/features/home/components/BookingSection"
import HeroSection from "@/features/home/components/HeroSection"
import HomeNavigation from "@/features/home/components/HomeNavigation"
import ServicesSection from "@/features/home/components/ServicesSection"

export default function Home() {
	return (
		<main className="min-h-screen bg-white">
			<HomeNavigation />
			<HeroSection />
			<ServicesSection />
			<BookingSection />
		</main>
	)
}
