var m = m || {}; // define if doesn't exist
m.postsModule = function(){
	this.name = "Posts Module";
	this.moduleDetail = function(){
		return this.name;
	}
	this.getData = function(){
		var root = 'https://jsonplaceholder.typicode.com';
		$.ajax({
		  url: root + '/posts',
		  method: 'GET'
		}).then(function(data) {
		  console.log(data);
		});
	}
	this.getDataById = function(id){
		var root = 'https://jsonplaceholder.typicode.com';
		$.ajax({
		  url: root + '/posts/'+id,
		  method: 'GET'
		}).then(function(data) {
		  console.log(data);
		});
	}
	this.postData = function(){
		var root = 'https://jsonplaceholder.typicode.com';
		$.ajax({
		  url: root + '/posts',
		  method: 'POST',
		    data: {
		    title: 'foo',
		    body: 'bar',
		    userId: 1
		  }
		}).then(function(data) {
		  console.log(data);
		});
	}
	this.putData = function(id){
		$.ajax('http://jsonplaceholder.typicode.com/posts/'+id, {
		  method: 'PUT',
		  data: {
		    id: 1,
		    title: 'foo',
		    body: 'bar',
		    userId: 1
		  }
		}).then(function(data) {
		  console.log(data);
		});
	}
	this.deleteData = function(id){
		$.ajax('http://jsonplaceholder.typicode.com/posts/'+id, {
		  method: 'DELETE'
		});
	}
}

var postsObj = new m.postsModule();
console.log(postsObj.moduleDetail())
