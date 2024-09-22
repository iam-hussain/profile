
import { Button } from "@/components/ui/button";
import { LuSun } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import Service from "./service";
import WorkExperienceTimeline from "./work-experience-timeline";
import { ScrollArea } from "@/components/ui/scroll-area";
import ScoreCard from "@/components/compositions/score-card";
import SkillsWordCloud from "@/components/compositions/skills-word-cloud";
import ContactSection from "@/components/compositions/contact-section";

const App = () => {


  return (
    <>
      <div className="flex items-center justify-center m-auto align-middle bg-slate-900">
        <div className="flex h-screen gap-4 p-6">
          <div className="py-12">
            <div className="flex flex-col-reverse items-center justify-center h-auto gap-5 lg:flex-row">
              <div className="flex h-full gap-4 lg:flex-col">
                <div className="flex flex-col gap-4 p-3 bg-white rounded-full">
                  <Button variant={'icon'}><LuSun /></Button>
                </div>
                <div className="flex gap-3 p-3 bg-white rounded-full lg:py-5 lg:flex-col">
                  <Button variant={'icon'}><LuSun /></Button>
                  <Button variant={'icon'}><LuSun /></Button>
                  <Button variant={'icon'}><LuSun /></Button></div>

              </div>
              <div className="lg:w-[360px] w-full max-w-[360px] bg-white rounded-3xl rounded-tr-none p-10 flex flex-col justify-between align-middle items-center gap-6">
                <img src='/avatar.webp' alt="avatar" className="border-2 border-black rounded-tr-none rounded-3xl" />
                <div className="flex flex-col items-center justify-start gap-2 align-middle">
                  <p className="text-lg font-bold text-lime-800">Software Engineer</p>
                  <h1 className="text-3xl text-black">Jakir <span className="font-extrabold">Hussain</span></h1>
                </div>
                <div className="flex items-stretch justify-between gap-2">
                  <Button variant={'outline'} ><LuSun /></Button>
                  <Button variant={'outline'}><LuSun /></Button>
                  <Button variant={'outline'}><LuSun /></Button>
                  <Button variant={'outline'}><LuSun /></Button>

                </div>

                <div className="flex flex-col w-full gap-4">
                  <Separator />

                  <div className="flex justify-between w-full gap-2">
                    <Button variant={'ghost'} className="w-full">Download CV</Button>
                    <Separator orientation="vertical" />
                    <Button variant={'ghost'} className="w-full">Contact me</Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <ScrollArea className="flex-1 max-w-6xl m-4 rounded-tr-3xl rounded-b-3xl ">
            <div className="flex flex-col gap-12 px-6 bg-white rounded-tl-none rounded-3xl">
              <div className="flex flex-col w-full h-auto gap-6 lg:pt-12 lg:px-12">
                <p className="text-2xl font-medium">Hello, I'm <span className="text-primary">Jakir Hussain</span></p>
                <h3 className="text-3xl font-medium lg:text-6xl">Software Engineer and <span className="rounded-full text-primary">Full-Stack</span> Developer
                  Based in India.</h3>
                <p className="py-4 text-base">With over 7 years of professional experience in web development, I have a proven track record in JavaScript, React, and Node.js, and have led the development of complex web applications. My expertise in both front-end and back-end development, coupled with a strong focus on delivering scalable and maintainable solutions, has consistently driven business success.</p>
                <div className="flex flex-col justify-between gap-8 lg:flex-row">
                  <ScoreCard hed="30+" dek="Completed Projects" />
                  <ScoreCard hed="7+" dek="Years of Experience" />
                  <ScoreCard hed="90+" dek="Technologies Worked" />
                </div>
              </div>
              <Separator />
              <Service />
              <Separator />
              <div className="p-12">
                {/* <img src='/skills.svg' /> */}
                <SkillsWordCloud />
              </div>
              <Separator />
              <WorkExperienceTimeline />
              <Separator />
              <ContactSection />
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );

};

export default App
