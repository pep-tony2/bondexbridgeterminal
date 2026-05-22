// Strategic Locations
import { Card, CardContent } from "../ui/card"

export function StrategicLocation() {
    return (
        <section className="py-16 lg:py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Strategic Locations & Markets</h2>
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-semibold mb-3">Multinational Scope</h3>
                                <p className="text-muted-foreground">
                                    Our "Multinational" status indicates that we have a significant operational presence and strategic partnerships in major global economic corridors, with specific terminal assets in key regions to facilitate international cargo flow.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="text-xl font-semibold mb-3">Strategic Reach</h3>
                                <p className="text-muted-foreground">
                                    Headquartered in a major logistics hub, we operate in direct proximity to deep-water ports and major transportation networks, providing unparalleled access to regional markets.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}