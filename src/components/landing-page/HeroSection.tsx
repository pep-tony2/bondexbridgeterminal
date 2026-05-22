// Hero section
import Link from "next/link"
import Image from "next/image"
import { Button } from "../ui/button"

export function HeroSection() {
    return (
        <section className="relative bg-linear-to-br from-primary/10 to-background py-20 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                            Bridging the Divide of Cargo Clearance
                            <span className="block text-primary">and Logistics</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Bondex Bridge Multinational Terminal Limited is an integrated logistics and maritime services provider specializing in the efficient clearance and transport of international cargo.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/about">
                                <Button className="shadow-lg" size="lg">Learn More</Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline">Get In Touch</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="/terminal-facility.jpeg"
                            alt="Bondex Bridge Terminal Facility"
                            className="rounded-lg shadow-2xl w-full h-130 object-cover"
                            width={600}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}