import React from 'react'

function Footer() {
  return (
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
  )
}

export default Footer
