import React from 'react'

const Hero = () => {
  return (
    // <div className='w-[800px] bg-[#5e76bf]'>
    //     <div className='container mx-auto'>
    //         <div className='flex flex-col md:flex-row '>
    //             <img src="" alt="" />
    //             <div>

    //             </div>
    //         </div>
    //     </div>

    // </div>
    // bg-[url('https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')]
    // <div className='w-full ]'>
    // <header className="w-full h-96 bgimage  bg-cover bg-center flex justify-center items-center">
    //     <div className="flex flex-col justify-center items-center">
    //         <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">WELCOME TO
    //         <span className="text-amber-500">BOOKSUM.COM</span>
    //         </h1>
    //         <p className="mt-5 text-center text-lg text-white opacity-70">This webiste is about books and their understandings </p>
    //         <a className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full" href="#">Get Started</a>
    //     </div>
    // </header>
    // <div className="container p-20">
        
    // </div>
    // </div>
    <div className='mx-auto md:container'>
        <div className='flex flex-col md:flex-row md:mx-0 lg:mx-0'>
            <div className='w-1/2 max-h-screen my-auto mx-auto md:mx-0 lg:mx-0'>
                <h1 className='text-4xl md:text-8xl text-white text-center md:text-left lg:text-left '>Welcome to <span><a className='text-[#2C4FA7]' href='/'>BOOKSUM</a></span></h1>
                <div className='mx-auto items-center justify-center'>
                    <button className="hidden md:flex px-4 py-2 my-4 text-sm md:mt-8 md:px-12 md:py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 md:text-xl text-white font-semibold drop-shadow-lg rounded-full" href="#"> Know More</button>
                </div>
            </div>
            <div className='w-1/2 max-h-screen mx-auto md:mx-0 lg:max-0'>
                <img className='w-full rounded-xl' src="https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Hero;