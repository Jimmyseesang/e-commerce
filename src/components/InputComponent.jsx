const InputComponent = (props) => {

    const {titleName ,id, type, placeholder, color} = props

    const statusColor = color === "black" ? true : false;

    return (
        <div className="flex flex-col my-4">
            <label className="text-lg font-bold" htmlFor={id}>{titleName}</label>
            <input className={` ${statusColor ? 'bg-zinc-700 focus:outline-stone-200 text-white placeholder-stone-400' : 'focus:outline-stone-500'} p-3 rounded outline-none transition-all duration-300`} type={type} id={id} placeholder={placeholder} />
        </div>
    )
}

export default InputComponent