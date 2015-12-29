(function () { 
    console.log('I am inside an immediate function');
}());


(function () {    
var returnedValue = (function (message) {
    return message;
}('Hello Ranjit'));
console.log(returnedValue); // will write hello in the console
}());


(function(){
console.log("i am clled imadiate function or self invoking function or self excuting function");

}());