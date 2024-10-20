import { Link } from "react-router-dom"
import InputComponent from "../components/InputComponent"
import axios from "axios"
import { useState } from "react"

const Login = () => {

    return (
        <section className="flex h-screen relative">
            <div className="grow bg-stone-200 relative">
                <img className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-0 sm:w-[450px] hover:w-[550px] transition-all ease-in" src="/oreo-cake.png" />
            </div>
            <div className="w-full bg-zinc-900 flex flex-col justify-center items-center xl:w-1/3 sm:w-1/2">
                <h1 className="text-stone-200 text-3xl font-bold">Login</h1>
                <div className="text-stone-200 flex flex-col items-center">
                    <form className="my-4 w-80">
                        <InputComponent titleName="Username" id="username" type="text" placeholder="username..." color="black"/>
                        <InputComponent titleName="Password" id="password" type="password" placeholder="password..." color="black"/>
                    </form>
                    <button type="submit" className="bg-white text-zinc-900 text-lg p-3 w-64 rounded cursor-none hover:bg-zinc-500 transition-colors ease-in">Login</button>
                    <div className="flex mt-5">
                        <p className="mr-5">don't have an account?</p>
                        <Link className="flex items-center hover:text-zinc-500 transition-colors ease-out" to='/'><i class="fa-solid fa-right-to-bracket mr-2"></i><p className="font-bold">Sign Up</p></Link>
                    </div>
                </div>
            </div>
            <img className="absolute -top-28 -right-28 w-96 -rotate-[135deg] hover:w-[420px] transition-all ease-in" src="/milk-3.webp" />
        </section>
    )
}

export default Login