'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ediStandards, ediCapabilities, trackingCapabilities } from "@/lib/edis-standards";
import { Badge } from "../ui/badge";
import { MapPin, Clock, Zap, Package } from 'lucide-react';

export function SupplyChainTracking() {
    return (
        <section className="py-16 lg:py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Supply Chain Visibility & EDI Standards</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Real-time tracking with international EDI standards and advanced supply chain transparency
                    </p>
                </div>

                {/* Tracking Capabilities */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6">Real-Time Tracking Capabilities</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {trackingCapabilities.map((capability, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MapPin className="h-5 w-5 text-primary" />
                                        <span className="text-lg">{capability.feature}</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                                    <div className="flex items-center gap-2 text-xs font-medium text-primary">
                                        <Clock className="h-4 w-4" />
                                        Update: {capability.update_frequency}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* EDI Standards */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6">EDI Standards & Integration</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {ediStandards.map((standard) => (
                            <Card key={standard.id}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{standard.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground mt-1">{standard.fullName}</p>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-sm">{standard.description}</p>
                                    
                                    <div>
                                        <p className="text-sm font-semibold mb-2">Document Types:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {standard.documentTypes.map((docType, idx) => (
                                                <Badge key={idx} variant="outline" className="text-xs">
                                                    {docType}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold mb-2">Key Features:</p>
                                        <ul className="text-xs space-y-1">
                                            {standard.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <Zap className="h-3 w-3 text-primary mt-0.5 shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* EDI Capabilities & SLAs */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6">EDI Capabilities & Service Level Agreements</h3>
                    <div className="space-y-3">
                        {ediCapabilities.map((cap, index) => (
                            <Card key={index}>
                                <CardContent className="pt-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div>
                                            <p className="text-sm font-semibold mb-1">Capability</p>
                                            <p className="text-sm font-medium text-primary">{cap.capability}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold mb-1">Standards</p>
                                            <div className="flex flex-wrap gap-1">
                                                {cap.standards.map((std, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-xs">
                                                        {std}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold mb-1">Benefit</p>
                                            <p className="text-sm text-muted-foreground">{cap.benefit}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold mb-1">SLA</p>
                                            <p className="text-sm font-medium text-green-600">{cap.sla}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
