// Equipment and tech
import Image from "next/image"

export function Equipment() {
    return (
        <section className="py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold">
                            Equipment & Technology
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Material Handling Equipment
                                </h3>
                                <p className="text-muted-foreground">
                                    The crane icon in our logo represents our fleet of reach stackers,
                                    container handlers, forklifts, and specialized heavy-lift cranes,
                                    ensuring safe and efficient container movement.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2">
                                    Digital Infrastructure
                                </h3>
                                <p className="text-muted-foreground">
                                    Our advanced Terminal Operating System (TOS) integrates with
                                    customers' and partners' supply chain software for real-time
                                    tracking, reporting, and operational synchronization.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image
                            src="/equipment-modified.jpeg"
                            alt="Terminal Equipment"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-xl w-full h-145 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}