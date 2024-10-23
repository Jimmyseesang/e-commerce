import { useEffect } from "react"

const AddProducts = (props) => {

    const {authPage} = props

    useEffect(() => {authPage()},[])

    return (
        <div>Add Products</div>
    )

}

export default AddProducts