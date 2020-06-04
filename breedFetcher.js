const request = require('request');

const breedName = process.argv.slice(2).join('');
const url = 'https://api.thecatapi.com/v1/breeds/search?q='+breedName;

const breed = function(callback){
  request(url, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      if(data.length !== 0){
        console.log(data[0].description);
      }
      else {
        console.log("Request breed not found")
      }
    }
  });
}

const callbackFunc = function(err){
  console.log(err);
}
breed(callbackFunc);