// const axios = require('axios')
// const router = require('express').Router()
//module.exports = router
const key = process.env.GOOGLE_API_KEY='AIzaSyCrFk5QukjYj508-4hmMa3QO4QPFeHz4RA'
var axios = require('axios');
const router = require('express').Router()

var obj = new Array(15);


var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522%2C151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyCrFk5QukjYj508-4hmMa3QO4QPFeHz4RA',
  headers: { }
};

axios(config)
.then(function (response) {
  const file = JSON.stringify(response.data);
  var text = JSON.parse(file);
  for (var i = 0; i < text.results.length; i++) {
    obj[i] = text.results[i];
    
}


})

.catch(function (error) {
  console.log(error);
});

function getIntputValue() {
    
}