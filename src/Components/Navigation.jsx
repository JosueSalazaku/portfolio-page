import { Link } from "react-router-dom"

function Navigation() {
  return (
      <nav className="h-24 flex flex-row justify-start items-center px-16">
          <Link to="/Home"><h2 className="font-extrabold text-2xl">JOSUE <br />SALAZAKU</h2></Link>
          <div>
              <ul>
                  <li><Link to="/About">About</Link></li>
                  <li><Link to="/Works">Works</Link></li>
                  <li><Link to="/Contact">Contact</Link></li>
              </ul>
          </div>
      </nav>
  )
}

export default Navigation