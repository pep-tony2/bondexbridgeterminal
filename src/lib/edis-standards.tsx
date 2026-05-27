export const ediStandards = [
  {
    id: 'unedifact',
    name: 'UN/EDIFACT',
    fullName: 'United Nations Electronic Data Interchange For Administration, Commerce and Trade',
    description: 'International standard for electronic data interchange in supply chain management',
    documentTypes: ['ORDERS', 'INVOIC', 'DESADV', 'RECADV', 'SHPMNT', 'CUSCAR', 'IFTMBC'],
    features: [
      'Real-time order management',
      'Automated invoicing and payments',
      'Delivery status updates',
      'Customs documentation',
      'Shipment tracking',
    ],
  },
  {
    id: 'edi-xml',
    name: 'XML-based EDI',
    fullName: 'Extensible Markup Language Electronic Data Interchange',
    description: 'Modern XML standard for structured data exchange in supply chains',
    documentTypes: ['PO', 'Invoice', 'ASN', 'Shipment', 'Receipt', 'Customs', 'Manifest'],
    features: [
      'Human-readable format',
      'Web service integration',
      'Enhanced data validation',
      'Real-time visibility',
      'Multi-language support',
    ],
  },
  {
    id: 'smdg',
    name: 'SMDG (Shipmasters Message Design Group)',
    fullName: 'Maritime EDI standards for vessel operations',
    description: 'Maritime industry standards for electronic communication between ships and ports',
    documentTypes: ['Bay Plans', 'Load Plans', 'Customs Manifests', 'Port Schedules', 'Container Status'],
    features: [
      'Vessel scheduling coordination',
      'Container manifest management',
      'Port operation optimization',
      'Real-time berth information',
      'Dangerous goods documentation',
    ],
  },
  {
    id: 'edi-customs',
    name: 'Customs EDI Standards',
    fullName: 'Electronic Data Interchange for Customs Procedures',
    description: 'Standardized EDI for customs documentation and border crossing procedures',
    documentTypes: ['Import Declaration', 'Export Declaration', 'Transit Documents', 'Manifest', 'Commercial Invoice'],
    features: [
      'Automated customs clearance',
      'HS Code validation',
      'Tariff calculation',
      'Document audit trails',
      'Multi-country compliance',
    ],
  },
  {
    id: 'bolapi',
    name: 'Bill of Lading API Standards',
    fullName: 'Application Programming Interface for Digital BoL',
    description: 'Digital bill of lading and transport document standards',
    documentTypes: ['eBoL', 'Master BoL', 'House BoL', 'Sea Waybill', 'Air Waybill'],
    features: [
      'Digital signature support',
      'Blockchain integration',
      'Real-time document status',
      'Multi-party access control',
      'Legal compliance',
    ],
  },
];

export const ediCapabilities = [
  {
    capability: 'Real-Time Order Processing',
    standards: ['UN/EDIFACT', 'XML-EDI'],
    benefit: 'Instant order confirmation and processing',
    sla: '99.9% uptime',
  },
  {
    capability: 'Automated Customs Clearance',
    standards: ['Customs EDI', 'UN/EDIFACT'],
    benefit: 'Expedited border crossing and documentation',
    sla: '24-hour clearance target',
  },
  {
    capability: 'Supply Chain Visibility',
    standards: ['SMDG', 'XML-EDI'],
    benefit: 'End-to-end shipment tracking',
    sla: 'Real-time updates every 15 minutes',
  },
  {
    capability: 'Automated Documentation',
    standards: ['BoL API', 'Customs EDI'],
    benefit: 'Digital document generation and validation',
    sla: 'Document generation within 5 minutes',
  },
  {
    capability: 'Port Operations Coordination',
    standards: ['SMDG', 'XML-EDI'],
    benefit: 'Optimized berth allocation and scheduling',
    sla: '98% scheduling accuracy',
  },
  {
    capability: 'Dangerous Goods Management',
    standards: ['UN/EDIFACT', 'SMDG'],
    benefit: 'Compliant hazmat documentation and handling',
    sla: 'IMDG Code 100% compliance',
  },
];

export const trackingCapabilities = [
  {
    feature: 'Real-Time GPS Tracking',
    description: 'Live vessel and cargo location tracking with geofencing',
    update_frequency: 'Every 5 minutes',
  },
  {
    feature: 'Multi-Modal Tracking',
    description: 'Unified tracking across sea, air, rail, and truck transport',
    update_frequency: 'Every 15 minutes',
  },
  {
    feature: 'Customs Status Updates',
    description: 'Real-time customs clearance status and documentation progress',
    update_frequency: 'On event basis',
  },
  {
    feature: 'Temperature & Humidity Monitoring',
    description: 'IoT sensor monitoring for climate-controlled cargo',
    update_frequency: 'Every 10 minutes',
  },
  {
    feature: 'Event Notifications',
    description: 'Automated alerts for departure, arrival, delays, and exceptions',
    update_frequency: 'Real-time',
  },
  {
    feature: 'Predictive ETA',
    description: 'AI-powered estimated time of arrival calculations',
    update_frequency: 'Every 4 hours',
  },
];
