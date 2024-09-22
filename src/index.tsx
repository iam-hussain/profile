
import { forwardRef, useRef } from 'react';
import { Separator } from "@/components/ui/separator";
import Service from "@/components/compositions/service";
import WorkExperience from "@/components/compositions/work-experience";
import { ScrollArea } from "@/components/ui/scroll-area";
import ContactSection from "@/components/compositions/contact-section";
import SideBar from "@/components/compositions/sidebar";
import AboutMe from "@/components/compositions/about-me";
import Skills from "@/components/compositions/skills";
// import ParticlesBG from "@/components/particles/particles-bg";


const ScrollComponent = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  return (
    <ScrollArea className="flex-1 max-w-6xl rounded-tr-3xl rounded-b-3xl" ref={ref}>
      <div className="flex flex-col w-full max-w-6xl gap-24 p-12 py-20 rounded-tl-none bg-background rounded-3xl">
        <AboutMe />
        <Separator />
        <Service />
        <Separator />
        <Skills />
        <Separator />
        <WorkExperience />
        <Separator />
        <ContactSection />
      </div>
    </ScrollArea>
  );
});

const App = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element && scrollRef.current) {
      element.scrollIntoView({
        behavior: 'smooth', // Scroll with smooth animation
        block: 'start',     // Aligns the element at the start of the scroll area
      });
    }
  };

  return (
    <>
      {/* <ParticlesBG /> */}
      <div className="flex items-center justify-center min-h-screen m-auto align-middle">
        <div className="flex h-screen gap-6 px-6 py-12">
          <SideBar handleScrollToId={handleScrollToId} />
          <ScrollComponent ref={scrollRef} />
        </div>
      </div></>
  );

};

export default App
