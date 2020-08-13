var ticker = "SBUX";
//var queryURL = "https://www.goodreads.com/search/?key=6BGr7oVjksnowvgdRzsg&q=" + title;
var queryURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + ticker + "&apikey=1R7O28U5BHPJZSE7"
$.ajax({
    url: queryURL,
    method: "GET",
}).then(function (res) {
    console.log(res);
    console.log(res['Global Quote']['01. symbol']);
    console.log("open: " + res['Global Quote']['02. open']);
    console.log("high: " + res['Global Quote']['03. high']);
    console.log("low: " + res['Global Quote']['04. low']);
    console.log("last trading day: " + res['Global Quote']['07. latest trading day']);
})
