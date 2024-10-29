import React from 'react'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function ConnectInfo() {
  return (
    <div className="flex flex-row gap-2">
    <a
      href="https://github.com/josuesalazaku"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithubSquare size={24} className="dark:text-white" />
    </a>
    <a
      href="https://www.linkedin.com/in/josu%C3%A9-salazaku-a0114b294/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin size={24} className="dark:text-white" />
    </a>
  </div>
  )
}

export default ConnectInfo