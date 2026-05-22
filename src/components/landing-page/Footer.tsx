// Footer
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <Image
                            src="/logo-cropped.jpeg"
                            alt="Bondex Bridge Multinational Terminal Limited"
                            width={120}
                            height={60}
                            className="h-16 w-auto mb-3"
                        />
                        <p className="text-sm text-muted-foreground">
                            Bridging the divide of cargo clearance and logistics
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Email: <a href="mailto:bondexbridge.operations@gmail.com" className="hover:text-primary">bondexbridge.operations@gmail.com</a>, <a href="mailto:customerservice@bondexbridgeterminal.com" className="hover:text-primary">customerservice@bondexbridgeterminal.com</a></li>
                            <li>Phone: <a href="tel:+2349124414532" className="hover:text-primary">+234 912 441 4532</a></li>
                            <li>Address: Km 146 Okpako Ejamah Ebubu Eleme, along Onne port road, by camp junction,  Rivers State.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {currentYear} Bondex Bridge Multinational Terminal Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}