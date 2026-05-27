'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { regulatoryBodies, auditCycles, complianceFramework } from "@/lib/regulatory-bodies";
import { Badge } from "../ui/badge";
import { CheckCircle2, Calendar, Building2 } from 'lucide-react';

export function ComplianceDashboard() {
    return (
        <section className="py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Regulatory Compliance Framework</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Governed by international maritime, customs, and trade organizations
                    </p>
                </div>

                {/* Regulatory Bodies */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6">International Regulatory Bodies</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {regulatoryBodies.map((body) => (
                            <Card key={body.id}>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2">
                                        <Building2 className="h-5 w-5 text-primary" />
                                        {body.acronym}
                                    </CardTitle>
                                    <p className="text-sm font-medium text-muted-foreground mt-1">{body.name}</p>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-sm text-muted-foreground">{body.description}</p>
                                    <div>
                                        <p className="text-xs font-semibold mb-1.5">Relevant Standards:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {body.standards.map((std, idx) => (
                                                <Badge key={idx} variant="outline" className="text-xs">
                                                    {std}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Audit Cycles */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold mb-6">Audit & Certification Cycles</h3>
                    <div className="space-y-2">
                        {auditCycles.map((cycle, idx) => (
                            <Card key={idx}>
                                <CardContent className="pt-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <div>
                                            <p className="text-sm font-semibold mb-1">Standard</p>
                                            <p className="text-sm font-medium text-primary">{cycle.standard}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold mb-1 flex items-center gap-1">
                                                <Calendar className="h-4 w-4" /> Frequency
                                            </p>
                                            <p className="text-sm text-muted-foreground">{cycle.frequency}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold mb-1">Type</p>
                                            <p className="text-sm text-muted-foreground">{cycle.auditType}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold mb-1">Scope</p>
                                            <p className="text-sm text-muted-foreground">{cycle.scope}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Compliance Pillars */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6">Compliance Framework Pillars</h3>
                    <div className="space-y-4">
                        {complianceFramework.map((pillar, idx) => (
                            <Card key={idx}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{pillar.pillar}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="text-sm font-semibold mb-2">Governing Standards:</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {pillar.standards.map((std, sidx) => (
                                                <Badge key={sidx} className="bg-blue-100 text-blue-800 border-blue-200">
                                                    {std}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold mb-2">Key Activities:</p>
                                        <ul className="space-y-1">
                                            {pillar.keyActivities.map((activity, aidx) => (
                                                <li key={aidx} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                                                    <span>{activity}</span>
                                                </li>
                                            ))}
                                        </ul>
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
