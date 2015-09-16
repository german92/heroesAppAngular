angular.module('sandbox.services')

.service('heroService', ['$http', function($http) {
  this.superHeroesData = function() {
    return [{
      heroName: 'Batman',
      realName: 'Bruce Wayne',
      primaryColor: 'Black',
      secondaryColor: 'Yellow',
      powerRating: '10',
      onCall: false
    }, {
      heroName: 'Superman',
      realName: 'Clark Kent',
      primaryColor: 'Red',
      secondaryColor: 'Blue',
      powerRating: '6',
      onCall: false
    }, {
      heroName: 'Harry Potter',
      realName: 'Harry Potter',
      primaryColor: 'Red',
      secondaryColor: 'Orange',
      powerRating: '8',
      onCall: false
    }];
  };


  this.test = function() {

    var headers = {
				'Access-Control-Allow-Origin' : '*',
				'Access-Control-Allow-Methods' : 'GET',
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			};

			return $http({
				method: "GET",
				headers: headers,
	      url: 'http://lit-chamber-2095.herokuapp.com/heros/1'
	    }).success(function(result) {
					console.log("Auth.signin.success!")
					console.log(result);
	    }).error(function(data, status, headers, config) {
					console.log("Auth.signin.error!")
	        console.log(data);
	        console.log(status);
	        console.log(headers);
	        console.log(config);
	    });
    // // Simple GET request example :
    // $http.get('http://lit-chamber-2095.herokuapp.com/heros/1.json').
    // then(function(response) {
    //   console.log(response);
    //   // this callback will be called asynchronously
    //   // when the response is available
    // }, function(response) {
    //   console.log(response);
    //   // called asynchronously if an error occurs
    //   // or server returns response with an error status.
    // });
  };


}]);
