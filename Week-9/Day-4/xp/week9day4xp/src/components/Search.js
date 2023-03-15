import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { sendSearch } from '../reducer/action'
import { Link, useNavigate} from 'react-router-dom'

const Search = (props) => {

    const [search, updateSearch] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return(
        <>
            <input type="text" name="search" placeholder="search" onChange={(e)=> {
                e.preventDefault()
                updateSearch(e.target.value)
            }}/>
            <button onClick={(e) => {
                e.preventDefault()
                dispatch(sendSearch(search))
                navigate('/searched')
            }}>Search</button>
                <Link to='/beach'>Beach</Link>
                <Link to='/mountain'>Mountain</Link>
                <Link to='/food'>Food</Link>
        </>
    )
}

export default Search