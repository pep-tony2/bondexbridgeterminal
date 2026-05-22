// Services section
import { services } from "@/lib/services";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function Services() {
    return (
        <section className="py-16 lg:py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive terminal operations and integrated logistics solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="h-full">
                            <CardHeader>
                                <div className="text-primary mb-3">
                                    {service.icon}
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}