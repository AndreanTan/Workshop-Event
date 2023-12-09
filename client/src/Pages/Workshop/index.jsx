import React from 'react'
import WorkshopCard from '../../Components/WorkshopCard'

export default function Workshop() {
  return (
    <section className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className='flex flex-col justify-center items-center'>
            <div className='text-[#383B28] text-[57px] font-[400] mt-[60px]'>
                <h1>Join a Workshop</h1>
            </div >
            <div className='w-[668px] text-center text-black text-[24px] font-[400] mt-[40px]'>
                <p>Find and book the workshop you wanted from your chosen city to experience the culture</p>
            </div>
        </div>
        <div className='mt-20'>
            <hr class=" border-gray-200 sm:mx-auto lg:my-8" />
        </div>
        <div className='flex flex-col justify-center mt-5'>
            <div className=' rounded-md border-black'>
                <h1 className='mt-5 text-center text-black text-[45px] font-[400]'>Crafting</h1>
                <div className='mt-10  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                </div>
            </div>
        </div>
        <div className='mt-20'>
            <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
        <div className='flex flex-col justify-center mt-5'>
            <div className=' rounded-md border-black'>
                <h1 className='mt-5 text-center text-black text-[45px] font-[400]'>Cooking</h1>
                <div className='mt-10  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                    <WorkshopCard />
                </div>
            </div>
        </div>
    </section>
  )
}
