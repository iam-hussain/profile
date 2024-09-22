import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

// Work Experience Timeline Item Component
const WorkTimelineItem = ({ yearRange, title, location, description }: any) => {
  return (
    <div className="flex items-start mb-8">
      {/* Timeline Dot */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
        <div className="w-px h-full mt-2 bg-gray-300"></div>
      </div>

      {/* Content */}
      <div className="ml-4">
        <p className="font-bold text-pink-600">{yearRange}</p>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{location}</p>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

// Certifications and Education Cards
const InfoCard = ({ year, title, location, description, linkText }: any) => {
  return (
    <Card className="w-full my-4">
      <CardHeader>
        <CardTitle className="text-pink-600">{year}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{location}</p>
        <p className="mt-2 text-gray-700">{description}</p>
        {linkText && (
          <a href="#" className="mt-4 text-pink-500 hover:underline">
            {linkText}
          </a>
        )}
      </CardContent>
    </Card>
  );
};

const Experience = () => {
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


  const certifications = [
    {
      year: '2022',
      title: 'AWS Certified Solutions Architect',
      location: '',
      description:
        'Certified AWS Solutions Architect specializing in cloud services, AWS Lambda, and EC2 management.',
      linkText: 'CERTIFICATE',
    },
    {
      year: '2020',
      title: 'Certified Full-Stack Developer',
      location: '',
      description:
        'Certified in full-stack development covering React.js, Node.js, MongoDB, and cloud-based architecture.',
      linkText: 'CERTIFICATE',
    },
  ];

  const education = [
    {
      year: '2016 - 2020',
      title: 'Bachelor of Engineering in Computer Science',
      location: 'Chennai, Arunai Engineering College',
      description:
        'Comprehensive degree in computer science with a focus on software engineering, web development, and data structures.',
      linkText: 'LEARN MORE',
    },
    {
      year: '2014 - 2016',
      title: 'Diploma in Mechanical Engineering',
      location: 'Tiruvannamalai, Kumaran Polytechnic College',
      description:
        'Diploma in mechanical engineering with a foundation in analytical problem solving and technical processes.',
      linkText: 'LEARN MORE',
    },
  ];

  return (
    <div className="p-8">
      {/* Work Experience Section */}
      <h1 className="mb-8 text-3xl font-bold text-center">Work Experience & Education</h1>
      <div className="flex justify-center mb-12">
        <div className="max-w-2xl">
          {workExperience.map((work, index) => (
            <WorkTimelineItem
              key={index}
              yearRange={work.yearRange}
              title={work.title}
              location={work.location}
              description={work.description}
            />
          ))}
        </div>
      </div>

      <Separator className="my-8" />

      {/* Certifications Section */}
      <h2 className="mb-8 text-3xl font-bold text-center">Certifications</h2>
      <div className="flex flex-wrap justify-center">
        {certifications.map((cert, index) => (
          <InfoCard
            key={index}
            year={cert.year}
            title={cert.title}
            description={cert.description}
            linkText={cert.linkText} location={undefined} />
        ))}
      </div>

      <Separator className="my-8" />

      {/* Education Section */}
      <h2 className="mt-16 mb-8 text-3xl font-bold text-center">Education</h2>
      <div className="flex flex-wrap justify-center">
        {education.map((edu, index) => (
          <InfoCard
            key={index}
            year={edu.year}
            title={edu.title}
            location={edu.location}
            description={edu.description}
            linkText={edu.linkText}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
