import ScoreCard from "@/components/patterns/score-card";

const AboutMe = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-auto h-auto gap-4 py-6 align-middle 2xl:px-6 2xl:pt-12 2xl:items-start"
      id="about"
    >
      <p className="w-full text-2xl font-medium text-center 2xl:text-left">
        Hi, I'm <span className="text-primary">Jakir Hussain</span>
      </p>
      <h3 className="w-full max-w-2xl text-xl font-medium text-center 2xl:text-left 2xl:max-w-4xl">
        Experienced <span className="text-primary">Full-Stack Engineer</span>{" "}
        &amp; <span className="text-primary">Tech Lead</span>{" "}
        <br className="hidden 2xl:block" />
        Building Scalable, Secure, and Innovative Digital Solutions
      </h3>
      <p className="w-full py-4 text-base text-center text-foreground/90 2xl:text-left">
        I am a passionate software engineer with 8+ years of experience
        delivering robust, scalable, and secure web applications across fintech,
        media, and e-commerce domains. My expertise spans JavaScript,
        TypeScript, React, Node.js, and GraphQL, with deep knowledge in both
        frontend architecture and backend systems design. I have led teams and
        projects for global organizations, including Emirates NBD Bank and Condé
        Nast, architecting cloud-native microservices, optimizing performance,
        and ensuring regulatory compliance. I thrive in collaborative, agile
        environments, mentor junior engineers, and am committed to engineering
        excellence, innovation, and continuous learning.
      </p>
      <div className="flex flex-row flex-wrap w-full gap-4 px-2 justify-evenly 2xl:justify-between lg:flex-row">
        <ScoreCard hed="8+" dek="Years Experience" />
        <ScoreCard hed="30+" dek="Projects Delivered" />
        <ScoreCard hed="15+" dek="Technologies Mastered" />
      </div>
    </div>
  );
};

export default AboutMe;
