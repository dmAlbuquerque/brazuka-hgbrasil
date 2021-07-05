# Obtenha dados de Previsão do Tempo, Cotações de Moedas, IBOVESPA e Geolocalização

Esta biblioteca visa facilitar as requisições dos dados da api da www.hgbrasil.com

Em casos de dúvida consulte a <a href="https://console.hgbrasil.com/documentation/weather"> documentação oficial</a> da HGBrasil.

<br>

# Avisos

 - Esta <b>não é</b> uma biblioteca oficial da HGBrasil. 
 
 - Informações como <b>cotações de moedas</b> e <b>BOVESPA</b> podem ser retornados com atrasos entre 15 minutos e 1 hora. Você pode conferir o horário da última atualização dos dados no <code>updated_at</code>.

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
Retorna os dados de previsão do tempo e condições climáticas atuais para uma cidade.

<br>

```js
const brazuka = require("brazuka-hgbrasil")

var key = "11ad1a1f" //key gerada na www.hgbrasil.com
var city = "Frecheirinha"
var state = "CE"

brazuka.weather(key, city, state).then(function (res) {
    console.log(res.results)
})
```

<br>

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

<br>

# Cotação das Moedas (Dolar, Pesos Argentinos, Bitcoin entre outras)
Retorna a cotação de diversas moedas.

<br>

```js
const brazuka = require("brazuka-hgbrasil")

var key = "11ad1a1f" //key gerada na www.hgbrasil.com

brazuka.financeCurrency(key).then(function (res) {
    console.log(res.results)
})
```

<br>

## Exemplo de Resposta
```json

{
    "by": "default",
    "valid_key": true,
    "results": {
        "currencies": {
            "source": "BRL",
            "USD": {
                "name": "Dollar",
                "buy": 5.053,
                "sell": 5.0586,
                "variation": 0.16
            },
            "EUR": {
                "name": "Euro",
                "buy": 5.996,
                "sell": 6.0024,
                "variation": 0.32
            },
            "GBP": {
                "name": "Pound Sterling",
                "buy": 6.992,
                "sell": null,
                "variation": 0.66
            },
            "ARS": {
                "name": "Argentine Peso",
                "buy": 0.053,
                "sell": null,
                "variation": 0.13
            },
            "CAD": {
                "name": "Canadian Dollar",
                "buy": 4.1044,
                "sell": null,
                "variation": 0.0
            },
            "AUD": {
                "name": "Australian Dollar",
                "buy": 3.8098,
                "sell": null,
                "variation": -0.001
            },
            "JPY": {
                "name": "Japanese Yen",
                "buy": 0.0456,
                "sell": null,
                "variation": -0.104
            },
            "CNY": {
                "name": "Renminbi",
                "buy": 0.7818,
                "sell": null,
                "variation": 0.002
            },
            "BTC": {
                "name": "Bitcoin",
                "buy": 186052.001,
                "sell": 186052.001,
                "variation": 4.301
            }
        },
        "stocks": {
            "IBOVESPA": {
                "name": "BM&F BOVESPA",
                "location": "Sao Paulo, Brazil",
                "points": 127621.65,
                "variation": 1.56
            },
            "NASDAQ": {
                "name": "NASDAQ Stock Market",
                "location": "New York City, United States",
                "points": 14639.33,
                "variation": 0.81
            },
            "CAC": {
                "name": "CAC 40",
                "location": "Paris, French",
                "variation": 1.77
            },
            "NIKKEI": {
                "name": "Nikkei 225",
                "location": "Tokyo, Japan",
                "variation": 0.92
            }
        },
        "available_sources": [
            "BRL"
        ],
        "bitcoin": {
            "blockchain_info": {
                "name": "Blockchain.info",
                "format": [
                    "USD",
                    "en_US"
                ],
                "last": 34735.95,
                "buy": 34735.95,
                "sell": 34735.95,
                "variation": 4.301
            },
            "coinbase": {
                "name": "Coinbase",
                "format": [
                    "USD",
                    "en_US"
                ],
                "last": 34835.95,
                "variation": 4.46
            },
            "bitstamp": {
                "name": "BitStamp",
                "format": [
                    "USD",
                    "en_US"
                ],
                "last": 34679.93,
                "buy": 34716.66,
                "sell": 34693.73,
                "variation": 4.112
            },
            "foxbit": {
                "name": "FoxBit",
                "format": [
                    "BRL",
                    "pt_BR"
                ],
                "last": 176300.0,
                "variation": 3.71
            },
            "mercadobitcoin": {
                "name": "Mercado Bitcoin",
                "format": [
                    "BRL",
                    "pt_BR"
                ],
                "last": 176379.31957,
                "buy": 176355.0,
                "sell": 176379.31945,
                "variation": 3.765
            }
        },
        "taxes": [
            {
                "date": "2021-07-01",
                "cdi": 4.25,
                "selic": 4.25,
                "daily_factor": 1.00016137,
                "selic_daily": 4.15,
                "cdi_daily": 4.15
            }
        ]
    },
    "execution_time": 0.0,
    "from_cache": true
}
```

<br>

# Obtendo o preço de ações listadas no IBOVESPA

Retorna o preço de ações na bolsa de valores BOVESPA!

Títulos disponíveis (symbols): <a href="https://console.hgbrasil.com/documentation/finance/symbols">veja a lista</a>

<br>

```js
const brazuka = require("brazuka-hgbrasil")

var key = "11ad1a1f" //key gerada na www.hgbrasil.com
var symbol = "bidi4" //No plano pago é aceito passar mais de 1, ex: bidi4,petr4,qual3

brazuka.financeIbovespa(key, symbol).then(function (res) {
    console.log(res.results)
})
```

## Exemplo de Resposta
```json
{
    "by": "symbol",
    "valid_key": true,
    "results": {
        "BIDI4": {
            "symbol": "BIDI4",
            "name": "Banco Inter",
            "company_name": "Banco Inter S.A.",
            "document": "00.416.968/0001-01",
            "description": "Banco Múltiplo Com Carteira de Crédito. Financiamento. Investimento E Câmbio.",
            "website": "http://ri.bancointer.com.br/",
            "region": "Brazil/Sao Paulo",
            "currency": "BRL",
            "market_time": {
                "open": "10:00",
                "close": "17:30",
                "timezone": -3
            },
            "market_cap": 67679.7,
            "price": 26.21,
            "change_percent": 1.55,
            "updated_at": "2021-07-04 20:50:28"
        }
    },
    "execution_time": 0.0,
    "from_cache": true
}
```

<br>

# Obtendo as ações com as maiores altas ou baixas no IBOVESPA
Retorna a lista de títulos que estão em maiores altas ou baixas na BOVESPA.

Títulos disponíveis (symbols): <a href="https://console.hgbrasil.com/documentation/finance/symbols">veja a lista</a>

<br>

### Obtem as maiores altas
```js
const brazuka = require("brazuka-hgbrasil")

var key = "11ad1a1f" //key gerada na www.hgbrasil.com
var symbol = "get-high" //Obtem as maiores altas

brazuka.financeIbovespa(key, symbol).then(function (res) {
    console.log(res.results)
})
```

<br>

### Obtem as maiores Baixas
```js
const brazuka = require("brazuka-hgbrasil")

var key = "11ad1a1f" //key gerada na www.hgbrasil.com
var symbol = "get-low" //Obtem as maiores baixas

brazuka.financeIbovespa(key, symbol).then(function (res) {
    console.log(res.results)
})
```

<br>

## Exemplo de Resposta
```json
{
    "by": "get_low_symbols",
    "valid_key": true,
    "results": {
        "OSXB3": {
            "symbol": "OSXB3",
            "name": "Osx Brasil",
            "company_name": "Osx Brasil S.A.",
            "document": "09.112.685/0001-32",
            "description": "Equipamentos E Serviços Para A Indústria Offshore de Petróleo E Gás Natural.",
            "website": "http://www.osx.com.br/",
            "region": "Brazil/Sao Paulo",
            "currency": "BRL",
            "market_time": {
                "open": "10:00",
                "close": "17:30",
                "timezone": -3
            },
            "market_cap": 34.63,
            "price": 11.0,
            "change_percent": -9.61,
            "updated_at": "2021-07-03 20:52:51"
        }
    },
    "execution_time": 0.04,
    "from_cache": false
}
```
<br>

# Obtendo os dados de geolocalização via IP
- <code>address</code> - Pode ser passado o IP de seu usuário exemplo <code>000.000.000.000</code> ou <code>remote</code> para o sistema obter o IP com base no cliente. Por padrão o valor é <code>remote</code>

```js
const brazuka = require("brazuka-hgbrasil")

var key = "11ad1a1f" //key gerada na www.hgbrasil.com
var address = "remote" //Por padrão é remote

brazuka.geoIP(key, address).then(function (res) {
    console.log(res.results)
})

```

<br>

## Exemplo de Resposta
```json
{
    "by": "address_standard",
    "valid_key": true,
    "results": {
        "address": "54.86.50.139",
        "type": "ipv4",
        "city": "Ashburn",
        "region": "Virginia",
        "country_name": "United States",
        "continent": "América do Norte",
        "continent_code": "NA",
        "region_code": "VA",
        "country": {
            "name": "United States",
            "code": "US",
            "capital": null,
            "flag": {
                "svg": "https://assets.hgbrasil.com/geoip/flags/svg/us.svg",
                "png_16": "https://assets.hgbrasil.com/geoip/flags/16/us.png"
            },
            "calling_code": null
        },
        "latitude": 39.0481,
        "longitude": -77.4728,
        "woeid": null
    },
    "execution_time": 0.04,
    "from_cache": false
}
```
<br>


## 🚀 Contribuição
As contribuições tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito bem-vinda**.

<br>

## ✔️ License
Distribuido sob a licença [MIT](LICENSE). © Daniel Albuquerque