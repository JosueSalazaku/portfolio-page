import { Link } from "react-router-dom"

function Navigation() {
  return (
      <nav className="h-44 flex flex-row justify-between items-center px-20">
          <Link to="/Home"><h2 className="font-extrabold text-2xl">JOSUE <br />SALAZAKU</h2></Link>
          <div>
              <ul className="flex flex-col justify-start items-left gap-2 font-medium text-xl">
                  <li><Link to="/About">About</Link></li>
                  <li><Link to="/Work">Work</Link></li>
                  <li><Link to="/Contact">Contact</Link></li>
              </ul>
          </div>
      </nav>
  )
}

export default Navigation