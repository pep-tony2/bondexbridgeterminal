import { Anchor, Container, Warehouse, Globe2, Truck } from 'lucide-react';

export const services = [
    {
        icon: <Anchor className="h-8 w-8" />,
        title: 'Bonded Terminal Operations',
        description: 'Our secure, specialized facility handles uncleared, high-value, or sensitive cargo under customs supervision. We facilitate complex clearance procedures without interrupting the logistical flow.',
    },
    {
        icon: <Container className="h-8 w-8" />,
        title: 'Container Freight Station (CFS)',
        description: 'Expert handling of Less than Container Load (LCL) and Full Container Load (FCL) cargo. We offer professional consolidation and deconsolidation services.',
    },
    {
        icon: <Warehouse className="h-8 w-8" />,
        title: 'Storage and Warehousing',
        description: 'State-of-the-art warehousing facilities, including climate-controlled and high-security options, suitable for a wide array of commodities.',
    },
    {
        icon: <Globe2 className="h-8 w-8" />,
        title: 'Customs Brokerage',
        description: 'Our dedicated team of customs clearance specialists navigates all local and international customs, ensuring complete compliance and minimizing costly delays.',
    },
    {
        icon: <Truck className="h-8 w-8" />,
        title: 'Freight Forwarding',
        description: 'Multimodal transport solutions across sea, air, and land to deliver cargo efficiently across the globe.',
    },
];