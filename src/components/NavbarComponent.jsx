import { useState } from "react"
import { Link } from "react-router-dom"

const NavbarComponent = () => {

    const [navbarStatus, setNavbarStatus] = useState(true)

    return (
        <nav className="bg-zinc-900/90 h-24 w-11/12 max-w-4xl min-w-[300px] fixed right-1/2 translate-x-1/2 top-4 rounded-full flex items-center justify-between px-4 md:px-8 z-10">
            <div className="flex-shrink-0">
                <img src="/oreo2-ph.png" className="h-16 w-16 md:h-24 md:w-auto" />
            </div>
            <div className="md:flex md:w-1/2 h-full w-full">
                <ul className={`${navbarStatus ? 'hidden' : ''} w-full h-96 flex justify-around mt-24 flex-col items-center text-stone-200 text-sm md:text-lg md:flex-row md:h-full bg-zinc-900/90 md:bg-transparent md:justify-between md:mt-0 md:full rounded-b-lg md:flex`}>
                    <li className="transition-colors duration-300 hover:bg-stone-500 rounded-full p-2">
                        <Link to={'#oreo'}>Oreo</Link>
                    </li>
                    <li className="transition-colors duration-300 hover:bg-stone-500 rounded-full p-2">
                        <Link to={'#cake'}>Cake</Link>
                    </li>
                    <li className="transition-colors duration-300 hover:bg-stone-500 rounded-full p-2">
                        <Link to={'#milk'}>Milk</Link>
                    </li>
                    <li className="transition-colors duration-300 hover:bg-stone-500 rounded-full p-2">
                        <Link to={'/cart'}>Cart</Link>
                    </li>
                    <li className="transition-colors duration-300 hover:bg-stone-500 rounded-full p-2">
                        <Link to={'/add-product'}>Products</Link>
                    </li>
                    <li className="transition-colors duration-300 hover:bg-stone-500 rounded-full p-2">
                        <Link to={'/profile'}><i className="fa-solid fa-user"></i></Link>
                    </li>
                </ul>
            </div>

            {/* Burger Menu for small screens */}
            <div className="md:hidden h-1/2">
                <button className="h-full p-2 text-stone-200 flex flex-col justify-evenly items-center" onClick={() => {setNavbarStatus(!navbarStatus)}}>
                    <div className="w-5 h-[3px] bg-stone-200"></div>
                    <div className="w-5 h-[3px] bg-stone-200"></div>
                    <div className="w-5 h-[3px] bg-stone-200"></div>
                </button>
            </div>
        </nav>

    )

}

export default NavbarComponent