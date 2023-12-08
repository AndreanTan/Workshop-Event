import React from 'react'
import FooterHome from '../../Components/FooterHome'
import OurCommitHome from '../../Components/OurCommitHome'
import WhyUsHome from '../../Components/WhyUsHome'
import FirstHeroHome from '../../Components/FirstHeroHome'
import SecondHeroHome from '../../Components/SecondHeroHome'
import WorkshopHome from '../../Components/WorkshopHome'
import SearchTravelHome from '../../Components/SearchTravelHome'

export default function HomeComponent() {
  return (
    <section className='bg-white'>
        <FirstHeroHome />
        <SecondHeroHome />
        <WorkshopHome />
        <SearchTravelHome />
        <WhyUsHome />
        <OurCommitHome />
        <FooterHome />
    </section>
  )
}
