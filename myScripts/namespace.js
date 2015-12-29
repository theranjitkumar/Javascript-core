
var myApp =myApp || {}; // define if doesn't exist
myApp.message = "Helo from myApp namespace message"
$('#msg').text(myApp.message);

var myApp = myApp || {}; // define if doesn't exist
myApp.goodbymsg = "Good bye from myApp namespace";
$('#msg').append('\n'+myApp.goodbymsg);



var myApp =myApp || {}; // define if doesn't exist
myApp.myName = function(name,age){
	this.name = name;
	this.age = age;
	return this.name + "my age is " + this.age;
}

document.getElementById('msg2').innerHTML = myApp.myName('Ranjit kumar',30) ;








