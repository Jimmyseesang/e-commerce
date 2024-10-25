import { useEffect, useState } from "react"
import NavbarComponent from "../components/NavbarComponent"

const AddProducts = (props) => {

    const { authPage } = props

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState('')
    const [stock, setStock] = useState('')
    const [product, setProduct] = useState([])
    const formData = new FormData()

    const deleteProduct = async (id) => {

        try {

            const res = await fetch(`http://192.168.1.48:5000/product/delete/${id}`,{
                method: "DELETE"
            })

            const result = await res.json()
            if(res.status === 200) {
                console.log(result.msg)
            }
            else{
                console.log(result.msg)
            }

            searchAllProduct()

        }catch(err){
            console.log(err)
        }

    }

    const searchAllProduct = async () => {

        try {

            const res = await fetch('http://192.168.1.48:5000/product/all', {
                method: "GET"
            })

            const result = await res.json()
            setProduct(result)
            console.log(result)


        } catch (err) {
            console.log(err)
        }

    }

    const handleSummit = async (e) => {
        e.preventDefault()


        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('image', image)
        formData.append('category', category)
        formData.append('stock', stock)

        setName('');
        setDescription('');
        setPrice('');
        setImage(null);
        setCategory('');
        setStock('');

        try {

            const response = await fetch('http://192.168.1.48:5000/product/add', {
                method: "POST",
                body: formData
            })

            const result = await response.json()
            searchAllProduct()
            return console.log('add product success ^-^', result)

        } catch (err) {
            return console.log('Add product fail!!!')
        }

    }

    useEffect(() => {
        authPage()
        searchAllProduct()
    }, [])

    return (
        <div className="h-screen bg-stone-200" style={{ overflowY: 'scroll', scrollbarWidth: 'none' }}>
            <NavbarComponent />
            <div className="w-full flex md:flex-row flex-col">
                <form className="h-full w-1/2 mx-auto mt-40 flex flex-col items-center" onSubmit={handleSummit}>
                    <h1 className="text-3xl font-bold mb-2">Add Product</h1>
                    <div>
                        <div className="flex flex-col my-4">
                            <label
                                htmlFor="name"
                                className="label-style">
                                Product name
                            </label>
                            <input
                                className="input-style"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="name..."
                                value={name}
                                onChange={element => { setName(element.target.value) }}
                            />
                        </div>
                        <div className="flex flex-col my-4">
                            <label
                                htmlFor="description"
                                className="label-style">
                                Description
                            </label>
                            <input
                                className="input-style"
                                type="text"
                                name="description"
                                id="description"
                                placeholder="description..."
                                value={description}
                                onChange={element => { setDescription(element.target.value) }}
                            />
                        </div>
                        <div className="flex flex-col my-4">
                            <label
                                htmlFor="price"
                                className="label-style" >
                                Price
                            </label>
                            <input
                                className="input-style"
                                type="number"
                                name="price"
                                id="price"
                                placeholder="0"
                                value={price}
                                onChange={element => { setPrice(element.target.value) }}
                            />
                        </div>
                        <div className="flex flex-col my-4">
                            <label
                                htmlFor="image"
                                className="label-style">
                                Image file
                            </label>
                            <input
                                className="bg-white p-4 rounded cursor-none"
                                type="file"
                                name="image"
                                id="image"
                                onChange={element => setImage(element.target.files[0])}
                            />
                        </div>
                        <div className="flex flex-col my-4">
                            <label
                                htmlFor="category"
                                className="label-style">
                                Category
                            </label>
                            <input
                                className="input-style"
                                type="text"
                                name="category"
                                id="category"
                                placeholder="category..."
                                value={category}
                                onChange={element => setCategory(element.target.value)}
                            />
                        </div>
                        <div className="flex flex-col my-4">
                            <label
                                className="label-style"
                                htmlFor="stock">
                                Stock
                            </label>
                            <input
                                className="input-style"
                                type="number"
                                name="stock"
                                id="stock"
                                placeholder="0"
                                value={stock}
                                onChange={element => setStock(element.target.value)}
                            />
                        </div>
                        <button type="submit" className="bg-zinc-900 text-stone-200 text-xl font-bold w-full h-12 rounded cursor-none hover:bg-stone-500">
                            Save Product
                        </button>
                    </div>
                </form>
                <div className="h-full w-1/2 mx-auto mt-60 hidden md:block">
                    <table className="w-[90%] border border-gray-400 border-collapse bg-zinc-900/25 rounded">
                        <thead>
                            <tr className="font-bold text-lg border border-gray-400">
                                <th className="border-2 border-zinc-900 border-gray-400 p-2">Name</th>
                                <th className="border-2 border-zinc-900 border-gray-400 p-2">Price</th>
                                <th className="border-2 border-zinc-900 border-gray-400 p-2">Description</th>
                                <th className="border-2 border-zinc-900 border-gray-400 p-2">Update</th>
                                <th className="border-2 border-zinc-900 border-gray-400 p-2">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map((e) => (
                                <tr key={e._id} className="text-center border border-gray-400">
                                    <td className="border-2 border-zinc-900 border-gray-400 p-2">{e.name}</td>
                                    <td className="border-2 border-zinc-900 border-gray-400 p-2">{e.price}</td>
                                    <td className="border-2 border-zinc-900 border-gray-400 p-2">{e.description}</td>
                                    <td className="border-2 border-zinc-900 border-gray-400 p-2">
                                        <button className="bg-blue-400 rounded p-2 cursor-none hover:bg-blue-200">Update</button>
                                    </td>
                                    <td className="border-2 border-zinc-900 border-gray-400 p-2">
                                        <button className="bg-red-400 rounded p-2 cursor-none hover:bg-red-200" onClick={() => {deleteProduct(e._id)}}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )

}

export default AddProducts