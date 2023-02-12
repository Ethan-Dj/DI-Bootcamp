const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];


/////////////////////////////////////////////////////////////////////////////////////

// self calling function that takes the object and makes a div showing the image of the robot 
// their name and their email adress

function setUp(obj) {
    obj.forEach(elem =>{
        const location = document.getElementById("gridContainer");
        const newDiv = document.createElement("DIV")
        newDiv.className = "robotCards"
        newDiv.setAttribute("id", elem.id)

        const image = document.createElement("img")
        image.setAttribute("src", elem.image);
        newDiv.appendChild(image)

        let robotName = document.createTextNode(elem.name)
        let robotNameElem = document.createElement("P")
        robotNameElem.appendChild(robotName)
        newDiv.appendChild(robotNameElem)

        let email = document.createTextNode(elem.email)
        let emailElem = document.createElement("P")
        emailElem.appendChild(email)
        newDiv.appendChild(emailElem)

        location.appendChild(newDiv)
    })
}

setUp(robots)

////////////////////////////////////////////////////////////////////////////////

document.getElementById("friends").addEventListener("input", searching)

function searching(evt){

    keyAndBack(evt)

    function keyAndBack (evt){
        stringEntered = evt.target.value.toLowerCase()
        searchRobots(stringEntered)
    }

    function searchRobots(entered){
        let arrayOf = robots.forEach(robots => {
            let names = robots.name.toLocaleLowerCase()
            if(names.includes(entered)){
                document.getElementById(`${robots.id}`).classList.add("display","robotCards")
                document.getElementById(`${robots.id}`).classList.remove("noDisplay")
            } else {
                document.getElementById(`${robots.id}`).classList.add("noDisplay")
                document.getElementById(`${robots.id}`).classList.remove("display","robotCards")
            }
        })
    }
}