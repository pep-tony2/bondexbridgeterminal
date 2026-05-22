// Logo philosophy
export function BrandIdentity() {
    return (
        <section className="py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="/logo-cropped.jpeg"
                            alt="Bondex Bridge Logo"
                            className="w-full max-w-md mx-auto"
                        />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold">Our Brand Identity</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our logo—featuring an industrial crane integrated with our corporate lettermark, all contained within a compass-like circle—epitomizes our commitment to precise handling, technological integration, and a strategic, international outlook.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}