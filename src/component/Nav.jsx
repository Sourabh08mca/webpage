import React from 'react'

function Nav() {
  return (
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
  )
}

export default Nav
