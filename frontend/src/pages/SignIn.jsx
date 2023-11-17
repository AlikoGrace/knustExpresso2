import knustLogo from '../assets/images/knustLogo.png'


const SignIn = () => {
  return (
    <>
     <div className='flex items-center justify-center h-screen '>
        <div className='min-w-fit flex-col lg:border bg-white px-10 py-5 lg:shadow-md lg:rounded-[4px]'>
            <div className='mb-8 flex justify-center'>
                <img src={knustLogo} alt="logo" className='w-24'/>
            </div>
            <div>
                <button className='w-full text-center py-3 px-10 mb-5 border flex space-x-2 items-center justify-center border-slate-200 rounded-[4px] text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150'>
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="" className='w-6 h-6' /> <span>Login with Google</span>
                </button>
               
            </div>
            <div className='flex flex-col text-sm rounded-md'>
                <input type="text" placeholder='username or Email' className='mb-5 rounded-[4px] border py-3 px-10 hover:outline-none
                focus:outline-none hover:border-slate-400' />
                <input type="password" placeholder='password' className='border rounded-[4px] py-3  px-10 hover:outline-none focus:outline-none hover:border-slate-400 mb-2' />
            </div>
            <div className='flex flex-row justify-between'>
            <div >
                <label htmlFor="remember" className='flex justify-center mt-1' >
                    <input type="checkbox" id='remember' className='v-4 h-4 border-slate-200 focus:bg-primary' />
                    <span className='text-[12px] ml-1'> Remember me</span>
                 </label>
            </div>
            <div><a href="" className='font-medium text-primary text-[12px]'>Forgot password</a></div>
            </div>

            <button className='w-full py-3 px-10 font-medium text-white bg-primary hover:bg-black rounded-[4px] border-primary hover:shadow inline-flex space-x--2 items-center justify-center mt-5 mb-3'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      <span>Login</span>
            </button>
            <p className='text-center text-[12px] mb-7'>Not registerd yet? <a href="#" className="text-primary font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg></span></a></p>
           

        </div>
     </div>
    </>
  )
}

export default SignIn