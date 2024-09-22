import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const workExperience = [
    {
        yearRange: '2023 - Present',
        title: 'Software Engineer II',
        location: 'Conde Nast Technology Lab, Bangalore',
        description:
            'Led projects such as the TNY Caption Contest and Personalization Content for Users. Developed scalable web applications using React, Next.js, Node.js, and AWS. Provided technical leadership and mentored junior developers, while ensuring performance optimization and scalability.',
    },
    {
        yearRange: '2021 - 2023',
        title: 'Software Engineer I',
        location: 'Conde Nast Technology Lab, Bangalore',
        description:
            'Developed and maintained complex web applications, including Smart Component and TNY Name Drop Quizzes. Focused on enhancing user engagement and implementing API-driven solutions. Worked with React, GraphQL, and AWS to deliver personalized content and manage subscriptions efficiently.',
    },
    {
        yearRange: '2021 - 2023',
        title: 'Software Engineer',
        location: 'HTC Global Services, Chennai',
        description:
            'Developed microservices and APIs using Node.js and Express, designed and maintained databases with MongoDB and MySQL. Managed cloud deployments on AWS and ensured serverless architecture.',
    },
    {
        yearRange: '2018 - 2020',
        title: 'Node JS Developer',
        location: 'Develop Script LLC, Chennai',
        description:
            'Developed auction-based e-commerce websites and mobile application APIs using Node.js and Express. Integrated third-party libraries for payment gateways, shipping services, and notifications. Managed real-time data binding with Socket.IO.',
    },
    {
        yearRange: '2017 - 2018',
        title: 'Software Trainee',
        location: 'Selsun Technologies, Chennai',
        description:
            'Worked on enhancing OpenCV image processing algorithms for semi-device equipment. Collaborated with teams to develop various projects within limited timeframes to meet customer requirements.',
    },
]

export default function WorkExperience() {
    return (
        <div className="container p-4 mx-auto md:p-8">
            <h2 className="mb-8 text-3xl font-bold text-center">Work Experience</h2>
            <div className="relative">
                {workExperience.map((experience, index) => (
                    <div key={index} className="flex items-center justify-between w-full mb-8 right-timeline">

                        {/* <div className="order-1 w-5/12"></div> */}
                        <div className="z-20 flex items-center order-1 w-8 h-8 rounded-full shadow-xl bg-primary">
                            <h1 className="mx-auto text-lg font-semibold text-primary-foreground">{index + 1}</h1>
                        </div>
                        <Card className={`order-1 w-11/12`}>
                            <CardHeader>
                                <CardTitle>{experience.title}</CardTitle>
                                <p className="text-sm text-muted-foreground">{experience.yearRange}</p>
                                <p className="text-sm font-medium">{experience.location}</p>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-snug tracking-wide text-muted-foreground">{experience.description}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
                <div className="absolute hidden md:flex inset-y-0 w-1 transform -translate-x-1/2 left-[15px] bg-primary-foreground"></div>
            </div>
        </div>
    )
}