import React from 'react'
import MainCrosel from '../../components/HomeCarosel/MainCrosel'
import HomeSectionCarousel from '../../components/HomeSectionCarosel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'

function HomePage() {
  return (
    <div>
        <MainCrosel/>

        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-50'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Dress"}/>
            
            
        </div>
    </div>
  )
}

export default HomePage