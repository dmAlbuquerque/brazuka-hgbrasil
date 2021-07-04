# Obtenha dados de Weather, Finance, GeoIP

Esta API facilita a requisição dos dados do site www.hgbrasil.com.br

<br>

# Instalando
```shell
npm i brazuka-hgbrasil
```
ou
```shell
yarn add brazuka-hgbrasil
```

<br>

# Importando
```js
const brazuka = require("brazuka-hgbrasil")
```

<br>

# Previsão do Tempo (Weather)
```js
const brazuka = require("brazuka-hgbrasil")

var key = "11ad1a1f" //key gerada na www.hgbrasil.com.br
var city = "Frecheirinha"
var state = "CE"

brazuka.weather(key, city, state).then(function (res) {
    console.log(res.results)
})
```

## Exemplo de Resposta
```json
{
  "temp": 30,
  "date": "04/07/2021",
  "time": "16:51",
  "condition_code": "28",
  "description": "Tempo nublado", 
  "currently": "dia",
  "cid": "",
  "city": "Frecheirinha, CE",     
  "img_id": "28",
  "humidity": 48,
  "wind_speedy": "1.16 km/h",     
  "sunrise": "05:50 am",
  "sunset": "05:44 pm",
  "condition_slug": "cloudly_day",
  "city_name": "Frecheirinha",    
  "forecast": [
    {
      "date": "04/07",
      "weekday": "Dom",
      "max": 33,
      "min": 21,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "05/07",
      "weekday": "Seg",
      "max": 33,
      "min": 21,
      "description": "Tempo limpo",
      "condition": "clear_day"
    },
    {
      "date": "06/07",
      "weekday": "Ter",
      "max": 34,
      "min": 21,
      "description": "Chuvas esparsas",
      "condition": "rain"
    },
    {
      "date": "07/07",
      "weekday": "Qua",
      "max": 34,
      "min": 21,
      "description": "Chuva",
      "condition": "rain"
    },
    {
      "date": "08/07",
      "weekday": "Qui",
      "max": 33,
      "min": 21,
      "description": "Chuvas esparsas",
      "condition": "rain"
    },
    {
      "date": "09/07",
      "weekday": "Sex",
      "max": 33,
      "min": 21,
      "description": "Tempo nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "10/07",
      "weekday": "Sáb",
      "max": 33,
      "min": 21,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "11/07",
      "weekday": "Dom",
      "max": 32,
      "min": 22,
      "description": "Tempo nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "12/07",
      "weekday": "Seg",
      "max": 34,
      "min": 22,
      "description": "Parcialmente nublado",
      "condition": "cloudly_day"
    },
    {
      "date": "13/07",
      "weekday": "Ter",
      "max": 32,
      "min": 21,
      "description": "Tempo nublado",
      "condition": "cloudly_day"
    }
  ]
}
```