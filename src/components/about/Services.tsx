// Services section
import { services } from "@/lib/services";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function Services() {
    return (
        <section className="py-16 lg:py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive terminal operations and integrated logistics solutions with world-standard certifications
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="h-full flex flex-col">
                            <CardHeader>
                                <div className="text-primary mb-3">
                                    {service.icon}
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow space-y-4">
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                                
                                <div>
                                    <p className="text-xs font-semibold mb-2 text-muted-foreground">Standards & Certifications:</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {service.standards.map((standard, idx) => (
                                            <Badge key={idx} variant="outline" className="text-xs">
                                                {standard}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-semibold text-primary">SLA: {service.sla}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
