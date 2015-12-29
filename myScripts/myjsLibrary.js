(function(){
console.log("i am clled imadiate function or self invoking function or self excuting function");
}());

(function () {    
var returnedValue = (function (message) {
    return message;
}('Hello Ranjit'));
console.log(returnedValue); // will write hello in the console
}());


(function (ns) {
    // Your library comes here
    console.log("start here from u writing your own js library");

	var person = {  //javascript object
	    firstName : "Ranjit",
	    lastName  : "Kumar",
	    age       : 30,
	    about  : "Ranjit kumar is UI-Devloper"
	};
	console.log(person.about);   

    var myName = function(name){//constructor javascript object
    	this.name = name;
    	return this.name;
    }
    console.log(myName('Ranjit kumar maurya'));

}(this.ns = this.ns || {}));