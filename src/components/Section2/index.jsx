import React from 'react'
import horizontail_image from '../../assets/referal-img.svg'
import vertical_image from '../../assets/referal-img-2.svg'
import Button from '../Button'

const Section2 = () => {
  return (
    <section className='bg-primary-lite pb-5'>
        <div className='flex flex-col items-center max-w-6xl mx-auto mb-5'>
            <h1 className='mt-10 text-3xl font-bold md:text-4xl md:m-6'>How I do <span className='text-primary'>Referal?</span>
            </h1>

            <img src={vertical_image} alt="referal-system" className='block sm:hidden'/>
            <img src={horizontail_image} alt="referal-system" className='hidden sm:block'/>
            <Button text="Refer Now" blue="true"/>
        </div>

    </section>
  )
}

export default Section2