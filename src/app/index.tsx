import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import particlesOptions from './particles-options'
import { Button } from "@/components/ui/button";
import { LuSun } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";

const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options = useMemo(
    () => (particlesOptions),
    [],
  );

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options as unknown as ISourceOptions}
        />
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 align-middle">

          <div className="flex flex-col items-center justify-center w-full h-auto gap-5 px-4 py-12 align-middle lg:items-start lg:flex-row">
            <div className="flex flex-col-reverse items-center justify-center gap-5 lg:flex-row">
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
            <div className="flex flex-col w-full h-auto max-w-5xl gap-6 p-8 py-12 bg-white rounded-tl-none lg:p-12 max-h-5xl rounded-3xl">
              <p className="text-2xl font-medium">Hello, I'm <span className="text-primary">Jakir Hussain</span></p>
              <h3 className="text-3xl font-medium lg:text-6xl">Software Engineer and <span className="rounded-full text-primary">Full-Stack</span> Developer
                Based in India.</h3>
              <p className="py-4 text-base">With over 7 years of professional experience in web development, I have a proven track record in JavaScript, React, and Node.js, and have led the development of complex web applications. My expertise in both front-end and back-end development, coupled with a strong focus on delivering scalable and maintainable solutions, has consistently driven business success.</p>
              <div className="flex flex-col justify-between gap-8 lg:flex-row">
                <div className="flex gap-2 lg:max-w-[200px] justify-center align-middle items-center">
                  <span className="text-5xl">30+</span>
                  <p>Completed Projects</p>
                </div>
                <div className="flex gap-2 lg:max-w-[200px] justify-center align-middle items-center">
                  <span className="text-5xl">7+</span>
                  <p>Years of Experience
                  </p>
                </div>
                <div className="flex gap-2 lg:max-w-[200px] justify-center align-middle items-center">
                  <span className="text-5xl">50+</span>
                  <p>Technologies Worked</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>
    );
  }

  return <></>;
};

export default App
