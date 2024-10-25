import { useEffect } from "react"
import NavbarComponent from "../components/NavbarComponent"

const Store = (props) => {

    const { authPage } = props

    useEffect(() => { authPage() }, [])

    return (
        <div className="bg-stone-200 relative" style={{ overflowY: 'scroll', scrollbarWidth: 'none' }}>
            <NavbarComponent />
            <section className="h-screen w-screen relative" id="section-oreo">
                <div className="h-5/6 w-[95%] bg-zinc-700 absolute top-[15%] right-1/2 translate-x-1/2 rounded-lg ">
                    <div className="h-20 w-20 bg-zinc-800/75 rounded-full absolute top-1/2 -translate-y-1/2 -left-8 text-stone-300 flex justify-center items-center text-3xl hover:bg-zinc-700/75 z-10">
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className="h-20 w-20 bg-zinc-800/75 rounded-full absolute top-1/2 -translate-y-1/2 -right-8 text-stone-300 flex justify-center items-center text-3xl hover:bg-zinc-700/75 z-10">
                        <i className="fa-solid fa-angle-right "></i>
                    </div>
                    <div className="w-full h-full flex md:flex-row flex-col justify-evenly">
                        <div className="md:w-1/2 h-full text-stone-200 flex flex-col md:justify-center items-center w-full justify-evenly">
                            <h1 className="text-4xl flex justify-center font-bold md:mb-12 bg-zinc-900/75 py-4 px-12 rounded-full">lorem</h1>
                            <div className="md:w-1/2 text-ellipsis h-1/2">
                                <p className="text-center text-lg w-full h-1/6" style={{ textIndent: '2rem' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias facere architecto inventore, id possimus aliquam! Illum quidem vero pariatur!
                                </p>
                            </div>
                            <div className="w-full md:mt-12 flex justify-center">
                                <div className="min-w-28 h-12 bg-orange-600 rounded-full hover:bg-stone-200 hover:text-orange-600 transition-all">
                                    <div className="h-full flex justify-evenly items-center">
                                        Add
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                </div>
                                <div className="w-12 aspect-square bg-zinc-900 rounded-full ml-4 flex justify-center items-center text-xl hover:text-red-600 hover:bg-stone-200 transition-all duration-300">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 h-full flex justify-center items-center relative bg-zinc-900 rounded-r-lg">
                            <img src="/oreo-ice-cream.png" className="w-[60%] z-10"/>
                            <div className="w-[40%] aspect-square bg-stone-200 rounded-full absolute top-[15%] right-[22%]"></div>
                        </div>
                    </div>
                    <div className="absolute w-1/6 h-12 bg-stone-900/[50%] bottom-4 right-1/2 translate-x-1/2 rounded-full flex justify-evenly items-center">
                        <div className="w-2 h-2 bg-white/25 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/25 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/25 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/25 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/25 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/25 rounded-full"></div>
                        <div className="w-2 h-2 bg-white/25 rounded-full"></div>
                    </div>
                </div>
                {/* <div className="h-2/6 w-[95%] bg-stone-500 absolute -bottom-[40%] right-1/2 translate-x-1/2 rounded-lg"></div> */}
            </section>
        </div>
    )
}

export default Store