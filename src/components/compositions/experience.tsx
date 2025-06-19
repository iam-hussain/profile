import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BicepsFlexed } from "lucide-react";

const experienceList = [
  {
    yearRange: "Dec 2024 - Present",
    title: "Lead - Technology",
    location: "Synechron Technologies LLC, Dubai, UAE",
    description:
      "Spearheading the development of Open Finance microservices for Emirates NBD Bank in alignment with UAE Central Bank regulations. Architecting secure and scalable APIs using Node.js and TypeScript, enabling real-time financial data sharing across regulated entities. Collaborating with the Central Bank, Licensed Financial Institutions, and Third-Party Providers to ensure seamless integration and compliance. Driving payment processing, consent management, and secure data sharing. Delivered the first production release, contributing to system design, API security, and governance while gaining expertise in financial interoperability and compliance-centric banking development.",
  },
  {
    yearRange: "Aug 2023 - Nov 2024",
    title: "Software Engineer II",
    location: "Condé Nast Technology Lab, Bangalore, India",
    description:
      "Led the development of scalable web applications such as the TNY Caption Contest and Personalization Content for Users. Designed and implemented frontend and backend solutions, including database design and Kubernetes cron jobs. Coordinated with cross-functional teams, provided technical leadership, mentored junior developers, and ensured performance optimization and scalability.",
  },
  {
    yearRange: "Jun 2021 - Jul 2023",
    title: "Software Engineer I",
    location: "Condé Nast Technology Lab, Bangalore, India",
    description:
      "Developed server-driven UI components, quiz applications, and newsletter features to enhance user engagement and subscription growth. Worked with React, GraphQL, AWS, and other modern technologies. Improved homepage and article experiences, and created customizable email templates for editors.",
  },
  {
    yearRange: "Feb 2020 - Jun 2021",
    title: "Software Developer",
    location: "HTC Global Services, Chennai, India",
    description:
      "Built microservices for online degree program applications and managed Salesforce lead data using AWS serverless architecture. Utilized AWS SQS, EC2, Elastic Search, and Docker for cloud-native solutions. Focused on data validation, transformation, and high-availability deployments.",
  },
  {
    yearRange: "Dec 2018 - Jan 2020",
    title: "Node.js Developer",
    location: "Develop Script LLC, Chennai, India",
    description:
      "Developed auction-based e-commerce websites and APIs for projects like Mazzady, Sothebi, PreRio, and SlotCycle. Integrated payment gateways, shipping, and notifications. Managed real-time data binding with Socket.IO and contributed to scalable, high-traffic platforms.",
  },
  {
    yearRange: "Dec 2017 - Nov 2018",
    title: "Software Trainee",
    location: "Selsun Technologies, Chennai, India",
    description:
      "Enhanced OpenCV image processing algorithms for semi-device equipment and contributed to round bar stock management solutions. Collaborated on multiple projects under tight deadlines to meet customer requirements.",
  },
];

export default function Experience() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full gap-8 py-8 align-middle 4xl:gap-12 2xl:px-6 4xl:py-12"
      id="experience"
    >
      <div className="flex flex-col items-start w-full gap-4">
        <div className="flex items-center justify-center w-auto gap-2 px-2 py-1 align-middle border rounded-md">
          <BicepsFlexed />
          <span className="text-sm font-medium uppercase text-foreground/60">
            Resume
          </span>
        </div>
        <h2 className="text-2xl font-bold 4xl:text-3xl">Work Experience</h2>
      </div>
      <div className="relative flex flex-col gap-4">
        {experienceList.map((experience, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full gap-6"
          >
            <div className="z-20 items-center order-1 hidden w-4 h-4 rounded-full shadow-xl md:flex bg-primary"></div>
            <Card className={`order-1 w-full p-2 rounded-md`}>
              <CardHeader className="pb-4">
                <CardTitle>{experience.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {experience.yearRange}
                </p>
                <p className="text-sm font-medium">{experience.location}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-snug tracking-wide text-foreground/80">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
        <div className="absolute hidden md:flex inset-y-0 w-[2px] transform -translate-x-1/2 left-[8px] bg-foreground/20"></div>
      </div>
    </div>
  );
}
