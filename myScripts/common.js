
var myApp =myApp || {}; // define if doesn't exist
myApp.message = "Helo from myApp namespace message"
$('#msg').text(myApp.message);

var myApp = myApp || {}; // define if doesn't exist
myApp.goodbymsg = "Good bye from myApp namespace";
$('#msg').append('\n'+myApp.goodbymsg);