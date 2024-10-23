import { Link, useNavigate } from "react-router-dom"
import InputComponent from "../components/InputComponent"
import { useState } from "react";

const Login = () => {
    
    const navigate = useNavigate()
    const [usernameStatus, setUsernameStatus] = useState(false)
    const [passwordStatus, setPasswordStatus] = useState(false)
    const [alertBox, setAlertBox] = useState(false)
    const [msgAlert, setMsgAlert] = useState("")
    const [closeAlert, setcloseAlert] = useState(false)
    const [dataForm, setDataForm] = useState({
        username: '',
        password: ''
    })

    const handleCloseAlert = () => {
        setAlertBox(false)
        setcloseAlert(true)
        setTimeout(() => {
            setcloseAlert(false)
        },1000)
    }
    
    const handleData = (field, data) => {
        setDataForm((prev) => {
            return {
                ...prev,
                [field]: data
            }
        })
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

    const handleSumbit = async (event) => {
        event.preventDefault()

        if(dataChack()){
            try {

                const res = await fetch('http://192.168.1.48:5000/auth/login', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dataForm)
                })

                const result = await res.json()

                if(res.status === 400) {
                    setMsgAlert("Username or password incorrect!!!")
                    setAlertBox(true)
                }
                else {
                    localStorage.setItem('token', result.token)
                    navigate('/store')
                }
                
            }catch (err) {
                return console.log("Can't fetch data!!!")
            }
        }
    }

    return (
        <section className="flex h-screen relative bg-zinc-900 truncate">
            <div className="grow bg-stone-200 relative xl:animate-leftSiteLogin">
                <img className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-0 sm:w-[450px] hover:w-[550px] transition-all sm:ease-in animate-cakeAppearSm" src="/oreo-cake.png" />
            </div>
            <div className="w-full bg-zinc-900 flex flex-col justify-center items-center xl:w-1/3 sm:w-1/2 relative">
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
                            setStatus={() => {setPasswordStatus(false)}} 
                        />
                        <button type="submit" className="bg-white text-zinc-900 text-lg p-3 w-64 rounded cursor-none hover:bg-zinc-500 transition-colors ease-in mt-4">Login</button>
                    </form>
                    <div className="flex mt-4">
                        <p className="mr-5">don't have an account?</p>
                        <Link className="flex items-center hover:text-zinc-500 transition-colors ease-out" to='/'><i className="fa-solid fa-right-to-bracket mr-2"></i><p className="font-bold">Sign Up</p></Link>
                    </div>
                </div>
                <div className={`w-96 h-48 absolute -top-1/2 right-1/2 translate-x-1/2 bg-stone-200 rounded ${alertBox ? 'animate-alertBox' : ''} ${closeAlert ? 'animate-closeAlert' : ''} flex flex-col justify-evenly items-center z-10`}>
                    <i className="fa-solid fa-circle-xmark text-6xl text-red-900"></i>
                    <p className="text-red-900 text-xl font-bold">{msgAlert}</p>
                    <button className="bg-zinc-900 w-24 text-stone-200 p-1 rounded cursor-none hover:bg-red-900" onClick={handleCloseAlert}>Close</button>
                </div>
            </div>
            <img className="absolute -top-28 -right-28 w-96 -rotate-[135deg] hover:w-[420px] transition-all ease-in" src="/milk-3.webp" />
        </section>
    )
}

export default Login