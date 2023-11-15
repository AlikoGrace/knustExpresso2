import React from 'react'
import Nav from '../shared/Nav';
import Button from '../shared/Button';
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import image5 from '../../assets/images/image5.png'
import image6 from '../../assets/images/image6.png'



const Hero = () => {
  return (
    <>

    <div className='min-h-screen overflow-hidden'>
     <Nav/>
      <section className='flex flex-col max-container padding-x items-center pt-3'>
      
        <div className=' flex flex-col items-center  mx-auto max-w-[729px] text-center'>
          <h1 className='font-bold lg:text-4xl  text-3xl leading-8 sm:leading-[40px]'>Requesting Academic Letters Made Simple</h1>
          <p className='text-center lg:text-[15px] text-[13px] font-extralight leading-[20px] py-3'>Simplify your academic journey with knustExpresso <br />
           where requesting academic letters is quick, easy, and hassle-free.</p>
           <Button name='Request a letter'/>
           
        </div>
        <div className='flex items-center'>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 pt-10 h-1/2  '>
          <div className='grid grid-cols-2 gap-2 lg:gap-4 px-5'>
            <img src={image1} alt="" className='w-[215px] h-[236px]' />
            <img src={image2} alt="" className='w-[215px] h-[236px]'  />
            <img src={image3} alt="" className='grid col-span-2 h-[236px] w-[449px]' />
          </div>
            <img src={image4} alt="" className='w-[449px]  h-[488px] lg:block hidden' />
            <div className=' gap-4 hidden lg:block'>
              <img src={image5} alt="" className='w-[275px] h-[236px] mb-4' />
              <img src={image6} alt=""  />
            </div>
        </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Hero;
