import { useEffect, useState } from "react"
import NavbarComponent from "../components/NavbarComponent"

const Store = (props) => {

    const { authPage } = props
    const [products, setProducts] = useState([])
    const [productDis, setProductDis] = useState({})
    const [currentIndex, setCurrentIndex] = useState(0)
    const [fade, setFade] = useState(false)

    const searchAllProduct = async () => {

        try {

            const res = await fetch('http://192.168.1.48:5000/product/all',{
                method: 'GET'
            }) 
    
            const result = await res.json()
            setProducts(result)

        }catch(err) {

            console.log(err)
            
        }

    }

    const handleLeft = () => {
        if(products.length > 0) {
            if(currentIndex === 0) {
                setCurrentIndex(products.length -1)
            }
            else{
                setCurrentIndex(currentIndex -1)
            }
        }
    }

    const handleRight = () => {
        if(currentIndex < products.length - 1) {
            setCurrentIndex(currentIndex +1)
        }
        else {
            setCurrentIndex(0)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
          handleRight()
        }, 5000)

        return () => clearInterval(interval)
      }, [productDis]);

    useEffect(() => {
        if(products.length > 0) {
            setFade(false)
            setTimeout(() => {
                setProductDis(products[currentIndex])
                setFade(true)
            },500)
        }
    },[currentIndex, products])

    useEffect(() => { 
        authPage()
        searchAllProduct()
    },[])

    return (
        <div className="bg-stone-200 relative" style={{ overflowY: 'scroll', scrollbarWidth: 'none' }}>
            <NavbarComponent />
            <section className="h-screen w-screen relative" id="section-oreo">
                <div className="h-5/6 w-[95%] absolute top-[15%] right-1/2 translate-x-1/2 rounded-lg">
                    {/* Left button */}
                    <div className="h-20 w-20 bg-zinc-800/75 rounded-full absolute top-1/2 -translate-y-1/2 -left-8 text-stone-300 flex justify-center items-center text-3xl hover:bg-zinc-700/75 z-10" onClick={handleLeft}>
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    {/* Right button */}
                    <div className="h-20 w-20 bg-zinc-800/75 rounded-full absolute top-1/2 -translate-y-1/2 -right-8 text-stone-300 flex justify-center items-center text-3xl hover:bg-zinc-700/75 z-10" onClick={handleRight}>
                        <i className="fa-solid fa-angle-right "></i>
                    </div>
                    <div className="w-full h-full flex md:flex-row flex-col justify-evenly">
                        <div className="md:w-1/2 h-full bg-zinc-400/50 text-stone-200 flex flex-col md:justify-center items-center w-full justify-evenly">
                            <h1 className={`text-4xl flex justify-center font-bold md:mb-12 bg-zinc-900/75 py-4 px-12 rounded-full text-center transition-all duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>{productDis ? productDis.name : 'Product'}</h1>
                            <div className="md:w-1/2 text-ellipsis h-1/2">
                                <p className={`text-start text-lg w-full h-1/6 transition-all duration-1000 ${fade ? 'opacity-100 translate-y-0': 'opacity-0 translate-y-36'}`} style={{ textIndent: '2rem' }}>
                                    {productDis ? productDis.description : 'description'}
                                </p>
                            </div>
                            <div>
                                <p className={`text-3xl font-bold transition-all duration-1000 ${fade ? 'opacity-100':'opacity-0'}`}>
                                    {productDis ? productDis.price : '0'}
                                    <span className="font-normal"> ฿</span>
                                </p>
                            </div>
                            <div className="w-full md:mt-12 flex justify-center">
                                <div className="min-w-28 h-12 bg-orange-600 rounded-full hover:bg-stone-200 hover:text-orange-600 transition-all">
                                    <div className="h-full flex justify-evenly items-center">
                                        Add
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                </div>
                                <div className="w-12 aspect-square bg-zinc-900 rounded-full ml-4 flex justify-center items-center text-xl hover:text-red-600 hover:bg-stone-200 transition-all duration-300">
                                    <i className="fa-solid fa-heart"></i>
                                </div>
                            </div>
                        </div>
                        <div className={`md:w-1/2 h-full flex justify-center items-center relative bg-zinc-900 rounded-r-lg`}>
                            <img src={productDis ? `http://192.168.1.48:5000/images/products/${productDis.images}` : ''} className={`w-[60%] z-10 transition-all duration-1000 ease-in-out ${fade ? 'opacity-100 translate-x-0' :'opacity-0 -translate-x-10'}`} />
                            <div className="w-[40%] aspect-square bg-stone-200 rounded-full absolute top-[15%] right-[22%]"></div>
                        </div>
                    </div>
                    <div className="absolute w-1/6 h-12 bg-stone-900/[50%] bottom-4 right-1/2 translate-x-1/2 rounded-full flex justify-evenly items-center">
                        {products.map((e,i) => {
                            return <div key={i} className={`w-2 h-2 rounded-full transition-all duration-500 ${currentIndex === i ? 'bg-orange-500' : 'bg-white/25'}`}></div>
                        })}
                    </div>
                </div>
                {/* <div className="h-2/6 w-[95%] bg-stone-500 absolute -bottom-[40%] right-1/2 translate-x-1/2 rounded-lg"></div> */}
            </section>
        </div>
    )
}

export default Store