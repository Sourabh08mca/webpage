import React from 'react'

function Hiro() {
  return (
    <div>
      <div class="w-full h-screen bg-black mt-1.5">

<div
  class="w-full mx-auto relative bg-[url('https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?cs=srgb&dl=pexels-harold-vasquez-853421-2653362.jpg&fm=jpg')] bg-cover bg-no-repeat sm:aspect-video py-20">
  <div class="absolute md:-top-24 md:-right-32 sm:-right-[7rem] -right-[1rem] top-0 opacity-30 w-[15%] h-[20%] gradiant rounded-full blur-3xl"></div>
  <div class="absolute md:-left-[45%] sm:-left-[42%] -left-[40%] opacity-10 w-[50%] h-full my-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl"></div>

  <div class="w-[80%] mx-auto h-full flex justify-between items-center">
    <div class="h-full xl:w-[50%] md:w-[60%] sm:w-[70%] w-full text-white flex flex-col gap-2 justify-center">
      <h1 class="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold">Hi there, I am</h1>
      <h1 class="xl:text-7xl lg:text-6xl md:text-5xl text-4xl font-semibold bg-text">Sourabh Mahajan!</h1>
      
      <p class="lg:text-3xl sm:text-xl text-lg lg:my-6 my-2">I’m a web developer who believes in creating user-friendly and visually appealing digital experiences.
       I value clean code, modern design, and solving challenging problems through technology.</p>

      
      <div class="flex sm:flex-row flex-col gap-4 lg:mt-4 mt-2">
        <a href="/Aboutpage" class=" md:px-8 px-4 md:py-4 py-2 md:text-xl text-lg font-semibold outline outline-2  rounded-md cursor ">About Me</a>
      </div>
    </div>
    <div></div>
  </div>
</div>
</div>

<div className='bg-blend-overlay mt-12'>
<section class=" py-20 text-center  ">
    <div class="container mx-auto">
      <h1 class="text-4xl font-bold mb-4">About Us</h1>
     
    </div>
  </section>
  
<section class=" py-5 text-center  ">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-4">Hi, I'm Sourabh Mahajan</h2>
      <p class="text-lg mb-6">A Web Developer specializing in React, JavaScript, and modern web technologies.</p>
    </div>
  </section>


  <section id="about" class="py-5 ">
    <div class="container mx-auto px-6">
      <h3 class="text-3xl font-bold mb-6">About Me</h3>
      <p class="text-lg">I’m Sourabh Mahajan, a web developer who believes in creating user-friendly and visually appealing digital experiences. I value clean code, modern design, and solving challenging problems through technology.</p>
    </div>
  </section>

  
  <section id="skills" class="py-20 ">
    <div class="container mx-auto px-6">
      <h3 class="text-3xl font-bold mb-6">Skills</h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="text-center bg-blue-200 p-6 rounded shadow-md">
          <h4 class="font-bold">Web Development</h4>
        </div>
        <div class="text-center bg-blue-200 p-6 rounded shadow-md">
          <h4 class="font-bold">React</h4>
        </div>
        <div class="text-center bg-blue-200 p-6 rounded shadow-md">
          <h4 class="font-bold">JavaScript</h4>
        </div>
        <div class="text-center bg-blue-200 p-6 rounded shadow-md">
          <h4 class="font-bold">CSS & Tailwind</h4>
        </div>
      </div>
    </div>
  </section>
</div>
    </div>
  )
}

export default Hiro
