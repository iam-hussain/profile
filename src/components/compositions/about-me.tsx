
import ScoreCard from "@/components/patterns/score-card";

const AboutMe = () => {
    return (
        <div className="flex flex-col w-auto h-auto gap-6 px-6 py-12" id="about">
            <p className="text-2xl font-medium">Hello, I'm <span className="text-primary">Jakir Hussain</span></p>
            <h3 className="text-3xl font-medium lg:text-6xl">Software Engineer and <span className="text-primary">Full-Stack</span> Developer
                Based in India.</h3>
            <p className="py-4 text-base text-foreground/90">With over 7 years of professional experience in web development, I have a proven track record in JavaScript, React, and Node.js, and have led the development of complex web applications. My expertise in both front-end and back-end development, coupled with a strong focus on delivering scalable and maintainable solutions, has consistently driven business success.</p>
            <div className="flex flex-col justify-between gap-8 lg:flex-row">
                <ScoreCard hed="30+" dek="Completed Projects" />
                <ScoreCard hed="7+" dek="Years of Experience" />
                <ScoreCard hed="90+" dek="Technologies Worked" />
            </div>
        </div>
    )
}

export default AboutMe