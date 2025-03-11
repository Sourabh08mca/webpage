import React from 'react'

function Contact() {
  return (
    <div className='place-items-center'>
      <form
    class="relative border-4 border-neutral-900 p-6 rounded-lg grid gap-8 md:flex-1 md:max-w-lg my-4 md:my-12 lg:my-16 bg-white dark:bg-neutral-800 w-full ">
    <h2 id="contact" class="text-3xl font-bold">Contact</h2>
    <div class="relative">
        <input type="text" id="name" placeholder="Your Name"
            class="peer w-full py-2 border-2 border-amber-400 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"/>
        <label for="name"
            class="text-neutral-500 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 ">Your
            Name
        </label>
    </div>
    <div class="relative">
        <input type="text" id="email" placeholder="Your Email"
            class=" peer w-full py-2 border-2 border-amber-400 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"/>
        <label for="email"
            class=" text-neutral-500 text-sm font-bold uppercase absolute -top-4 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 ">Your
            Email
        </label>
    </div>
    <div class="relative">
        <textarea name="content" id="content" cols="20" rows="5" placeholder="How can we help?"
            class=" peer form-textarea resize-none w-full border-2 border-amber-400 rounded-md focus:ring-4 dark:focus:ring-offset-2 focus:ring-amber-400 focus:border-amber-400 focus:outline-none dark:bg-amber-400 dark:text-neutral-900 placeholder-transparent"></textarea>
        <label for="content"
            class=" text-neutral-500 text-sm font-bold uppercase absolute -top-3 left-2 -translate-y-1/2 transition-all peer-placeholder-shown:left-4 peer-placeholder-shown:top-6 peer-placeholder-shown:text-neutral-900 peer-focus:-top-4 peer-focus:left-2 peer-focus:text-neutral-600 dark:peer-focus:text-neutral-300 ">How
            Message
        </label>
    </div>
    <a href="#" role="menuitem"
        class=" py-2 px-6 bg-neutral-900 text-white w-max shadow-xl hover:shadow-none transition-shadow focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-md ring-offset-4 ring-offset-white dark:ring-offset-amber-400 ">
        Send
    </a>
</form>
    </div>
  )
}

export default Contact
