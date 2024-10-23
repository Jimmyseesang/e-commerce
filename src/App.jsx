import { Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { useEffect, useRef } from "react"
import Store from "./pages/Store"
import AddProducts from "./pages/AddProducts"

const App = () => {

    const authPage = async () => {
        const token = localStorage.getItem('token')

        try {
            const res = await fetch('http://192.168.1.48:5000/auth/page', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify()
            })

            if(res.status === 200) {}
            else{window.location = '/login'}


        } catch (err) {
            console.log(err)
        }
    }

    const dot1 = useRef(null)
    const dot2 = useRef(null)
    const dot3 = useRef(null)

    useEffect(() => {
        if (window.innerWidth > 768) {
            const cursor1 = dot1.current
            const cursor2 = dot2.current
            const cursor3 = dot3.current

            const handleMouseMove = (e) => {
                const posX = e.clientX
                const posY = e.clientY

                cursor1.style.left = `${posX}px`
                cursor1.style.top = `${posY}px`

                cursor2.animate(
                    {
                        left: `${posX}px`,
                        top: `${posY}px`
                    },
                    {
                        duration: 300,
                        fill: 'forwards'
                    }
                )

                cursor3.animate(
                    {
                        left: `${posX}px`,
                        top: `${posY}px`
                    },
                    {
                        duration: 900,
                        fill: 'forwards'
                    }
                )
            }

            window.addEventListener('mousemove', handleMouseMove)

            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
            }
        }
    }, [])

    return (
        <div className="font-nunito">
            <div ref={dot1} className="w-5 h-5 -translate-x-1/2 -translate-y-1/2 bg-stone-800 fixed -top-5 -left-5 z-10 rounded-full pointer-events-none z-20"></div>
            <div ref={dot2} className="w-5 h-5 -translate-x-1/2 -translate-y-1/2 bg-stone-500 fixed -top-5 -left-5 z-10 rounded-full pointer-events-none z-20"></div>
            <div ref={dot3} className="w-5 h-5 -translate-x-1/2 -translate-y-1/2 bg-stone-300 fixed -top-5 -left-5 z-10 rounded-full pointer-events-none z-20"></div>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/store" element={<Store authPage={authPage} />} />
                <Route path="/add-product" element={<AddProducts authPage={authPage} />} />
            </Routes>
        </div>
    )
}

export default App
