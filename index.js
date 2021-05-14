const db = require('./postgre.js');
const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const root = path.resolve(__dirname);
const fetch = require("node-fetch");
const { response } = require('express');

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

app.get("/app.js", (req, res, next) => {
    res.sendFile(`${root}/app.js`);
});


app.get('/heroes', (req, response) => {
    db.getAll().then(res => response.send(res))
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

let regEpx = /\/hero\/([W-w]+)/
app.get(regEpx, (req, res) => {
    db.getAll().then(allHeroes => {
        let name = req.path.split("/")[2];
        for (let elem of allHeroes) {
            if (elem.nick_name == name) {
                res.send(elem);
                return;
            }
        }

        res.send(404);
    });




    //  res.sendFile(root + req.path);
});


// db.addHero("popld", "asdqwe", "asdqweqew", "Asdqwe", "asdqwe"); // add hero