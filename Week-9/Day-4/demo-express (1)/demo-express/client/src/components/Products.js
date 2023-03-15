import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Products = (props) => {
    const [products, setProducts] = useState([])
    const [text, setSearchText] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    // useEffect is already async
    useEffect(()=>{
        const getProducts = async() => {
            const res = await fetch ('/api/products/')
            const data = await res.json()
            setProducts(data)
            console.log(data)
        }
        getProducts()
    }, [])

    const search = () => {
        fetch(`/api/products/search?name=${text}`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }

    const add = (e) => {
        e.preventDefault()
        fetch('/api/products',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,price})
        })
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    }

    return(
        <>
        <h1>Shop</h1>
        <div>
            <input type="text" onChange={(e) => {
                setSearchText(e.target.value)
            }}/>
            <input type="submit" placeholder='Submit' onClick={()=>search()}/>
        </div>
        <div>
            <h4>Add Product</h4>
            <form onSubmit={add}>
                Name:<input onChange={(e)=>setName(e.target.value)}/>
                price:<input onChange={(e)=>setPrice(e.target.value)}/>
                <input type="submit" value="submit"/>
            </form>
        </div>
        
        
        {
            products.map(item => {
                return(
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <Link to ={`/${item.id}`}>Show</Link>
                    </div>
                )
            })
        }
        </>
    )

}

export default Products