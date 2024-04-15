import { Link } from "react-router-dom"
import About from "../Pages/About"
import Works from "../Pages/Work"
import Contact from "../Pages/Contact"

function Footer() {
  return (
    <footer className="h-82 border p-20 end">
      <div className="flex flex-col">
        <div className="flex flex-row justify-start space-x-44">
          <div>LOGO</div>
          <div className="pl-52">
            <p>EXPLORE</p>
            <div className="flex flex-row space-x-20">
              <ul>
                <li><Link to={Works}>Works</Link></li>
                <li><Link to={About}></Link>About me</li>
                <li><Link to={Contact}></Link>Contact</li>
              </ul>
              <ul>
                <li><a href="">Github</a></li>
                <li><a href=""></a>LinkdIn</li>
                <li><a href=""></a>Instagram</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20">©Josué Salazaku Design 2024</div>
        </div>
    </footer>
  )
}

export default Footer