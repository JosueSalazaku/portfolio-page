import React from 'react'

function ContactInfo() {
  return (
    <div className="pt-8 space-y-1">
      <h1 className="font-bold dark:text-white">Connect</h1>
      <p className="text-gray-lightmode dark:text-gray-darkmode">
        Discover my projects on <a href="https://github.com/JosueSalazaku" className="font-normal text-blue-500 hover:underline">Github</a>, 
        connect with me on <a href="https://www.linkedin.com/in/yourusername" className="font-normal text-blue-500 hover:underline">LinkedIn</a>, 
        or email me directly at <a href="mailto:josuesalazaku@gmail.com" className="font-normal text-blue-500 hover:underline">josuesalazaku@gmail.com</a>.
      </p>
    </div>
  )
}

export default ContactInfo
 