import '../App.css';

const Numbers = (props) => {

    return(
        <>
        <div class="each" style={{backgroundColor: "white"}}>
            <h4>{props.title}</h4>
            <h2>{props.number}</h2>
            <h1>{props.icon}</h1>
        </div>
        </>
    )
}

export default Numbers