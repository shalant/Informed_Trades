//set global variables for use later
var stockSearch = document.querySelector('#searchButton');
var fq = "business";
var nytApiKey = "0xtfC1lrtqDdKvSdw4AW74VGe87ACQAb";
var alphaAPIKey = "1R7O28U5BHPJZSE7";

//API call for alphavantage
function getStockInfo(ticker) {
  var queryURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + ticker + "&apikey=" + alphaAPIKey
 
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
      $('#currentPrice').empty();
      $('#data').empty();
      $('#companyName').empty();
      $('#arrow').empty()

      console.log(res);
        var dataPoint = $('<div>')
        var dataPointPrice = $('<div>')
        var symbol = $('<p>').html("Ticker: " + res['Global Quote']['01. symbol']);
        console.log(res['Global Quote']['01. symbol']);
        var openval = (res['Global Quote']['02. open']).slice(0,6);
        var open = $('<p>').html("Open: $" + openval);
        console.log("open: " + res['Global Quote']['02. open']);
        var highval = (res['Global Quote']['03. high']).slice(0,6);
        var high = $('<p>').html("High: $" + highval);
        console.log("high: " + res['Global Quote']['03. high']);
        var lowval = (res['Global Quote']['04. low']).slice(0,6)
        var low = $('<p>').html("Low: $" + lowval);
        console.log("price: " + res['Global Quote']['04. low']);
        var priceval = (res['Global Quote']['05. price']).slice(0,6);
        var price = $('<p>').text("$" + priceval);
        console.log(priceval)
        console.log("current price: " + res['Global Quote']['05. price']);
        var lastTradingDay = $('<p>').html("Last Trading Day: " + res['Global Quote']['07. latest trading day']);
        console.log("last trading day: " + res['Global Quote']['07. latest trading day']);
        dataPoint.append(symbol,open,high,low,lastTradingDay);
        dataPointPrice.append(price);
        $('#data').append(dataPoint);
        $('#currentPrice').append(dataPointPrice);
        if ( priceval > openval) {
          $("#currentPrice").addClass("up");
          $("#arrow").append('<img id="greenArrow" src="assets/upArrow.png"/>');
       } else {
          $("#currentPrice").addClass("down");
          $("#arrow").append('<img id="redArrow" src="assets/downArrow.png"/>');
       }

    var queryCompanyNameURL = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=" + ticker + "&interval=5min&apikey=" + alphaAPIKey
    
    $.ajax({
        url: queryCompanyNameURL,
        method: "GET",
    }).then(function (res) {
        console.log(res.Name);
        var companyName = (res.Name) 
        var companyNameDiv = $('<p>').text(companyName)
        $('#companyName').append(companyNameDiv)
    });
});
}

//nytimes API call
function getStockNews(ticker){
  var query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + ticker + "&fq=" + fq + "&api-key=" + nytApiKey;
  $.get(query, function (data, status) {
      $('#newsArticles').empty();
      var newsUrl = (data.response.docs[0].web_url)
      for (let i = 0; i < 5; i++){
          var newsResult = (data.response.docs[i].abstract)
          var headline = (data.response.docs[i].headline.main)
          console.log(headline)
          // Creating news articles
          var newsresultDiv = $('<h3>').text(headline)
          var newsResultP = $('<p class="newsArticle">').text(newsResult).append('<a href="' + newsUrl + '"> Read More...</a>')
          $('#newsArticles').append(newsresultDiv, newsResultP)
      }
  });
}

$(stockSearch).on('click', function (event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Getting ticker symbol from search input field
  var ticker = $('#userInput').val().trim();
  $("#arrow").empty();
  getStockInfo(ticker);
  getStockNews(ticker);
});