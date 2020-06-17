const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

var app = express()
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

const data = [{
    "id": 1,
    "first_name": "Saunder",
    "last_name": "Dodman",
    "email": "sdodman0@slate.com",
    "gender": "Male"
  }, {
    "id": 2,
    "first_name": "Gusty",
    "last_name": "Pearl",
    "email": "gpearl1@blogger.com",
    "gender": "Female"
  }, {
    "id": 3,
    "first_name": "Ree",
    "last_name": "Tawn",
    "email": "rtawn2@ebay.co.uk",
    "gender": "Female"
  }, {
    "id": 4,
    "first_name": "Della",
    "last_name": "Standley",
    "email": "dstandley3@stanford.edu",
    "gender": "Female"
  }, {
    "id": 5,
    "first_name": "Inna",
    "last_name": "Covington",
    "email": "icovington4@nytimes.com",
    "gender": "Female"
  }, {
    "id": 6,
    "first_name": "Lacie",
    "last_name": "Sommers",
    "email": "lsommers5@state.gov",
    "gender": "Female"
  }, {
    "id": 7,
    "first_name": "Leanna",
    "last_name": "Osgorby",
    "email": "losgorby6@webeden.co.uk",
    "gender": "Female"
  }, {
    "id": 8,
    "first_name": "Herold",
    "last_name": "Alliston",
    "email": "halliston7@vinaora.com",
    "gender": "Male"
  }, {
    "id": 9,
    "first_name": "Naomi",
    "last_name": "Sadler",
    "email": "nsadler8@addtoany.com",
    "gender": "Female"
  }, {
    "id": 10,
    "first_name": "Brigida",
    "last_name": "Taffie",
    "email": "btaffie9@arizona.edu",
    "gender": "Female"
  }]


app.get('/api/',(req,res) => {
    return res.status(200).json(data)
})

app.listen(3010,() => {
  console.log('เปิดเซิฟเวอร์ที่ 3010 ครับผม')
})