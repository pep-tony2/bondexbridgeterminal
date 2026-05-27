import { BrandIdentity } from "@/components/about/BrandIdentity";
import { Equipment } from "@/components/about/Equipment";
import { HeroSection } from "@/components/about/HeroSection";
import { Compliance } from "@/components/about/Safety";
import { Services } from "@/components/about/Services";
import { StrategicLocation } from "@/components/about/StrategicLocations";
import { Gallery } from "@/components/about/GallerySection";
import { Certifications } from "@/components/about/Certifications";
import { SupplyChainTracking } from "@/components/about/SupplyChainTracking";
import { ComplianceDashboard } from "@/components/about/ComplianceDashboard";

export const metadata = { title: "About" };

export default function AboutPage() {
    return (
        <div>
            <HeroSection />
            <BrandIdentity />
            <Services />
            <Certifications />
            <Compliance />
            <SupplyChainTracking />
            <ComplianceDashboard />
            <Equipment />
            <StrategicLocation />
            <Gallery />
        </div>
    )
}
