import React from 'react'

function OurCommitHome() {
  return (
    <section className="w-full h-[684px] max-w-screen-xl mx-auto p-4 md:py-8">
        <div className='flex flex-col justify-center items-center'>
            <div className='text-[#383B28] text-[64px] font-[400] mt-[60px]'>
                <h1>Our Commitment</h1>
            </div >
            <div className='text-[#697B51] text-[32px] font-[400] mt-[22px]'>
                <h1>Experience Indonesia for a Cause</h1>
            </div>
            <div className='w-[668px] text-center text-black text-[15px] font-[400] mt-[40px]'>
                <p>JELAJAH is not only committed to give you an experience travelling in Indonesia like no other, but is also committed to be impactful for locals all across Indonesia through our programs that are directly intergrated with your workshop purchases</p>
            </div>
            <div className='mt-[114px] flex  justify-between gap-[200px]'>
                <div className='flex flex-col justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                        <path d="M10.5 31.5L42 7L73.5 31.5V70C73.5 71.8565 72.7625 73.637 71.4497 74.9497C70.137 76.2625 68.3565 77 66.5 77H17.5C15.6435 77 13.863 76.2625 12.5503 74.9497C11.2375 73.637 10.5 71.8565 10.5 70V31.5Z" stroke="#972D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M31.5 77V42H52.5V77" stroke="#972D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='mt-[40px] w-[221px] text-center text-[12px]'>Our workshops are done in local areas including local workshops where locals live and carry out their day-to-day life</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                        <path d="M56 14H63C64.8565 14 66.637 14.7375 67.9497 16.0503C69.2625 17.363 70 19.1435 70 21V70C70 71.8565 69.2625 73.637 67.9497 74.9497C66.637 76.2625 64.8565 77 63 77H21C19.1435 77 17.363 76.2625 16.0503 74.9497C14.7375 73.637 14 71.8565 14 70V21C14 19.1435 14.7375 17.363 16.0503 16.0503C17.363 14.7375 19.1435 14 21 14H28" stroke="#972D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M52.5 7H31.5C29.567 7 28 8.567 28 10.5V17.5C28 19.433 29.567 21 31.5 21H52.5C54.433 21 56 19.433 56 17.5V10.5C56 8.567 54.433 7 52.5 7Z" stroke="#972D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='mt-[40px] w-[221px] text-center text-[12px]'>We are committed to give you hands on experience and make your time with our instructors the best time of your life</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                        <path d="M42 28C59.397 28 73.5 23.299 73.5 17.5C73.5 11.701 59.397 7 42 7C24.603 7 10.5 11.701 10.5 17.5C10.5 23.299 24.603 28 42 28Z" stroke="#972D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M73.5 42C73.5 47.81 59.5 52.5 42 52.5C24.5 52.5 10.5 47.81 10.5 42" stroke="#972D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.5 17.5V66.5C10.5 72.31 24.5 77 42 77C59.5 77 73.5 72.31 73.5 66.5V17.5" stroke="#972D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className='mt-[40px] w-[221px] text-center text-[12px]'>Every time you join our workshops, a percentage of what you are paying directly goes to charity we support across Indonesia</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurCommitHome