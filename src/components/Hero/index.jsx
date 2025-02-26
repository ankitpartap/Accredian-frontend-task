import React, { useState } from 'react'
import heroImg from "../../assets/heroImg.png"
import Button from '../Button'
import ReferralModal from '../ReferralModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    {/* <section className='bg-hero2 '> */}
        <div className='flex flex-col justify-center sm:flex-row  mx-auto px-4 bg-primary-lite rounded-3xl shadow-2xl max-w-6xl'>

            {/* left side */}
            <div className='md:w-1/3 w-full mt-10  flex flex-col items-center md:items-start  h-auto  md:p-4'>
                <h1 className='text-4xl md:text-7xl font-bold '>Let's Learn & Earn</h1>
                <p className='mt-9 text-2xl  '>Get a chance to win up-to<br/>
                <span className='text-primary px-2 text-4xl   md:text-5xl font-bold'>₹15,000</span></p>
                <Button text="Refer Now" onBtnClick={() => setIsModalOpen(true)} blue={true} className="mt-7 text-1xl sm:items-start font-light "/>
                <ReferralModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>

            {/* right side */}
            <div className='md:w-2/3 w-full flex '>

                <img src={heroImg} alt="hero-image" className='w-200  '/>
            </div>
        </div>
    {/* </section> */}
    
    </>
  )
}

export default Hero