
		// ------MAIN APP-------
		var app = app || {};

		app.name = "myapp";
		app.appDetails = function () {
			return `this is ${this.name}`;
		};

		// --------SUB APP USER---------
		app.user = function (name, city) {
			this.name = name;
			this.city = city;
			this.userDetails = function () {
				return "user name is " + this.name + " and city is " + this.city;
			}
		}
		var u1 = new app.user("ranjit", "gurgaon");

		// --------ANOTHER APP-----------
		var empApp = function (empId, salary) {
			this.empId = empId;
			this.salary = salary;
		}

		empApp.prototype = u1;
		var ea = new empApp(101, 25000);

		empApp.prototype.empSalary = function () {
			console.log(this.name + " employee id " + this.empId + " salary is " + this.salary);
		};

		console.log(u1.userDetails());