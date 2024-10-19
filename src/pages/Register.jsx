import { Link } from "react-router-dom"
import InputComponent from "../components/InputComponent"

const Register = () => {
    return (
        <section className="h-screen flex relative">
            <div className="w-full bg-stone-200 flex flex-col justify-center items-center xl:w-1/3 sm:w-1/2"> 
                <div>
                    <h1 className="text-stone-800 text-3xl font-extrabold">Create an account</h1>
                </div>
                <div className="my-4 w-80">
                    <form>
                        <InputComponent titleName="Name" id="name" type="text" placeholder="name..." />
                        <InputComponent titleName="Email" id="email" type="email" placeholder="gmail    "/>
                        <InputComponent titleName="Password" id="password" type="password" placeholder="password..."/>
                    </form>
                </div>
                <button type="subbmit" className="bg-stone-900 text-stone-200 text-lg p-3 w-64 rounded cursor-none hover:bg-stone-500 transition-colors ease-in">Continue &gt;&gt;</button>
                <div className="flex mt-5">
                    <p className="mr-4">Already have an account?</p>
                    <Link className="flex items-center hover:text-stone-500 transition-colors ease-out" to="/login"><i class="fa-solid fa-right-to-bracket mr-2"></i><p className="font-bold">Login</p></Link>
                </div>
            </div>
            <div className="bg-zinc-900 grow"></div>
            <img className="absolute w-72 -bottom-16 -left-16 hover:w-80 transition-all ease-in" src="/oreo.png" />
            <img className="w-0 absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 xl:right-1/3 sm:w-96 sm:hover:w-[430px] transition-all ease-in" src="/oreo2-ph.png" />
        </section>
    )
}

export default Register