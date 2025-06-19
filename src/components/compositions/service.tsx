import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cog } from "lucide-react";

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
  const servicesList = [
    {
      title: "Full-Stack Web Development",
      description:
        "End-to-end development of robust, scalable, and secure web applications using React, Next.js, Node.js, and TypeScript. Expertise in both frontend and backend architecture, API design, and cloud-native deployment.",
    },
    {
      title: "API & Microservices Architecture",
      description:
        "Designing and implementing RESTful and GraphQL APIs, microservices, and serverless solutions. Focused on performance, security, and seamless integration for fintech, media, and e-commerce platforms.",
    },
    {
      title: "Cloud & DevOps Solutions",
      description:
        "Cloud-native application deployment and infrastructure automation using AWS, Docker, Kubernetes, and Terraform. CI/CD pipeline setup, monitoring, and performance optimization for reliable releases.",
    },
    {
      title: "Technical Leadership & Consulting",
      description:
        "Providing technical leadership, code reviews, and mentoring for engineering teams. Consulting on architecture, best practices, and regulatory compliance for high-impact digital projects.",
    },
    {
      title: "UI/UX Engineering",
      description:
        "Building responsive, accessible, and engaging user interfaces with React, Styled Components, and modern design systems. Prototyping, performance tuning, and cross-device compatibility.",
    },
    {
      title: "Integration & Automation",
      description:
        "Integrating third-party services, payment gateways, and data pipelines. Automating workflows, data validation, and business processes for efficiency and reliability.",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center w-full gap-8 py-8 align-middle 4xl:gap-12 2xl:px-6 4xl:py-12"
      id="service"
    >
      <div className="flex flex-col items-start w-full gap-4">
        <div className="flex items-center justify-center w-auto gap-2 px-2 py-1 align-middle border rounded-md">
          <Cog />
          <span className="text-sm font-medium uppercase text-foreground/60">
            Service
          </span>
        </div>
        <h2 className="text-2xl font-bold 4xl:text-3xl">
          What Services I Provide?
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 2xl:grid-cols-3 md:grid-cols-2">
        {servicesList.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
