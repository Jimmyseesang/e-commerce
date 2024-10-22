import { useEffect } from "react"

const Store = () => {

    useEffect(() => {

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

        authPage()

    }, [])

    return (
        <div>Store</div>
    )
}

export default Store