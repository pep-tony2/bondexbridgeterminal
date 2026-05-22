import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const contactInfo = [
    {
        icon: <Mail className="h-6 w-6" />,
        title: 'Email',
        content: `customerservice@bondexbridgeterminal.com`,
        subcontent: 'bondexbridge.operations@gmail.com',
    },
    {
        icon: <Phone className="h-6 w-6" />,
        title: 'Phone',
        content: '+234 912 441 4532',
        subcontent: 'Mon-Fri 8am to 6pm',
    },
    {
        icon: <MapPin className="h-6 w-6" />,
        title: 'Head Office',
        content: 'Km 146 Okpako Ejamah Ebubu Eleme',
        subcontent: 'Along Onne Port Road, By Camp Junction, Rivers State',
    },
    {
        icon: <Clock className="h-6 w-6" />,
        title: 'Business Hours',
        content: 'Monday - Friday: 8:00 AM - 5:00 PM',
        subcontent: '---------',
    },
];