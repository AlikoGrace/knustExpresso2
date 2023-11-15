import Icon1 from '../../assets/images/Icon1.png'
import Icon2 from '../../assets/images/Icon2.png'
import Icon3 from '../../assets/images/Icon3.png'




const About = () => {
  return (
   <section id='about' className='bg-gray-100 px-10 py-10 '>
    
    <h1 className="text-4xl font-extrabold text-[#1A1D1F] mt-10 mb-10 text-center">A platform for requesting all <br />
     your and educational letters</h1>
    <div className='flex flex-col md:flex-row justify-between '>
  <div className='flex-1  p-6 flex items-center flex-col'>
    <img src={Icon1} alt="" className='mb-4' />
    <h1 className='text-3xl font-extrabold mb-2'>For Students</h1>
    <p className='text-gray-600'>Professors from across the globe seeking exceptional research talent can efficiently scout, thoroughly evaluate, and connect with prospective candidates who exhibit outstanding potential</p>
  </div>
  <div className='flex-1 p-6 flex items-center flex-col'>
    <img src={Icon2} alt="" className='mb-4' />
    <h1 className='text-3xl font-extrabold mb-2'>For Students</h1>
    <p className='text-gray-600'>Professors from across the globe seeking exceptional research talent can efficiently scout, thoroughly evaluate, and connect with prospective candidates who exhibit outstanding potential</p>
  </div>
  <div className='flex-1 p-6 flex flex-col items-center'>
    <img src={Icon3} alt="" className='mb-4' />
    <h1 className='text-3xl font-extrabold mb-2'>For Students</h1>
    <p className='text-gray-600'>Professors from across the globe seeking exceptional research talent can efficiently scout, thoroughly evaluate, and connect with prospective candidates who exhibit outstanding potential</p>
  </div>
</div>

    
     



   </section>
  )
}

export default About