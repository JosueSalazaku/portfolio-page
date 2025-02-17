import React from 'react'

function ContactInfo() {
  return (
    <div className="pt-8 space-y-1">
      <h1 className="font-bold dark:text-white">Connect</h1>
      <p className="text-gray-lightmode dark:text-gray-darkmode">
        Discover my projects on <a href="https://github.com/JosueSalazaku" className="font-bold text-blue-500 hover:underline">Github</a>, 
        connect with me on <a href="https://www.linkedin.com/in/josu%C3%A9-salazaku-a0114b294/" className="font-bold text-blue-500 hover:underline">LinkedIn</a>, 
        or email me directly at <a href="mailto:josuesalazaku@gmail.com" className="font-bold text-blue-500 hover:underline">josuesalazaku@gmail.com</a>.
        For more info on my experience, visit my <a href="/experience" className="font-bold text-blue-500 hover:underline">experience</a> page.
      </p>
    </div>
  )
}

export default ContactInfo
 