
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cog } from 'lucide-react';

const ServiceCard = ({ title, description }: any) => {
    return (
        <Card className="w-auto p-2 rounded-md">
            <CardHeader>
                <CardTitle className="">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-foreground/80">{description}</p>
            </CardContent>
        </Card>
    );
};

const Service = () => {
    const services = [
        {
            title: 'Web Development',
            description:
                'Building custom web applications, e-commerce websites, and portals using cutting-edge technologies like HTML, CSS, JavaScript, React, Next.js, Astro, Node.js, and Express.js.',
        },
        // {
        //     title: 'Website Maintenance & Upgrades',
        //     developers: 3,
        //     description:
        //         'Ensuring your website runs smoothly and meets industry standards by providing regular maintenance, performance optimization, and feature upgrades.',
        // },
        {
            title: 'Database Development',
            description:
                'Designing, implementing, and maintaining robust database systems with technologies like MongoDB, MySQL, and PostgreSQL to power your web applications.',
        },
        {
            title: 'API Development',
            description:
                'Creating RESTful and GraphQL APIs to enable seamless communication between your applications and external systems, enhancing functionality and integration.',
        },
        {
            title: 'Cross-Platform Development',
            description:
                'Building mobile and desktop applications with React Native, Electron, and Node.js, providing a consistent experience across platforms.',
        },
        {
            title: 'Cloud Development',
            description:
                'Deploying applications to cloud platforms like AWS, DigitalOcean, Heroku, and Google Cloud using Docker and Nginx for reliable, scalable hosting.',
        },
        {
            title: 'Technical Consultation',
            description:
                'Providing expert consultation on technology stack choices, best practices, and architectural solutions tailored to your business needs.',
        },
    ];


    return (
        <div className="flex flex-col 4xl:gap-12 gap-8 2xl:px-6 py-8 4xl:py-12 w-full justify-center align-middle items-center" id="service">
            <div className="flex flex-col items-start w-full gap-4">
                <div className='flex items-center justify-center w-auto gap-2 px-2 py-1 align-middle border rounded-md'>
                    <Cog />
                    <span className="text-sm font-medium uppercase text-foreground/60">Service</span>
                </div>
                <h2 className="4xl:text-3xl text-2xl font-bold">What Services I Provide?</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 2xl:grid-cols-3 md:grid-cols-2">
                {services.map((service, index) => (
                    <ServiceCard key={index} title={service.title} description={service.description} />
                ))}
            </div>

        </div>
    );
};

export default Service;
