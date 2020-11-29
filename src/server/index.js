var path = require('path')
const express = require('express')
//const mockAPIResponse = require('./mockAPI.js')
const fetch = require("node-fetch");
const dotenv = require('dotenv');
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);
const apiKey = process.env.API_KEY;
const app = express()

app.use(express.static('dist'))

const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3030, function () {
    console.log('Example app listening on port 3030!')
})



app.post("/fetch_api", async (req, res) => {
    console.log("hllo ward");
    console.log(req.body)
    console.log(req.body.formText)
    const formText = req.body.formText;
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=${formText}&model=general`;
    const options = {
        "method": "GET",
    }
    const response = await fetch(url, options)
        .then(res => res.json())
        .catch(e => {
            console.error({
                "message": "error :(",
                error: e,
            });
        });
    //console.log("RESPONSE: ", response);
    res.send(response);
});











