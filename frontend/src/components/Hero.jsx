import React from 'react'
import Button from './Button';
import ButtonTrasparent from './ButtonTransparent';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'


const Hero = () => {
  return (
    <section className='pt-10 px-10 flex flex-col lg:flex-row'> {/* Added lg:flex-row here */}
      <div className='lg:w-1/2'> {/* Changed w-1/2 to lg:w-1/2 here */}
        <h1 className='text-6xl font-extrabold text-[#1A1D1F] mt-10 mb-5'>Get your Academic Letters Effortlessly</h1>
        <p className='mt-10 mb-10'>Get your English Proficiency,
          internship, reference & all academic letters
          from the Kwame Nkrumah University of Science and Technology</p>
        <div className='flex space-x-6 mb-10'>
          <Button name='Sign in' />
          <ButtonTrasparent name='Learn More' />
        </div>
      </div>
      <div className='grid grid-cols-3 lg:w-1/2'> {/* Added lg:grid and lg:grid-cols-3 here */}
        <div className='grid grid-cols-2 gap-2'>
          <div><img src={image1} alt="" /></div>
          <div><img src={image2} alt="" /></div>
          <div className='col-span-2'><img src={image3} alt="" /></div>
        </div>
        <div><img src={image4} alt="" /></div>
        <div className='grid gap-2'>
          <div><img src={image5} alt="" /></div>
          <div><img src={image6} alt="" /></div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
