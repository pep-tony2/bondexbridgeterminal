// Core Values
import { coreValues } from "@/lib/coreValues"
import { Card, CardContent } from "../ui/card"

export function CoreValues() {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
                    <p className="text-muted-foreground">The principles that guide our operations</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreValues.map((value, index) => (
                        <Card key={index} className="border-2 hover:border-primary transition-colors">
                            <CardContent className="pt-6 text-center space-y-4">
                                <div className="flex justify-center text-primary">
                                    {value.icon}
                                </div>
                                <h3 className="font-semibold text-xl">{value.title}</h3>
                                <p className="text-sm text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}