import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full py-10"
      id="contact"
    >
      <h2 className="mb-4 text-3xl font-bold text-primary">Contact Me</h2>
      <p className="max-w-xl mb-6 text-center text-foreground/80">
        Interested in collaborating or have an exciting opportunity? Let’s
        connect! I’m always open to discussing new projects, creative ideas, or
        joining dynamic teams. Reach out and I’ll get back to you soon.
      </p>
      <div className="flex flex-col items-start gap-4">
        <div className="flex items-center gap-2 text-lg text-foreground/80">
          <MapPin size={30} /> Dubai, UAE
        </div>
        <a
          href="mailto:itsjakirhussain@gmail.com"
          className="flex items-center gap-2 text-lg text-foreground/80 hover:underline"
        >
          <Mail size={30} /> itsjakirhussain@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/iam-hussain"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg text-foreground/80 hover:underline"
        >
          <Linkedin size={30} /> linkedin.com/in/iam-hussain
        </a>
        <a
          href="https://github.com/iam-hussain"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg text-foreground/80 hover:underline"
        >
          <Github size={30} /> github.com/iam-hussain
        </a>
      </div>
    </div>
  );
};

export default Contact;
