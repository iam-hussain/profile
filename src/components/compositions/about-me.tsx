
import ScoreCard from "@/components/patterns/score-card";

const AboutMe = () => {
    return (
        <div className="flex flex-col items-center justify-center w-auto h-auto gap-4 py-6 align-middle 2xl:px-6 2xl:pt-12 2xl:items-start" id="about">
            <p className="w-full text-2xl font-medium text-center 2xl:text-left">Hello, I'm <span className="text-primary">Jakir Hussain</span></p>
            <h3 className="w-full max-w-2xl text-3xl font-medium text-center xl:text-4xl 2xl:text-4xl 4xl:text-6xl 2xl:text-left 2xl:max-w-4xl">Software Engineer and <span className="text-primary">Full-Stack</span> Developer
                Based in India.</h3>
            <p className="w-full py-4 text-base text-center text-foreground/90 2xl:text-left">With over 7 years of professional experience in web development, I have a proven track record in JavaScript, React, and Node.js, and have led the development of complex web applications. My expertise in both front-end and back-end development, coupled with a strong focus on delivering scalable and maintainable solutions, has consistently driven business success.</p>
            <div className="flex flex-row flex-wrap w-full gap-4 px-2 justify-evenly 2xl:justify-between lg:flex-row">
                <ScoreCard hed="30+" dek="Completed Projects" />
                <ScoreCard hed="7+" dek="Years of Experience" />
                <ScoreCard hed="90+" dek="Technologies Worked" />
            </div>
        </div>
    )
}

export default AboutMe