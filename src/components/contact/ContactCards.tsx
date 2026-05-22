// Contact cards
import { contactInfo } from "@/lib/contactinfo";
import { Card, CardContent } from "../ui/card";

export function ContactCards() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
                <Card key={index} className="text-center">
                    <CardContent className="pt-6 space-y-3">
                        <div className="flex justify-center text-primary">
                            {info.icon}
                        </div>

                        <h3 className="font-semibold">{info.title}</h3>

                        <p className="text-sm text-foreground wrap-break-word">
                            {info.content}
                        </p>

                        {info.subcontent && (
                            <p className="text-xs text-muted-foreground wrap-break-word">
                                {info.subcontent}
                            </p>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}