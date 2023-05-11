import BannerHome from '@/components/BannerHome'
import TimeLineSection from '@/components/TimeLine'

import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <BannerHome />
      <div >
        <div className='my-5'>
          <h1 className='text-center lg:text-[40px] font-bold'>Your Medical Data, </h1>
          <h1 className='text-center lg:text-[40px] font-bold'>As you should be</h1>
        </div>

        <div className='grid md:grid-cols-3 place-items-center text-center gap-y-10 md:gap-10 md:mt-8 lg:gap-24'>
          <div className='space-y-7 '>
            <img className='w-52 w-full' src="/image/documents.png" alt="" />
            <h1 className='font-bold'>Complete</h1>
            <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className='space-y-7'>
            <img className='w-52 w-full' src="/image/diagram.png" alt="" />
            <h1 className='font-bold'>Organized</h1>
            <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
          <div className='space-y-7'>
            <img className='w-52 w-full' src="/image/working.png" alt="" />
            <h1 className='font-bold'>Your</h1>
            <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
      <TimeLineSection />

      {/* how it work section */}
      <section>
        <div >
          <div className='my-5'>
            <h1 className='text-center lg:text-[40px] font-bold'>How it Work</h1>

          </div>

          <div className='grid md:grid-cols-3 place-items-center text-center gap-y-10 md:gap-10 md:mt-8 lg:gap-24'>
            <div className='space-y-7 '>
              <img className='w-52 w-full' src="/image/clock.png" alt="" />
              <h1 className='font-bold'>Complete</h1>
              <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='space-y-7'>
              <img className='w-52 w-full' src="/image/landline.png" alt="" />
              <h1 className='font-bold'>Organized</h1>
              <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='space-y-7'>
              <img className='w-52 w-full' src="/image/timeline.png" alt="" />
              <h1 className='font-bold'>Your</h1>
              <p className='opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>

      </section>
      {/* section feedback */}
      <section className='my-5 '>
        <div className='flex p-3 md:p-0 md:flex-nowrap flex-wrap justify-center items-center gap-10 bg-slate-700 w-full md:h-[400px] rounded-lg text-white'>
          <div >
            <img className='mask mask-hexagon-2 w-48 h-48  md:w-52 md:h-52 object-top ' src="/image/idol2.jpg" alt="" />
          </div>
          <div className='space-y-2 md:space-y-10 md:w-[450px] lg:w-[600px] '>
            <p className='text-green-500'>Lorem ipsum dolor sit amet consectetur </p>
            <q className='lg:text-[30px]'>Thanks to PicniHealth, all of my medical records are conveniently consolidated into one place. This is a silver lining of my heallth care.</q>
            <div className='border-l-2 border-green-500 pl-3'>
              <p className='text-green-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil necessitatibus unde beatae doloremque corporis </p>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}
