// Gallery
import Image from "next/image"

export function Gallery() {
    return (
        <section className="py-16 lg:py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Facilities</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Image
                        src="/terminal-facility.jpeg"
                        alt="Terminal Facility"
                        className="rounded-lg shadow-lg w-full h-130 object-cover transition-transform duration-300 hover:scale-105"
                        width={400}
                        height={300}
                    />
                    <Image
                        src="/terminal-entrance.jpeg"
                        alt="Office Building"
                        className="rounded-lg shadow-lg w-full h-130 object-cover transition-transform duration-300 hover:scale-105"
                        width={400}
                        height={300}
                    />
                </div>
            </div>
        </section>
    )
}