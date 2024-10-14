import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
  return (
    <nav className="flex h-32 items-center justify-between md:max-w-4xl md:mx-auto mx-10 uppercase font-semibold ">
      <Link to='/'>
        <div className="hover:font-bold cursor-pointer">
          VegesStore
        </div>
      </Link>
      <div className="flex items-center">
        <ul className="flex gap-6">
            <NavLink to='/'> <li className="hover:font-bold cursor-pointer">Home</li></NavLink>
           <NavLink to='/shop'> <li className="hover:font-bold cursor-pointer">Shop</li></NavLink>
           <NavLink to='/aboutus'> <li className="hover:font-bold cursor-pointer">About</li></NavLink>
           <NavLink to='/contact'><li className="hover:font-bold cursor-pointer">Contact</li></NavLink>
           <NavLink to='/weather'> <li className="hover:font-bold cursor-pointer">Weather</li></NavLink>
        </ul>
        <div className="flex items-center gap-1 ml-5">
          <FaShoppingCart /> [0]
        </div>
      </div>
    </nav>
  )
}

export default Header