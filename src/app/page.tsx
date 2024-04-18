"use client"
import { useEffect } from 'react';
import { InfiniteMovingCards } from '@/components/global/infinite-moving-cards';
import { LampComponent } from '@/components/global/lamp';
import Navbar from '@/components/global/navbar';
import { Button } from '@/components/ui/button';
import { clients, products } from '@/lib/constant';


export default function Home() {
  useEffect(() => {
    // Set the overflow property of the body to hidden when the component is mounted
    document.body.style.overflow = 'hidden';

    return () => {
      // Reset the overflow property of the body to auto when the component is unmounted
      document.body.style.overflow = 'auto';
    };
  }, []);

  //WIP: remove fault IMAge for home page
  return (
    <main className="flex items-center justify-center flex-col">
      <Navbar />
      <h1 className="text-center text-5xl md:text-8xl md:mb-3 md:mt-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 font-sans font-bold">
        LAND THE JOB OF 
        <br/>
        YOUR
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-blue-950"> DREAM.</span>
      </h1>
      <LampComponent />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased mt-[-60px]">
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <Button
            size={'lg'}
            className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
              Start For Free Today
            </span>
          </Button>
        </div>
        <InfiniteMovingCards
          className="md:mt-[3rem] mt-[-100px]"
          items={clients}
          direction="right"
          speed="slow"
        /> 
      </section>
    </main>
  );
}