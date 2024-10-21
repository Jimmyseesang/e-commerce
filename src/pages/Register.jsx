import { Link, useNavigate } from "react-router-dom"
import InputComponent from "../components/InputComponent"
import { useState } from "react"

const Register = () => {
    const navigate = useNavigate()

    const [dataForm, setDataForm] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [nameStatus, setNameStatus] = useState(false)
    const [emailStatus, setEmailStatus] = useState(false)
    const [passwordStatus, setPasswordStatus] = useState(false)
    const [alertBox, setAlertBox] = useState(false)
    const [closeAlert, setcloseAlert] = useState(false)

    const handleData = (field, value) => {
        setDataForm(prevState => ({
            ...prevState,
            [field]: value
        }))
    }

    const handleCloseAlert = () => {
        setAlertBox(false)
        setcloseAlert(true)
        setTimeout(() => {
            setcloseAlert(false)
        }, 1000)
    }

    const dataCheck = () => {

        const emailPattern = /^[A-Za-z0-9._%+-]+@gmail\.com$/
        let isValid = true

        if (dataForm.username === "") {
            setNameStatus(true)
            isValid = false
        }

        if (!emailPattern.test(dataForm.email)) {
            setEmailStatus(true)
            isValid = false
        }

        if (dataForm.password.length < 8) {
            setPasswordStatus(true)
            isValid = false
        }

        return isValid

    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (dataCheck()) {
            try {
                const res = await fetch('http://192.168.1.48:5000/auth/register', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dataForm)
                })

                const result = await res.json()

                if (res.status === 200) {
                    navigate('/login')
                    console.log("Registeration Success!!!", result)
                    setDataForm({
                        username: '',
                        email: '',
                        password: ''
                    })
                } else if (res.status === 400) {
                    console.log("email already exists!!")
                    setAlertBox(true)
                }
            } catch (err) {
                console.log("Error", err)
            }
        }
    }

    return (
        <section className="h-screen flex relative">
            <div className="w-full h-full bg-stone-200 flex flex-col justify-center items-center xl:w-1/3 xl:animate-leftSiteXl sm:w-1/2 sm:animate-leftSiteSm   absolute">
                <div className="fixed">
                    <div>
                        <h1 className="text-stone-800 text-3xl font-extrabold text-center">Create an account</h1>
                    </div>
                    <div className="my-4 w-80">
                        <form onSubmit={handleSubmit} className="flex flex-col items-center">
                            <InputComponent titleName="Name" id="name" type="text" placeholder="name..." sendData={(data) => handleData('username', data)} value={dataForm.username} status={nameStatus} setStatus={() => { setNameStatus(false) }} />
                            <InputComponent titleName="Email" id="email" type="text" placeholder="gmail..." sendData={(data) => handleData('email', data)} value={dataForm.email} status={emailStatus} setStatus={() => { setEmailStatus(false) }} />
                            <InputComponent titleName="Password" id="password" type="password" placeholder="password..." sendData={(data) => handleData('password', data)} value={dataForm.password} status={passwordStatus} setStatus={() => { setPasswordStatus(false) }} />
                            <button type="submit" className="bg-stone-900 text-stone-200 text-lg p-3 w-64 rounded cursor-none hover:bg-stone-500 transition-colors ease-in mt-4">Continue &gt;&gt;</button>
                        </form>
                    </div>
                    <div className="flex mt-5 justify-center">
                        <p className="mr-4">Already have an account?</p>
                        <Link className="flex items-center hover:text-stone-500 transition-colors ease-out" to="/login"><i className="fa-solid fa-right-to-bracket mr-2"></i><p className="font-bold">Login</p></Link>
                    </div>
                </div>
                <div className={`w-96 h-48 absolute -top-1/2 right-1/2 translate-x-1/2 bg-zinc-900 rounded ${alertBox ? 'animate-alertBox' : ''} ${closeAlert ? 'animate-closeAlert' : ''} flex flex-col justify-evenly items-center`}>
                    <i className="fa-solid fa-circle-xmark text-6xl text-red-900"></i>
                    <p className="text-red-900 text-xl font-bold">This email already exists</p>
                    <button className="bg-stone-200 w-24 text-zinc-900 p-1 rounded cursor-none hover:bg-red-900" onClick={handleCloseAlert}>Close</button>
                </div>
            </div>
            <div className="bg-zinc-900 grow"></div>
            <img className="absolute w-72 -bottom-16 -left-16 hover:w-80 transition-all ease-in" src="/oreo.png" />
            <img className="w-0 absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 xl:right-1/3 sm:w-96 sm:hover:w-[430px] transition-all ease-in" src="/oreo2-ph.png" />
        </section>
    )
}

export default Register