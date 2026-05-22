// Gallery Section
import Image from "next/image"
import { images } from "@/lib/images";

export function GallerySection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
                    Our Facilities
                </h2>

                <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Take a look at our state-of-the-art facilities and equipment used in delivering efficient logistics services.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, i) => (
                        <Image
                            key={i}
                            src={img.src}
                            alt={img.alt}
                            width={400}
                            height={300}
                            className="rounded-lg shadow-lg w-full h-90 object-cover transition-transform duration-300 hover:scale-105"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}