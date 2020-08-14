
// changes color of current price
if (price > open) {
   $("#currentPrice").addClass("up");
} else {
   $("#currentPrice").addClass("down");
}

// .toFixed(2)