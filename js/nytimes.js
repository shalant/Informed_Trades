var q = "appl"; // or user input
var fq = "business";
var apiKey = "0xtfC1lrtqDdKvSdw4AW74VGe87ACQAb";
var query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + q + "&fq=" + fq + "&api-key=" + apiKey;
$.get(query, function (data, status) {
    console.log(data);
    console.log(data.response.docs[0])
});

var mykey
var queryPicsURL = "https://autocomplete.clearbit.com/v1/companies/suggest?query=:starbucks"
$.ajax({
    url: queryPicsURL,
    method: "GET",
}).then(function (res) {
    console.log(res);
    console.log(res.Runtime);
});