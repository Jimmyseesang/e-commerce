const Register = () => {
    return (
        <section className="h-screen font-nunito flex">
            <div className="bg-stone-200 w-1/3 flex flex-col justify-center items-center relative">
                <div>
                    <h1 className="text-stone-800 text-3xl font-extrabold">Create an account</h1>
                </div>
                <div className="my-4 w-80">
                    <form className="">
                        <div className="flex flex-col my-4">
                            <label className="text-lg font-bold" htmlFor="name">Name</label>
                            <input className="py-2 px-3 rounded outline-none" type="text" id="name" placeholder="Name..." />
                        </div>
                        <div className="flex flex-col my-4">
                            <label className="text-lg font-bold" htmlFor="gmail">Gmail</label>
                            <input className="py-2 px-3 rounded outline-none" type="gmail" id="gmail" placeholder="Gmail..." />
                        </div>
                        <div className="flex flex-col my-4">
                            <label className="text-lg font-bold" htmlFor="password">Password</label>
                            <input className="py-2 px-3 rounded outline-none" type="password" id="password" placeholder="Password..." />
                        </div>
                    </form>
                </div>
                <button type="subbmit" className="bg-stone-900 text-stone-200 text-lg p-3 w-5/12 rounded">Continue &gt;&gt;</button>
                <div className="flex absolute bottom-10">
                    <p className="mr-4">Already have an account?</p>
                    <a className="flex items-center" href="#"><i class="fa-solid fa-right-to-bracket mr-2"></i><p className="font-bold">Login</p></a>
                </div>
                {/* <img className="absolute w-1/2 -bottom-24 -left-24" src="../public/oreo.png" /> */}
            </div>
            <div className="bg-zinc-900 w-2/3 relative">
                {/* <div className="w-40 h-40 bg-stone-300 rounded-full"></div> */}
                <img className="w-1/3 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2" src="../public/oreo2.png" alt="" />
            </div>
        </section>
    )
}

export default Register