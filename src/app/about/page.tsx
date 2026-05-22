import { BrandIdentity } from "@/components/about/BrandIdentity";
import { Equipment } from "@/components/about/Equipment";
import { HeroSection } from "@/components/about/HeroSection";
import { Compliance } from "@/components/about/Safety";
import { Services } from "@/components/about/Services";
import { StrategicLocation } from "@/components/about/StrategicLocations";
import { Gallery } from "@/components/about/GallerySection";

export const metadata = { title: "About" };

export default function AboutPage() {
    return (
        <div>
            <HeroSection />
            <BrandIdentity />
            <Services />
            <Equipment />
            <StrategicLocation />
            <Compliance />
            <Gallery />
        </div>
    )
}