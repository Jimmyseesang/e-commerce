const InputComponent = (props) => {

    const {titleName ,id, type, placeholder, color, sendData, value, status, setStatus} = props
    const statusColor = color === "black" ? true : false;

    const handleOnChange = (event) => {
        sendData(event.target.value)
    }

    const warningWord = id === 'email' ? 'Must have @gmail.com' : id === 'password' ? 'password must longer then 8' : 'Please enter this field' 

    return (
        <div className="flex flex-col my-4 w-full">
            <label className="text-lg font-bold" htmlFor={id}>{titleName}</label>
            <p className={`${status?'text-red-900':'hidden'}`}>{warningWord}</p>
            <input 
                className={` ${statusColor && !status ? 'bg-zinc-700 focus:outline-stone-200 text-white placeholder-stone-400' : 'focus:outline-stone-500'} p-3 rounded outline-none transition-all duration-300 w-full ${status ? 'bg-pink-200 placeholder-red-900 animate-shake' : ''}`} type={type} id={id} placeholder={placeholder} 
                onChange={handleOnChange}
                value={value}
                onFocus={setStatus}
            />
        </div>
    )
}

export default InputComponent