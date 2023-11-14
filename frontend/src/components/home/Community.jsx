import avatars from '../../assets/images/avatars.png'
import Button from '../shared/Button'

const Community = () => {
  return (
    <section className='flex flex-col items-center pt-10 mb-10'>
        <div>
            <img src={avatars} alt="" className='h-12 ' />
        </div>
        <h1 className='text-4xl font-extrabold text-[#1A1D1F] mt-10 mb-10 text-center'>Join our fast growing Community today!</h1>
        <p className='mb-10'>Simply sign up, complete your details, get connected to your future 
            research <br />
             partners and explore the world of endless research opportunities</p>
            <Button name='Sign up for free'/>
    </section>
  )
}

export default Community