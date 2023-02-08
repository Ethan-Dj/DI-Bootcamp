class Video {
    constructor(title, uploader, time){
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    watch(){
        console.log(`${this.title}, ${this.uploader}, ${this.time} `)
    }
}

const test1 = new Video("a","b", 1)

const test2 = new Video("c","d", 2)

const test3 = [
    {
        title: "Harry",
        uploader: "a",
        time: 3
    },
    {
        title: "Star Ways",
        uploader: "b",
        time: 8
    },
    {
        title: "Peter Pan",
        uploader: "b",
        time: 2
    },
    {
        title: "Robin Hood",
        uploader: "d",
        time: 9
    },
    {
        title: "Up",
        uploader: "f",
        time: 3
    }
]

let opened = []
let looping = test3.forEach(elem => {
    opened.push(new Video(elem.title, elem.uploader, elem.time))
})
console.log(opened)

