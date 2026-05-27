'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { certifications } from "@/lib/certifications";
import { Badge } from "../ui/badge";
import { CheckCircle2 } from 'lucide-react';

export function Certifications() {
    const getStatusColor = (validUntil: string) => {
        const expiryDate = new Date(validUntil);
        const today = new Date();
        const daysUntilExpiry = (expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
        
        if (daysUntilExpiry > 365) return 'bg-green-50 border-green-200';
        if (daysUntilExpiry > 90) return 'bg-yellow-50 border-yellow-200';
        return 'bg-red-50 border-red-200';
    };

    const getStatusBadge = (validUntil: string) => {
        const expiryDate = new Date(validUntil);
        const today = new Date();
        const daysUntilExpiry = (expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);
        
        if (daysUntilExpiry > 365) return <Badge className="bg-green-600">Active & Valid</Badge>;
        if (daysUntilExpiry > 90) return <Badge className="bg-yellow-600">Expiring Soon</Badge>;
        return <Badge className="bg-red-600">Renewal Required</Badge>;
    };

    const categorizedCerts = certifications.reduce((acc: { [key: string]: typeof certifications }, cert) => {
        if (!acc[cert.category]) acc[cert.category] = [];
        acc[cert.category].push(cert);
        return acc;
    }, {});

    return (
        <section className="py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">International Certifications & Standards</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive compliance with world-standard shipping, logistics, and safety certifications
                    </p>
                </div>

                <div className="space-y-8">
                    {Object.entries(categorizedCerts).map(([category, certs]) => (
                        <div key={category}>
                            <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {certs.map((cert) => (
                                    <Card key={cert.id} className={`${getStatusColor(cert.validUntil)}`}>
                                        <CardHeader>
                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                <div className="text-primary">
                                                    {cert.icon}
                                                </div>
                                                {getStatusBadge(cert.validUntil)}
                                            </div>
                                            <CardTitle className="text-lg">{cert.name}</CardTitle>
                                            <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <p className="text-sm">{cert.description}</p>
                                            <div className="text-xs text-muted-foreground space-y-1">
                                                <p><strong>Scope:</strong> {cert.scope}</p>
                                                <p><strong>Valid Until:</strong> {new Date(cert.validUntil).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compliance Matrix */}
                <div className="mt-12 p-6 bg-muted/30 rounded-lg border">
                    <h3 className="text-xl font-semibold mb-6">Compliance Coverage Matrix</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {certifications.map((cert) => (
                            <div key={cert.id} className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                                <span className="text-sm font-medium">{cert.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
