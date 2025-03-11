import React from 'react'

function About() {
  return (
    
    
    <div> 
    

<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>My Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-white text-gray-800">

  <div>
  <header class="lg:px-16 px-4 bg-neutral-700 flex flex-wrap items-center py-1.5 shadow-md ">
    <div class="flex-1 flex justify-between items-center ">
        <a href="#" class="text-3xl font-bold text-white">WEB APP</a>
    </div>

    <label for="menu-toggle" class="pointer-cursor md:hidden block">
      <svg class="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden md:flex md:items-center md:w-auto w-full"  id="menu">
        <nav>
            <ul class="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
                <li><a class="md:p-4 py-3 px-0 block text-2xl font-bold" href="/">Home</a></li>
                <li><a class="md:p-4 py-3 px-0 block text-2xl font-bold" href="/Aboutpage">About Us</a></li>
                <li><a class="md:p-4 py-3 px-0 block text-2xl font-bold" href="/Projectpage">Project</a></li>
                <li><a class="md:p-4 py-3 px-0 block text-2xl md:mb-0 mb-2 font-bold" href="/Contactpage">Contact Us</a></li>
                <a href="" class="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Logout</a>
            </ul>
        </nav>
    </div>
</header>
  </div>

  
  <section class=" py-20 text-center">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold mb-4">Hi, I'm Sourabh Mahajan</h2>
      <p class="text-lg mb-6">A Web Developer specializing in React, JavaScript, and modern web technologies.</p>
    </div>
  </section>


  <section id="about" class="py-20 ">
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

  <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

<footer class="bg-gray-800 text-white py-8 mt-28">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <h4 class="text-lg font-bold mb-4">WebApp</h4>
                <p>Welcome to Our Awesome Website.</p>
            </div>
            <div>
                <h4 class="text-lg font-bold mb-4">Quick Links</h4>
                <ul class="space-y-2">
                <li><a href="/" class="hover:text-gray-300">Home</a></li>
                    <li><a href="/Aboutpage" class="hover:text-gray-300">Aboutes</a></li>
                    <li><a href="/Projectpage" class="hover:text-gray-300">Project</a></li>
                    <li><a href="/Contactpage" class="hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-lg font-bold mb-4">Contact Us</h4>
                <ul class="space-y-2">
                    <li><a href="#" class="hover:text-gray-300">sourabhm2002@gmail.com</a></li>
                    <li><a href="#" class="hover:text-gray-300">7385040744</a></li>
                </ul>
            </div>
            <div>
                <h4 class="text-lg font-bold mb-4">Follow Us</h4>
                <div class="flex space-x-4">
                    <a href="https://www.facebook.com/" class="hover:text-blue-400"><i class="fab fa-facebook fa-lg"></i></a>
                    <a href="https://x.com/?lang=en" class="hover:text-blue-400"><i class="fab fa-twitter fa-lg"></i></a>
                    <a href="https://www.instagram.com/accounts/login/?hl=en" class="hover:text-pink-500"><i class="fab fa-instagram fa-lg"></i></a>
                </div>
            </div>
        </div>
        
    </div>
</footer>
    </div>

 

  
</body>
</html>
    </div>
  )
}

export default About
