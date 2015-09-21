angular.module('sandbox.directives')

.directive('displayHeroes', [function() {
  return {
    $scope: {
      data: '=hero'
    },
    restrict: 'E',
    templateUrl: './directives/displayHeroes/displayHeroes.html',
    controller: ['$scope', function($scope) {
      $scope.toggleOnCall = function(hero) {
        hero.onCall = !hero.onCall;
      };
    }]
  };
}]);

// $scope.callSuperHero = function(hero) {
//   alert('Your heros real name is... ' + hero.realName);
// };


// $scope.$watch('hero', function(newValue, oldValue) {
//   console.log(newValue, oldValue);
// });
