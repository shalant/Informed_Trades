//search button click submit 
var stockSearch = document.querySelector('#searchButton');

$(stockSearch).on('click', function (event) {
    // Preventing the button from trying to submit the form
    console.log('Search Button Clicked');
//     event.preventDefault();
//     // Storing the city name
    ticker = $('#userInput').val().trim();
    console.log(ticker);
//     $('.city-list').prepend('<a href="#" class="list-group-item list-group-item-action city-name">' + cityValue + '</a>');
//     getWeather(cityValue);
//     //when a city name in the list is clicked all of the information on the screen is populated
//   $('.city-name').on('click', function () {
  
//     var cityClicked = $(this).text().trim();
//     getWeather(cityClicked);
});
  