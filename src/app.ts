const axios = require('axios')

const baseUrl = 'https://api.hgbrasil.com'

/**
 * Retorna a previsão do tempo com base na api da https://hgbrasil.com
 * @param key chave gerada no site da hgbrasil
 * @param city cidade da previsão do tempo, ex: Frecheirinha
 * @param state sigla do estado da cidade, ex: CE
 * @returns 
 */
function weather(key:string, city:string, state:string){
  const url = `${baseUrl}/weather?format=json-cors`
  
  var response = axios.get(`${url}&key=${key}&city_name=${city},${state}`)
    .then(function (response: any) {
      return response.data
    })
    .catch(function (error:any) {
      return error.status
    })
    return response
}

/**
 * Retorna as cotações de moedas com base na api da https://hgbrasil.com
 */
function financeCurrency() {
  const url = `${baseUrl}/finance`

  var response = axios.get(url)
    .then(function (response: any) {
      return response.data
    })
    .catch(function (error: any) {
      return error.status
    })
  return response
}

/**
 * Retorna as ações listadas na IBOVESPA
 * 
 * @param key chave gerada no site da hgbrasil
 * @param symbol ações da IBOVESPA para listar
 * 
 * Obs.: No plano gratuito da hgbrasil só é possível passar 1 ação por vez,
 * no plano pago é permitido passar mais de 1.
 */
function financeIbovespa(key: string, symbol:string) {
  const url = `${baseUrl}/finance?symbol`

  var response = axios.get(`${url}&key=${key}&symbol=${symbol}`)
    .then(function (response: any) {
      return response.data
    })
    .catch(function (error: any) {
      return error.status
    })
  return response
}

/**
 * Retorna os dados de localização com base na api de GeoIP da www.hgbrasil.com.br
 * 
 * @param key chave gerada no site da hgbrasil
 * @param address neste parâmetro pode ser passado 'ip_do_usuario' ou 
 * 'remote' para pegar o IP automáticamente
 * 
 */
function geoIP(key: string, address: string) {
  const url = `${baseUrl}/geoip?symbol`

  var response = axios.get(`${url}&key=${key}&address=${address}`)
    .then(function (response: any) {
      return response.data
    })
    .catch(function (error: any) {
      return error.status
    })
  return response
}


module.exports = {
  weather,
  financeCurrency,
  financeIbovespa,
  geoIP
}
