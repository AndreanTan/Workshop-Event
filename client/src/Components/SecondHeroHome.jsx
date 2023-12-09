import React from 'react'
import Hero2 from '../assets/img/H2.jpeg'


function SecondHeroHome() {
    const containerStyle = {
        backgroundImage: `url(${Hero2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };

  return (
    <section className="w-full h-[446px] max-w-screen-xl mx-auto p-4 md:py-8" style={containerStyle}>
        <div className='flex flex-col justify-center items-center text-white'>
            <h1 className='mt-[100px] text-[58px] text-center'>Explore destinations in Indonesia</h1>
        </div>
    </section>
  )
}

export default SecondHeroHome