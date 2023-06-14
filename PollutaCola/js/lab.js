// lab.js - Accepts and processes user input in a certain way by some means of computation.
// Author: Edward Oh
// Date: 5/23/2023


var presser = document.getElementById("button");


function random1to5() {
  return Math.floor(Math.random() * 5);
}

var infoarray = ["The Coca-Cola company, despite their efforts to appear otherwise, has gained considerable notoriety as one of the worst plastic polluters in the world.</br>They are known to create as many as 200,000 bottles a minute, or 3 millions tons of plastic a year.",
"Coca-Cola's usage of plastic has been impacted by Coca-Cola's products, primarily their plastic products. Their single-use plastic bottles has resulted in residents of areas such as Samoa reporting a tremendous increase of plastic pollution in the area they live in.",
"Aluminum is known to be far more recyclable than single use plastic, being able to be recycled endlessly and having great value in the scrap market.</br>Plastic can often only be recycled once and is generally valued negatively; that is, instead of someone paying to obtain it, people generally have to be paid to obtain it instead.</br>Despite this, the Coca-Cola company seems very reluctant to shift from plastic bottles to aluminum cans for their beverages, presumably for manufacturing cost reasons.",
"One possible reason Coca-Cola uses plastic so heavily for their beverages is because consumer demand prefers convenience, and plastic is generally convenient, light, and inexpensive. This is perhaps why Coca Cola markets plastic products so heavily.",
"Coca-Cola, along with Nestlé and PepsiCo, are the top plastic polluters according to a report from Break Free From Plastic. Effects of plastic can have negative environmental ramifications, such as being left in the ocean as hazards for aquatic and marine life, and being left in terrestrial areas where they take an extremely long time to decompose, if they can even decompose at all."];

presser.addEventListener("click", function() {
    document.getElementById("random-box").innerHTML = infoarray[random1to5()];
})
