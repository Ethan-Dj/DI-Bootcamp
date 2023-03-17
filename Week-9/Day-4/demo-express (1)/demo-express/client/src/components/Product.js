import { useEffect, useState } from "react";
import {useParams, useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";




const Product = (props) => {

    const [product, setProduct] = useState([])
    const navigate = useNavigate()
    const params = useParams()

    useEffect(()=> {
        fetch(`api/products/${params.id}`)
        .then(res=>res.json())
        .then(data => {
            console.log(data)
            setProduct(data)
        })
    },[])

    const delete1 = (e) => {
        e.preventDefault()
        fetch(`/api/products/${params.id}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:params.id})
        })
        navigate('/')
    }

    const update1 =(e) => {
        e.preventDefault()
        console.log({name: e.target.item.value,price: e.target.price.value})
        fetch(`/api/products/${params.id}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: e.target.item.value,price: e.target.price.value})
        })
        navigate('/')
    }

    return (
        <>
        <h1>Product Page</h1>
        {
            product.map(item => {
                return(
                    <>
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
                    <button onClick={(e) => delete1(e)}>Delete</button>
                    <Link to={'/'}>Show All</Link>
                    <form onSubmit={(e) => update1(e)}>
                        <input type="text" name="item" />
                        <input type="text" name="price" />
                        <input type="submit" value="submit" />
                    </form>
                    </>
                )
            })
        }
        </>
    )
}

export default Product