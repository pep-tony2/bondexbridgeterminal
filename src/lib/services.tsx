import { Anchor, Container, Warehouse, Globe2, Truck } from 'lucide-react';

export const services = [
    {
        icon: <Anchor className="h-8 w-8" />,
        title: 'Bonded Terminal Operations',
        description: 'Our secure, specialized facility handles uncleared, high-value, or sensitive cargo under customs supervision. We facilitate complex clearance procedures without interrupting the logistical flow.',
        standards: ['AEO Certified', 'ISPS Code Compliant', 'Licensed Customs Bonded Facility'],
        sla: '24-hour clearance target',
    },
    {
        icon: <Container className="h-8 w-8" />,
        title: 'Container Freight Station (CFS)',
        description: 'Expert handling of Less than Container Load (LCL) and Full Container Load (FCL) cargo. We offer professional consolidation and deconsolidation services.',
        standards: ['ISO 9001 Certified', 'UN/EDIFACT EDI Compliant', 'SMDG Standards'],
        sla: '48-hour consolidation processing',
    },
    {
        icon: <Warehouse className="h-8 w-8" />,
        title: 'Storage and Warehousing',
        description: 'State-of-the-art warehousing facilities, including climate-controlled and high-security options, suitable for a wide array of commodities.',
        standards: ['ISO 14001 Environmental', 'IMDG Hazmat Compliant', 'Real-time Inventory Tracking'],
        sla: '24/7 access and monitoring',
    },
    {
        icon: <Globe2 className="h-8 w-8" />,
        title: 'Customs Brokerage',
        description: 'Our dedicated team of customs clearance specialists navigates all local and international customs, ensuring complete compliance and minimizing costly delays.',
        standards: ['Licensed Customs Broker', 'CTPAT Certified', 'AMS Compliant'],
        sla: 'Expedited clearance within 4 hours',
    },
    {
        icon: <Truck className="h-8 w-8" />,
        title: 'Freight Forwarding',
        description: 'Multimodal transport solutions across sea, air, and land to deliver cargo efficiently across the globe.',
        standards: ['IATA DGR Certified', 'Multi-Modal Tracking', 'EDI Documentation'],
        sla: 'Real-time shipment visibility',
    },
];
