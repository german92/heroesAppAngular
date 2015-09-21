angular.module('sandbox.services')

.service('heroService', ['$http', function($http) {
  this.superHeroesData = function() {

    return $http({
      method: "GET",
      headers: {
        'Content-type': 'application/json',
        'Acept': 'application/json'
      },
      // url: 'http://lit-chamber-2095.herokuapp.com/heros/1'
      url: 'http://localhost:3000/heros.json'
    });
  };
}]);


// .success(function(result) {
//     // console.log("Auth.signin.success!")
//     console.log(result);
// }).error(function(data, status, headers, config) {
//     console.log("Auth.signin.error!");
//     console.log(data);
//     console.log(status);
//     console.log(headers);
//     console.log(config);
// });



// return [{
//   heroName: 'Batman',
//   realName: 'Bruce Wayne',
//   primaryColor: 'Black',
//   secondaryColor: 'Yellow',
//   powerRating: '10',
//   onCall: false
// }, {
//   heroName: 'Superman',
//   realName: 'Clark Kent',
//   primaryColor: 'Red',
//   secondaryColor: 'Blue',
//   powerRating: '6',
//   onCall: false
// }, {
//   heroName: 'Harry Potter',
//   realName: 'Harry Potter',
//   primaryColor: 'Red',
//   secondaryColor: 'Orange',
//   powerRating: '8',
//   onCall: false
// }];
