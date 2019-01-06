/*
	Module Design Pattern Example
*/
var app = (function(){
	var id = 101;
	var name = 'ranjit';
	var city = 'Gurgaon';

	var sayWellcome = function (name){
		var str = 'Welcome.Mr. '+name;
		console.log(str);
	}

	var sayHello = function (){
		var str = 'Hello there...!'
		console.log(str);
	}

	var sayByee = function (){
		var str = 'Good byee...!'
		console.log(str);
	}

	return {
		welcome: sayWellcome,
		employee: {
			empId: id,
			empName: name,
			empCity: city,
			hello: sayHello
		},
		user: {
			uId: id,
			uName: name,
			uCity: city,
		},
		bye:sayByee
	}
})();
