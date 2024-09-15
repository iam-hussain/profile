import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

// Work Experience Timeline Item Component
const WorkTimelineItem = ({ yearRange, title, location, description }: any) => {
  return (
    <div className="flex items-start mb-8">
      {/* Timeline Dot */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
        <div className="h-full w-px bg-gray-300 mt-2"></div>
      </div>

      {/* Content */}
      <div className="ml-4">
        <p className="text-pink-600 font-bold">{yearRange}</p>
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
      title: 'Full-Stack Developer',
      location: 'Bangalore, Conde Nast Technology Lab',
      description:
        'Developing scalable web applications using React, Next.js, Node.js, and AWS. Leading projects like personalization engines and content management systems, collaborating with cross-functional teams.',
    },
    {
      yearRange: '2021 - 2023',
      title: 'Software Engineer',
      location: 'Chennai, HTC Global Services',
      description:
        'Developed microservices and APIs using Node.js and Express, designed and maintained databases with MongoDB and MySQL. Managed cloud deployments on AWS and ensured serverless architecture.',
    },
  ];

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
      <h1 className="text-3xl font-bold text-center mb-8">Work Experience & Education</h1>
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
      <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
      <div className="flex flex-wrap justify-center">
        {certifications.map((cert, index) => (
          <InfoCard
                key={index}
                year={cert.year}
                title={cert.title}
                description={cert.description}
                linkText={cert.linkText} location={undefined}          />
        ))}
      </div>

      <Separator className="my-8" />

      {/* Education Section */}
      <h2 className="text-3xl font-bold text-center mt-16 mb-8">Education</h2>
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
