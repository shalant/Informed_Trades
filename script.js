

var pixKey = "255459-9eae1a54a7e9fbd9b4f2551a7";
var pixURL ="https://pixabay.com/api/?key="+pixKey+"&q=yellow+flowers&image_type=photo";


var stockKey = "7YVB65RY76U58ABJ";
var stockURL = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&interval=5min&apikey="+stockKey;

// var newsKey = "";
var newsURL = "http://newsapi.org/v2/everything?q=bitcoin&from=2020-07-11&sortBy=publishedAt&apiKey=9b9a0bacf345445a8ac39fab1c973f29";


function stocks(){


    $.ajax({
     url: stockURL,
     method: "GET"
   }).then(function(response) {
     console.log(response);

   });
}

function pix(){

    $.ajax({
     url: pixURL,
     method: "GET"
   }).then(function(response) {
     console.log(response);

   });
}

function news(){

 
   $.ajax({
    url: newsURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
}

stocks();
pix();
news();
