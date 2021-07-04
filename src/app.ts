const axios = require('axios')

function weather(key:string, city:string, state:string){
  const url = 'https://api.hgbrasil.com/weather?format=json-cors'
  
  var response = axios.get(`${url}&key=${key}&city_name=${city},${state}`)
    .then(function (response: any) {
      return response.data
    })
    .catch(function (error:any) {
      return error.status
    })
    return response
}


module.exports = {
  weather,
}
