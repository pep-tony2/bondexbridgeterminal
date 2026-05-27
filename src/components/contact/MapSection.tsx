// Map Section
export function MapSection() {
    return (
        <section className="py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Find Us</h2>
                    <p className="text-muted-foreground">
                        Km 146 Okpako Ejamah Ebubu Eleme, Along Onne Port Road, By Camp Junction, Rivers State, Nigeria
                    </p>
                </div>
                <div className="rounded-lg overflow-hidden h-96 shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2625219621964!2d7.1500250752704835!3d4.724399995250712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f15!3m3!1m2!1s0x103b8e1d5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sKm%20146%20Okpako%20Ejamah%20Ebubu%20Eleme%2C%20Onne%20Port%20Road%2C%20Rivers%20State!5e0!3m2!1sen!2sng!4v1716901234567"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-foreground">
                        <strong>Location Details:</strong> Our terminal facility is strategically located along the Onne Port corridor, providing seamless access to port operations and efficient cargo handling. The facility is approximately 146 kilometers from Port Harcourt city center.
                    </p>
                </div>
            </div>
        </section>
    )
}
