import { Link } from "react-router-dom"

const NavbarComponent = () => {

    return (
        <div className="flex justify-between bg-zinc-900/90 h-24 w-4/6 fixed right-1/2 translate-x-1/2 top-4 rounded-full z-10">
            <div div className="relative m-2 mx-4" >
                <img src="/oreo2-ph.png" className="h-full z-10 relative" />
                <div className="bg-stone-200 w-10 h-10 rounded-full absolute top-0 left-1"></div>
                <div className="bg-stone-200 w-6 h-6 rounded-full absolute top-5 right-0"></div>
                <div className="bg-stone-200 w-8 h-8 rounded-full absolute top-6 left-1"></div>
                <div className="bg-stone-200 w-3 h-3 rounded-full absolute top-0 right-0"></div>
                <div className="bg-stone-200 w-3 h-3 rounded-full absolute bottom-0 right-2"></div>
            </div >
            <ul className="w-1/2 flex justify-around items-center text-stone-200 text-lg">
                <li className="nav-hover"><a href="#section-oreo">Oreo</a></li>
                <li className="nav-hover">Cake</li>
                <li className="nav-hover">Milk</li>
                <li className="nav-hover">Like</li>
                <li className="nav-hover">
                    <Link to={'/add-product'}>
                        Add
                    </Link>
                </li>
                <li className="nav-hover"><i className="fa-solid fa-cart-shopping"></i></li>
            </ul>
        </div >
    )

}

export default NavbarComponent