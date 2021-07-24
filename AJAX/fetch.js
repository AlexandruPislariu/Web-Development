/*
  PROBLEMS WITH XHR
    1. Ugly syntax
    2. Old
    3. No streaming
*/
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url).then((data) => {
  console.log(data);
});
