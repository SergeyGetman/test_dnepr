const db = require('./postgre.js');
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const root = path.resolve(__dirname);

const bookrouter = express.Router();
const app = express(); // it's working 



app.use(bodyParser.text());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
    res.sendFile(`${root}/index.html`);
});


app.get("/style.css", (req, res, next) => {
    res.sendFile(`${root}/style.css`);
});


app.get('/heroes', (req, response) => {
    db.getData().then(res => response.send(res))
});

app.get('/downloadBooks', (req, res, next) => {
    res.download('./images/superman.png', "anothername", (err) => {
        console.log("File sent");
    });
});

// GET ALL IMAGES

app.get(/\.(png|jpeg|jpg)$/, (req, res) => {
    res.sendFile(root + req.path);
});

app.listen(5000, () => {
    console.log("it's started", new Date());
});



app.post('/add', async(request, response) => {
    let q = await db.addHero(request.body);
    response.send(q);
});



// fetch("http://localhost:5000/add", {
//     method: "POST", 
//     body: JSON.stringify({nick_name: 'betman',
//                           real_name : "bruse",
//                           origin_description : "mouse drop, and nedo fly",
//                           superpowers: "prugat s 9-i eta)!(ki",
//                           catch_phrase: "go dibil go"
// }),
//     headers: {'Content-Type': 'application/json'}
// });

// db.addHero("popld", "asdqwe", "asdqweqew", "Asdqwe", "asdqwe"); // add hero