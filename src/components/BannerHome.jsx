import React from 'react'

const BannerHome = () => {
  return (
    <div className='my-10   lg:h-[100vh] w-full flex flex-wrap justify-between items-center' >
      <div className="text-banner md:w-1/2 space-y-5">
        <h1 className='text-2xl md:text-3xl lg:text-[60px] font-bold'>Own Your Health</h1>
        <p>Viyulet Health center give your control of your medical data so you con focus on your your health not chasing paperwork
        Viyulet Health center give your control of your medical data so you con focus on your your health not chasing paperwork
        </p>
        <div className="btn-here">
          <button className='btn bg-purple-900 w-full md:w-52 text-white'> Get My Record</button>
        </div>
      </div>

      <div className='md:w-1/2 mt-5 md:mt-0'>
        <img className='w-full' src="/image/img01.png" alt="family care" />
      </div>

    </div>
  )
}

export default BannerHome