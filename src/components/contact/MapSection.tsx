// Map Section
export function MapSection() {
    return (
        <section className="py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
                <div className="rounded-lg overflow-hidden h-96">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3976.2625219621964!2d7.1500250752704835!3d4.724399995250712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNDMnMjcuOCJOIDfCsDA5JzA5LjQiRQ!5e0!3m2!1sen!2sng!4v1774201014795!5m2!1sen!2sng"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}