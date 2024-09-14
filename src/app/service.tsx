import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';

// Service Card component using shadcn/ui
const ServiceCard = ({ title, developers, description }: any) => {
    return (
        <Card className="w-full mx-4 my-4 sm:w-72">
            <CardHeader>
                <CardTitle className="">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="">{developers} Developers</p>
                <p className="mt-4">{description}</p>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button className="">Get Started</Button>
            </CardFooter>
        </Card>
    );
};

// Pricing Card component using shadcn/ui
const PricingCard = ({ price, duration, features }: any) => {
    return (
        <Card className="w-full mx-4 my-4 sm:w-72">
            <CardHeader>
                <CardTitle className="text-4xl">${price}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="">{duration}</p>
                <ul className="mt-4 list-disc list-inside">
                    {features.map((feature: any, index: React.Key | null | undefined) => (
                        <li key={index} className="mt-2">
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button className="">Order Now</Button>
            </CardFooter>
        </Card>
    );
};

const Service = () => {
    const services = [
        {
            title: 'Web Development',
            developers: 2,
            description:
                'Building custom web applications, e-commerce websites, and portals using cutting-edge technologies like HTML, CSS, JavaScript, React, Next.js, Astro, Node.js, and Express.js.',
        },
        {
            title: 'Website Maintenance & Upgrades',
            developers: 3,
            description:
                'Ensuring your website runs smoothly and meets industry standards by providing regular maintenance, performance optimization, and feature upgrades.',
        },
        {
            title: 'Database Development',
            developers: 2,
            description:
                'Designing, implementing, and maintaining robust database systems with technologies like MongoDB, MySQL, and PostgreSQL to power your web applications.',
        },
        {
            title: 'API Development',
            developers: 4,
            description:
                'Creating RESTful and GraphQL APIs to enable seamless communication between your applications and external systems, enhancing functionality and integration.',
        },
        {
            title: 'Cross-Platform Development',
            developers: 3,
            description:
                'Building mobile and desktop applications with React Native, Electron, and Node.js, providing a consistent experience across platforms.',
        },
        {
            title: 'Cloud Development',
            developers: 5,
            description:
                'Deploying applications to cloud platforms like AWS, DigitalOcean, Heroku, and Google Cloud using Docker and Nginx for reliable, scalable hosting.',
        },
        {
            title: 'Technical Consultation',
            developers: 1,
            description:
                'Providing expert consultation on technology stack choices, best practices, and architectural solutions tailored to your business needs.',
        },
    ];

    const pricing = [
        {
            price: 49,
            duration: 'PER HOUR',
            features: [
                'Developing custom web applications and websites',
                'Fixing bugs and optimizing performance',
                'API integration and custom solutions',
                'Extended support for 3 months',
            ],
        },
        {
            price: 199,
            duration: 'PER DAY',
            features: [
                'Full-stack development for web and mobile applications',
                'Comprehensive website upgrades and maintenance',
                'Database setup and optimization',
                'Extended support for 6 months',
            ],
        },
    ];

    return (
        <div className="p-8">
            {/* Services Section */}
            <h1 className="mb-8 text-3xl font-bold text-center">What Services I Provide?</h1>
            <div className="flex flex-wrap justify-center">
                {services.map((service, index) => (
                    <ServiceCard key={index} title={service.title} developers={service.developers} description={service.description} />
                ))}
            </div>

            {/* Pricing Section */}
            <h2 className="mt-16 mb-8 text-3xl font-bold text-center">Amazing Pricing For Your Projects</h2>
            <div className="flex flex-wrap justify-center">
                {pricing.map((plan, index) => (
                    <PricingCard key={index} price={plan.price} duration={plan.duration} features={plan.features} />
                ))}
            </div>
        </div>
    );
};

export default Service;
