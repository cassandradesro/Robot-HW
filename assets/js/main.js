console.log("Hello World from main.js!");

var doTheThing = function() {
	console.log("do the thing!");
    var colorElement = document.querySelector('[name="color"]');
    var widthElement = document.querySelector('[name="width"]');
    var heightElement = document.querySelector('[name="height"]');
    var colorValue = colorElement.value;
    var widthValue = widthElement.value + "px";
    var heightValue = heightElement.value + "px";
    var bot = document.querySelector(".bot");
    bot.style.width = widthValue;
    bot.style.height = heightValue;
    var botParts = document.querySelectorAll(".head, .torso, .leg, .leg2");
   	for (var i = 0; i < botParts.length; i++) {
     	botParts[i].style.backgroundColor = colorValue;
    }; 
};




