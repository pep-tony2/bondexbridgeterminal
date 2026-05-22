// Compliance and safety
import { Card, CardContent } from "../ui/card"
import { CheckCircle } from 'lucide-react';
import { compliancePoints } from "@/lib/compliancepoints";

export function Compliance() {
    return (
        <section className="py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Compliance & Safety</h2>
                    <Card className="border-primary/20">
                        <CardContent className="pt-6">
                            <div className="space-y-4">
                                {compliancePoints.map((point, index) => (
                                    <div key={index} className="flex gap-3 items-start">
                                        <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                        <p className="text-muted-foreground">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}