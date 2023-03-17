
const NavBar = (props) => {

    return(
        <>
        <div style={{display:"flex", 
        flexDirection:"row", 
        justifyContent:"space-between",
        backgroundColor:"blue",
        color: "white"}}>
            <h4 style={{margin: "20px"}}>Very Cool Weather App</h4>
            <div style={{margin: "20px"}} >
                <button>Home</button>
                <button>Favourites</button>
            </div>
        </div>
        </>
    )
}

export default NavBar