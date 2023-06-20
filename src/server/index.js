let path = require('path')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')

dotenv.config()

const app = express()
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY

app.use(cors());
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(8081, function () {
    console.log('MeaningCloud app listening on port 8081!')
})

app.post('/meaningAPI', (req, res) => {
    const url = `${baseURL}key=${apiKey}&txt=${req.body.text}&lang=auto`
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((data) => {
    res.send(data)
    console.log(data)
    })
    .catch((error) => {
    console.log('Error', error)
    })
})
