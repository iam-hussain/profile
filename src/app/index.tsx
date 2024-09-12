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
          {/* <div className="p-6">
            <h1 className="text-5xl text-black">Jakir <span className="font-extrabold">Hussain</span></h1>
          </div> */}
          <div className="flex items-start justify-center w-full h-full gap-5 align-middle md:max-h-[800px] flex-col md:flex-row">
            <div className="flex flex-col h-full gap-6">
              <Button variant={'outline'}><LuSun /></Button>
              <div className="flex flex-col gap-4 p-2 py-4 bg-white rounded-md">
                <Button variant={'outline'}><LuSun /></Button>
                <Button variant={'outline'}><LuSun /></Button>
                <Button variant={'outline'}><LuSun /></Button></div>

            </div>
            <div className="h-[620px] w-[360px] bg-white rounded-3xl rounded-tr-none p-10 flex flex-col justify-between align-middle items-center gap-6">
              <img src='/avatar.webp' alt="avatar" className="border-2 border-black rounded-tr-none rounded-3xl" />
              <div className="flex flex-col items-center justify-start gap-2 align-middle">
                <p className="text-lg font-bold text-lime-800">Software Engineer</p>
                <h1 className="text-3xl text-black">Jakir <span className="font-extrabold">Hussain</span></h1>
              </div>
              <div className="flex items-stretch justify-between gap-4">
                <Button ><LuSun /></Button>
                <Button ><LuSun /></Button>
                <Button ><LuSun /></Button>
                <Button ><LuSun /></Button>

              </div>

              <div className="flex flex-col w-full gap-4">
                <Separator />

                <div className="flex w-full gap-4">
                  <Button variant={'outline'} >Download CV <LuSun /></Button>
                  <Separator orientation="vertical" />

                  <Button variant={'outline'}>Contact me <LuSun /></Button>
                </div>
              </div>

            </div>
            <div className="h-full w-[850px] bg-white rounded-3xl rounded-tl-none p-6">Hello</div>
          </div>
        </div>

      </>
    );
  }

  return <></>;
};

export default App
