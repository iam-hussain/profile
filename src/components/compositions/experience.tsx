import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BicepsFlexed } from 'lucide-react';


const experienceList = [
    {
        yearRange: 'Aug 2023 - Present',
        title: 'Software Engineer II',
        location: 'Condé Nast Technology Lab, Bangalore',
        description:
            'Led projects such as the TNY Caption Contest and Personalization Content for Users. Developed scalable web applications using React, Next.js, Node.js, and AWS. Provided technical leadership and mentored junior developers, while ensuring performance optimization and scalability.',
    },
    {
        yearRange: 'Jun 2018 - Jul 2020',
        title: 'Software Engineer I',
        location: 'Condé Nast Technology Lab, Bangalore',
        description:
            'Developed and maintained complex web applications, including Smart Component and TNY Name Drop Quizzes. Focused on enhancing user engagement and implementing API-driven solutions. Worked with React, GraphQL, and AWS to deliver personalized content and manage subscriptions efficiently.',
    },
    {
        yearRange: 'Feb 2020 - Jun 2021',
        title: 'Software Developer',
        location: 'HTC Global Services, Chennai',
        description:
            'Developed microservices and APIs using Node.js and Express, designed and maintained databases with MongoDB and MySQL. Managed cloud deployments on AWS and ensured serverless architecture.',
    },
    {
        yearRange: 'Dec 2018 - Jan 2020',
        title: 'Node JS Developer',
        location: 'Develop Script LLC, Chennai',
        description:
            'Developed auction-based e-commerce websites and mobile application APIs using Node.js and Express. Integrated third-party libraries for payment gateways, shipping services, and notifications. Managed real-time data binding with Socket.IO.',
    },
    {
        yearRange: 'Dec 2017 - Nov 2018',
        title: 'Software Trainee',
        location: 'Selsun Technologies, Chennai',
        description:
            'Worked on enhancing OpenCV image processing algorithms for semi-device equipment. Collaborated with teams to develop various projects within limited timeframes to meet customer requirements.',
    },
]

export default function Experience() {
    return (
        <div className="flex flex-col 4xl:gap-12 gap-8 2xl:px-6 py-8 4xl:py-12 w-full justify-center align-middle items-center" id="experience">
            <div className="flex flex-col items-start w-full gap-4">
                <div className='flex items-center justify-center w-auto gap-2 px-2 py-1 align-middle border rounded-md'>
                    <BicepsFlexed />
                    <span className="text-sm font-medium uppercase text-foreground/60">Resume</span>
                </div>
                <h2 className="4xl:text-3xl text-2xl font-bold">Work Experience</h2>
            </div>
            <div className="relative flex flex-col gap-4">
                {experienceList.map((experience, index) => (
                    <div key={index} className="flex items-center justify-between w-full gap-6">
                        <div className="z-20 items-center order-1 hidden w-4 h-4 rounded-full shadow-xl md:flex bg-primary">

                        </div>
                        <Card className={`order-1 w-full p-2 rounded-md`}>
                            <CardHeader className="pb-4">
                                <CardTitle>{experience.title}</CardTitle>
                                <p className="text-sm text-muted-foreground">{experience.yearRange}</p>
                                <p className="text-sm font-medium">{experience.location}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-snug tracking-wide text-foreground/80">{experience.description}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
                <div className="absolute hidden md:flex inset-y-0 w-[2px] transform -translate-x-1/2 left-[8px] bg-foreground/20"></div>
            </div>
        </div>
    )
}