var ticker = "SBUX";
var mykey = "1R7O28U5BHPJZSE7"
//var queryURL = "https://www.goodreads.com/search/?key=6BGr7oVjksnowvgdRzsg&q=" + title;
var queryURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + ticker + "&apikey=" + mykey
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (res) {
  console.log(res);
  var dataPoint = $('<div>')
  var dataPointPrice = $('<div>')
  var symbol = $('<p>').text("Ticker: " + res['Global Quote']['01. symbol']);
  console.log(res['Global Quote']['01. symbol']);
  var open = $('<p>').text("Open: " + res['Global Quote']['02. open']);
  console.log("open: " + res['Global Quote']['02. open']);
  var high = dataPoint.text(("High: " + res['Global Quote']['03. high']));
  console.log("high: " + res['Global Quote']['03. high']);
  var low = $('<p>').text("Low: " + res['Global Quote']['04. low']);
  console.log("price: " + res['Global Quote']['03. high']);
  var price = $('<p>').text(res['Global Quote']['04. low']);
  console.log("current price: " + res['Global Quote']['05. price']);
  var lastTradingDay = $('<p>').text("Last Trading Day: " + res['Global Quote']['07. latest trading day']);
  console.log("last trading day: " + res['Global Quote']['07. latest trading day']);
  dataPoint.append(symbol,open,high,low,lastTradingDay)
  dataPointPrice.append(price)
  $('#data').append(dataPoint)
  $('#currentPrice').append(dataPointPrice)
});

var ticker = "SBUX";
var queryCompanyNameURL = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + ticker + "&interval=5min&apikey=" + mykey
$.ajax({
  url: queryCompanyNameURL,
  method: "GET",
}).then(function (res) {
  console.log(res.Name);
  var companyName = (res.Name)
  var companyNameDiv = $('<div>').text(companyName)
  $('#companyName').append(companyNameDiv)
});