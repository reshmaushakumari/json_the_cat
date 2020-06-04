const request = require('request');


const fetchBreedDescription = function(breedName, callback){
  const url = 'https://api.thecatapi.com/v1/breeds/search?q='+breedName;
  request(url, (error, response, body) => {
    let data = "";
      if(body){
         data = JSON.parse(body);
      }
      if(data.length !== 0){
        callback(error,data[0].description);
      }
      else {
        callback(error,"Request not found")
      }
  });
}

const callbackFunc = function(err,desc){
  if(err){
    return err;
  }else{
    return desc;
  }
}

module.exports = fetchBreedDescription;