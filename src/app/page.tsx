import { CoreValues } from "@/components/landing-page/CoreValues";
import { CTASection } from "@/components/landing-page/CTASection";
import { GallerySection } from "@/components/landing-page/GallerySection";
import { HeroSection } from "@/components/landing-page/HeroSection";
import { MissionSection } from "@/components/landing-page/MissionSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <CoreValues />
      <GallerySection />
      <CTASection />
    </div>
  )
}