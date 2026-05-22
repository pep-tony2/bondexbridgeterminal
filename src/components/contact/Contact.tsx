// Contact
"use client"
import { AdditionalInfo } from "@/components/contact/AdditionalInfo"
import { ContactCards } from "@/components/contact/ContactCards"
import { HeroSection } from "@/components/contact/HeroSection"
import { MapSection } from "@/components/contact/MapSection"

export function Contact() {
    return (
        <div>
            <HeroSection />
            {/* Contact Info cards */}
            <section className="py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <ContactCards />
                    <AdditionalInfo />
                </div>
                <MapSection />
            </section>
        </div>
    )
}