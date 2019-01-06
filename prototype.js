var protoTypeApp = protoTypeApp || {};

// constructor function
protoTypeApp.users = function (id, name, city) {
	this.id = id;
	this.name = name;
	this.city = city;
}

protoTypeApp.users.prototype.userInfo = function() {
	return "Mr. "+this.name+" from "+this.city;
};

var adminUser = new protoTypeApp.users("101","Admin","Delhi");
var empUser = new protoTypeApp.users("101","Employee","Patna");

console.log(empUser.userInfo());