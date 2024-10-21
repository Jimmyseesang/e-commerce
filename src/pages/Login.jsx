import { Link, useNavigate } from "react-router-dom"
import InputComponent from "../components/InputComponent"
import { useState } from "react";

const Login = () => {

    const [dataForm, setDataForm] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    const [usernameStatus, setUsernameStatus] = useState(false)
    const [passwordStatus, setPasswordStatus] = useState(false)

    const handleData = (field, data) => {
        setDataForm((prev) => {
            return {
                ...prev,
                [field]: data
            }
        })
        console.log(dataForm)
    }

    const dataChack = () => {

        let isValid = true

        if(dataForm.username === ""){
            setUsernameStatus(true)
            isValid = false
        }
        if(dataForm.password === ""){
            setPasswordStatus(true)
            isValid = false
        }

        return isValid

    }

    const handleSumbit = (event) => {
        event.preventDefault()
        if(dataChack()){
            console.log("send data success!!!")
            navigate('/store')
        }
    }

    return (
        <section className="flex h-screen relative bg-zinc-900">
            <div className="grow bg-stone-200 relative xl:animate-leftSiteLogin">
                <img className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-0 sm:w-[450px] hover:w-[550px] transition-all sm:ease-in animate-cakeAppearSm" src="/oreo-cake.png" />
            </div>
            <div className="w-full bg-zinc-900 flex flex-col justify-center items-center xl:w-1/3 sm:w-1/2">
                <h1 className="text-stone-200 text-3xl font-bold animate-formAppear">Login</h1>
                <div className="text-stone-200 flex flex-col items-center animate-formAppear">
                    <form className="my-4 w-80 flex flex-col items-center" onSubmit={handleSumbit}>
                        <InputComponent
                            titleName="Username"
                            id="username"
                            type="text"
                            placeholder="username..."
                            color="black"
                            sendData={(data) => { handleData('username', data) }}
                            value={dataForm.username}
                            status={usernameStatus}
                            setStatus={() => {setUsernameStatus(false)}} />
                        <InputComponent 
                            titleName="Password" 
                            id="passwordInput" 
                            type="password" 
                            placeholder="password..." 
                            color="black" 
                            sendData={(data) => { handleData('password', data) }} 
                            value={dataForm.password}
                            status={passwordStatus}
                            setStatus={() => {setPasswordStatus(false)}} />
                        <button type="submit" className="bg-white text-zinc-900 text-lg p-3 w-64 rounded cursor-none hover:bg-zinc-500 transition-colors ease-in mt-4">Login</button>
                    </form>
                    <div className="flex mt-4">
                        <p className="mr-5">don't have an account?</p>
                        <Link className="flex items-center hover:text-zinc-500 transition-colors ease-out" to='/'><i className="fa-solid fa-right-to-bracket mr-2"></i><p className="font-bold">Sign Up</p></Link>
                    </div>
                </div>
            </div>
            <img className="absolute -top-28 -right-28 w-96 -rotate-[135deg] hover:w-[420px] transition-all ease-in" src="/milk-3.webp" />
        </section>
    )
}

export default Login