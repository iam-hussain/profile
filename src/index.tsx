
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
import { Button } from './components/ui/button';
import { Mouse } from 'lucide-react';

// import ParticlesBG from "@/components/particles/particles-bg";


const ScrollComponent = forwardRef<HTMLDivElement, unknown>((_, ref) => {
  return (
    <ScrollArea className="flex-1" ref={ref}>
        <div className='px-4 flex flex-col justify-center align-middle items-center'>
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


  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,       // Scroll to the top of the page
      behavior: 'smooth'  // Smooth scrolling
    });
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
          <div className="flex flex-col gap-6 py-12 md:px-6 md:pt-24 2xl:h-screen 2xl:p-8 2xl:flex-row">
            <SideBar handleScrollToId={handleScrollToId} />
            <div className="flex max-w-6xl gap-4 rounded-tl-none 2xl:gap-8 4xl:gap-12 2xl:p-4 p-2 py-8 bg-background rounded-3xl" id="base-scroll">
              <ScrollComponent ref={scrollRef} />
            </div>
          </div>
        </div>
        <div className="fixed flex flex-col w-auto gap-4 p-2 rounded-full right-4 bottom-4 bg-background">
          <Button variant={'icon'} onClick={() => handleScrollTop()} className=' 2xl:hidden'>
            <Mouse />
          </Button>
          <Button variant={'icon'} onClick={() => handleScrollToId('base-scroll')} className='hidden 2xl:flex'>
            <Mouse />
          </Button>
        </div>
      </ThemeProvider></>
  );

};

export default App
