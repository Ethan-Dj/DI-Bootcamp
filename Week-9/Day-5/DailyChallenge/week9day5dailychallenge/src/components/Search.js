import { useDispatch} from 'react-redux'

import { search } from '../reducers/action'

const Search = (props) => {
    const dispatch = useDispatch()

    const search1 = (e) => {
        e.preventDefault()
        console.log(e.target.title.value)
        dispatch(search(e.target.title.value))
    }


    return(
        <>
        <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
            <form onSubmit={(e) => search1(e)}> 
                <input type="text" name="title" />
                <input type="submit" value="Search" />
            </form>
        </div>
        </>
    )
}

export default Search