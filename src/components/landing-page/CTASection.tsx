// CTA section
import Link from "next/link"
import { Button } from "../ui/button"

export function CTASection() {
    return (
        <section className="py-20 bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">Ready to Bridge Your Logistics Gap?</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                    Get in touch with our professional client service team for tailored logistics solutions
                </p>
                <Link href="/contact">
                    <Button size="lg" variant="secondary">Contact Us Today</Button>
                </Link>
            </div>
        </section>
    )
}