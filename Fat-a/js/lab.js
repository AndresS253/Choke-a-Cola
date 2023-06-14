// lab.js - Accepts and processes user input in a certain way by some means of computation.
// Author: Edward Oh
// Date: 5/23/2023

console.log("fuck you");

var presser = document.getElementById("button");

presser.addEventListener("mouseover", function() {
    document.getElementById("random-image").innerHTML = '<img src="img/bottle2.png">';
})

presser.addEventListener("mouseout", function() {
    document.getElementById("random-image").innerHTML = '<img src="img/bottle1.png">';
})

function random1to5() {
  return Math.floor(Math.random() * 5);
}

var infoarray = ["The average child drinks over 500 cans of soda a year.",
"Soda leaches calcium from bones, an alarming fact since osteoporosis is reaching epidemic proportions.",
"Sugary beverages like soda are linked to a long list of adverse health effects, starting with obesity, poor blood sugar control and diabetes.",
"The bacteria in your mouth feed on the sugars in soda, producing acid that attacks your teeth for about 20 minutes after each sip.",
"Research suggests that children who consume soda tend to have slightly higher scores on measures of aggression than do children who do not drink soda beverages.", "Soda is often high in empty calories and sugar, which may contribute to childhood obesity and increase the risk of type 2 diabetes."];

presser.addEventListener("click", function() {
    document.getElementById("random-image").innerHTML = '<img src="img/bottle3.png">';
    document.getElementById("random-box").innerHTML = infoarray[random1to5()];
})
