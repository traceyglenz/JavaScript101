// var myButton = document.querySelector("#my-button");
// var myButtonLegend = document.querySelector("#my-button-legend");
// var myButtonClicks = 0;
//
// var goButton = document.querySelector("#go-button");
// var goButtonLegend = document.querySelector("#go-button-legend");
// var goButtonClicks = 0;
//
// function updateButtonLabel(obj, numClicks) {
//
//   var maxClicks = 10;
//   var timeLabel = " times.";
//
//   if (numClicks === 1) {
//     timeLabel = " time.";
//   };
//
//   var message = "This button clicked " + numClicks + timeLabel;
//
//   // var timeLabel = numClicks === 1 ? " time." : " times.";
//
//   if (numClicks > maxClicks) {
//     message - "ENOUGH ALREADY!";
//     obj.style.backgroundColor = "red";
//   };
//
//   obj.innerHTML = message;
//
//   // updateButtonLabel(myButtonLegend, myButtonClicks);
//   // updateButtonLabel(goButtonLegend, goButtonClicks);
//
//
//
//
// myButton.addEventListener("click", function(){
//   myButtonClicks++;
//   console.log(myButtonClicks);
//   updateButtonLabel(myButtonLegend, myButtonClicks);
// });
//
// goButton.addEventListener("click", function(){
//   goButtonClicks++;
//   // console.log(myButtonClicks);
//   updateButtonLabel(goButtonLegend, goButtonClicks);
// });


var upButton = document.querySelector("#up-button");
var countingLegend = document.querySelector("#counting-legend");
var buttonClicks = 0;


function updateLeafLabel(obj, buttonClicks) {

  var maxClicks = 10;


  var message = buttonClicks;

  if (buttonClicks > maxClicks) {
    message = "ENOUGH ALREADY!";
    obj.style.backgroundColor = "red";
  }

  obj.innerHTML = message;

}

upButton.addEventListener("click", function(){
  buttonClicks++;
  console.log(buttonClicks);
  updateLeafLabel(countingLegend, buttonClicks);
});


// goButton.addEventListener("mouseover", function() {
//   alert("You moused over!")


  // window.addEventListener("scroll", function() {
    // alert("Look at the big brain on Brad!");
  // });
//alert(myButton);
//console.log());
