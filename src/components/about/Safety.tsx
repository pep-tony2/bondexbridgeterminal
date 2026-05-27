// Compliance and safety
import { Card, CardContent } from "../ui/card"
import { CheckCircle, AlertCircle } from 'lucide-react';
import { compliancePoints } from "@/lib/compliancepoints";

export function Compliance() {
    return (
        <section className="py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">Compliance & Safety Standards</h2>
                    <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                        Comprehensive international standards compliance ensuring safety, security, and operational excellence
                    </p>
                    
                    <div className="space-y-4">
                        {compliancePoints.map((point, index) => (
                            <Card key={index} className="border-l-4 border-l-primary">
                                <CardContent className="pt-6">
                                    <div className="flex gap-4 items-start">
                                        <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                        <div className="flex-grow">
                                            <h3 className="font-semibold mb-2">{point.title}</h3>
                                            <p className="text-muted-foreground text-sm mb-3">{point.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {point.standards.map((standard, idx) => (
                                                    <span key={idx} className="inline-block text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded">
                                                        {standard}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Compliance Assurance Box */}
                    <Card className="mt-8 bg-green-50 border-green-200">
                        <CardContent className="pt-6">
                            <div className="flex gap-3">
                                <AlertCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-green-900 mb-1">Audit Ready & Compliant</h3>
                                    <p className="text-sm text-green-700">
                                        Our facility maintains continuous compliance with all international maritime, customs, and trade standards. Regular third-party audits ensure consistent adherence to ISO 9001, SOLAS, ISPS Code, and customs requirements. We conduct internal audits quarterly and maintain detailed compliance documentation.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
