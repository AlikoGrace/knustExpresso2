import avatars from '../../assets/images/avatars.png'
import Button from '../shared/Button'

const Community = () => {
  return (
    <section id='community' className='flex flex-col items-center pt-10 px-10 mb-10'>
        <div>
            <img src={avatars} alt="" className='lg:h-12 h-10' />
        </div>
        <h1 className='lg:text-4xl text-3xl leading-8 font-extrabold text-[#1A1D1F] mt-10 mb-10 text-center'>Join our fast growing Community today!</h1>
        <p className='mb-10  text-sm text-center'>Simply sign up, complete your details, get connected to your future 
            research <br />
             partners and explore the world of endless research opportunities</p>
            <Button name='Sign up for free'/>
    </section>
  )
}

export default Community