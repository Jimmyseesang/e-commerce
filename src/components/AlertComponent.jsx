const AlertComponent = (props) => {

    const {type, text, status} = props

    const color = type === 'good' ? 'border-green-600 text-green-600' : 'border-red-500 text-red-500'
    const symbol = type === 'good' ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-x"></i>

    return (
        <div className={`fixed w-96 h-24 top-4 rounded-md bg-zinc-900 right-4 border-l-8  z-10 ${color} text-xl font-bold flex justify-evenly items-center transition-all duration-700 ${status ? 'translate-x-0' : 'translate-x-[400px]'}`}>
            <div className={`h-10 aspect-square border-2 rounded-full flex justify-center items-center ${color}`}>{symbol}</div>
            <p className="">{text}</p>
        </div>
    )
}

export default AlertComponent