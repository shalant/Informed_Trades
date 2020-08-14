var q = "appl"; // or user input
var fq = "business";
var apiKey = "0xtfC1lrtqDdKvSdw4AW74VGe87ACQAb";
var query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + q + "&fq=" + fq + "&api-key=" + apiKey;
$.get(query, function (data, status) {
    var newsUrl = (data.response.docs[0].web_url)
    console.log(data);
    console.log(data.response.docs.length);
    console.log(data.response.docs[0].web_url);
    for (let i = 0; i < data.response.docs.length; i++){
        console.log("Read This Article: " + data.response.docs[i])
        var newsResult = ("Read This: " + data.response.docs[i].abstract)
        var newsResultDiv = $('<div>').text(newsResult).append('<a href="' + newsUrl + '">Read More...</a>')
        $('#newsArticles').append(newsResultDiv)
    }
});
