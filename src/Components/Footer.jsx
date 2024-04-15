import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function Footer({ darkMode }) {
  return (
    <footer className={ darkMode ? "fixed bottom-0 w-full h-640  p-20" : " bg-neutral-800 border-t text-white  h-64 border-gray-200 p-20" }>
      <div className="flex flex-row md:flex-row justify-between items-center">
        <div className="flex flex-row md:flex-row md:items-center">
          <div className="mb-2 md:mb-0">LOGO</div>
          <div className="ml-4">
            <p className="font-bold">EXPLORE</p>
            <div className="flex flex-row md:flex-row space-y-2 md:space-x-8 md:space-y-0">
              <ul>
                <li><Link to="/Works">Works</Link></li>
                <li><Link to="/About">About Me</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
              <ul>
                <li><a href="#">Github</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div>© Josué Salazaku Design 2024</div>
      </div>
    </footer>
  );
}

export default Footer;
