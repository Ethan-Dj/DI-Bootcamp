
const Nav = (props) => {
    return(
        <>
        <div style={{display:"flex", justifyContent: "space-between"}}>
            <h1>Current Score : {props.currentScore}</h1>
            <h1>High Score : {props.highScore}</h1>
        </div>
        </>
    )
}

export default Nav