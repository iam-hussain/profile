
import { forwardRef, useRef } from 'react';
import { Separator } from "@/components/ui/separator";
import Service from "@/components/compositions/service";
import Experience from "@/components/compositions/experience";
import { ScrollArea } from "@/components/ui/scroll-area";
import Contact from "@/components/compositions/contact";
import SideBar from "@/components/compositions/sidebar";
import AboutMe from "@/components/compositions/about-me";
import Skills from "@/components/compositions/skills";
import { ThemeProvider } from 'next-themes';
// import ParticlesBG from "@/components/particles/particles-bg";


const ScrollComponent = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  return (
    <ScrollArea className="flex-1 max-w-6xl rounded-tr-3xl rounded-b-3xl" ref={ref}>
      <div className="flex flex-col w-full max-w-6xl gap-12 p-12 py-12 rounded-tl-none bg-background rounded-3xl">
        <AboutMe />
        <Separator />
        <Service />
        <Separator />
        <Skills />
        <Separator />
        <Experience />
        <Separator />
        <Contact />
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
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        {/* <ParticlesBG /> */}
        <div className="flex items-center justify-center min-h-screen m-auto align-middle select-none">
          <div className="flex h-screen gap-6 px-6 py-6">
            <SideBar handleScrollToId={handleScrollToId} />
            <ScrollComponent ref={scrollRef} />
          </div>
        </div>
      </ThemeProvider></>
  );

};

export default App
