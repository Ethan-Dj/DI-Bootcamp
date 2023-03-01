var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/index', function(req, res) {
  res.render('pages/index');
});


// about page
app.get('/search', function(req, res) {
  res.render('pages/search');
});

app.listen(8080);
console.log('Server is listening on port 8080');

let Parser = require('rss-parser');
let parser = new Parser();

let objectData = []
async function getting() {
    let feed = await parser.parseURL('https://www.reddit.com/.rss');
    console.log(feed.title);

    feed.items.forEach(item => {
        const data = {
            title: item.title,
            link: item.link
        }
    objectData.push({
        title: item.title,
        link: item.link
    })
    console.log(objectData.length)
  });
};

getting()