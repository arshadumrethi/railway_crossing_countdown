// Set the date we're counting down to

var schedule = ["Sep 21, 2018 21:15:00",
                "Sep 21, 2018 21:55:00",
                "Sep 21, 2018 22:20:00",
                "Sep 21, 2018 22:50:00",
                "Sep 21, 2018 23:15:00",
                "Sep 21, 2018 23:55:00",
                "Sep 22, 2018 01:19:00",
                "Sep 22, 2018 02:18:00"]


// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  //Initialize i
  var i = 0;

  //Get Next Train time.
  var nextTrain = new Date(schedule[i]).getTime();

  // Find the distance between now and the next train.
  var distance = nextTrain - now;

  while (distance < 0) {
   i++;
   nextTrain = new Date(schedule[i]).getTime();
   distance = nextTrain - now;
   var toReach = distance - "90000";
  
 }

  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var hours2 = Math.floor((toReach % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((toReach % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((toReach % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

  document.getElementById("demo2").innerHTML = hours2 + "h "
  + minutes2 + "m " + seconds2 + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);