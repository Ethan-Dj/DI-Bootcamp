
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux"
import { result } from "../actions/action";

const Button = (props) => {
    const fname = useSelector(state => state.fname)
    const sname = useSelector(state => state.sname)

    const dispatch = useDispatch()

    console.log(fname,'+', sname , 'button')

    return(
        <>
        <button onClick= {(e) => {
            e.preventDefault()
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'a234d69e68msh0dd62b791a51637p16c7e5jsn4cf39ed5ac8d',
                    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
                }
            };
            
            fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, options)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    dispatch(result(response))
                })
                .catch(err => console.error(err));

        }}>Find Score</button>
        </>
    )
}

export default connect()(Button)