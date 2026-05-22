// Additional Info
"use client"

import { Card, CardContent } from "../ui/card"
import { Check } from "lucide-react"
import { features } from "@/lib/features"

export function AdditionalInfo() {
    return (
        <div className="flex justify-center py-12 bg-muted/20">
            <Card className="bg-primary text-primary-foreground shadow-xl w-full max-w-4xl">
                <CardContent className="pt-16 pb-16 text-center space-y-10">
                    <h3 className="text-3xl lg:text-4xl font-bold">
                        Why Choose Bondex Bridge?
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg lg:text-xl justify-items-center">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-4">
                                <Check className="w-6 h-6 text-accent shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}