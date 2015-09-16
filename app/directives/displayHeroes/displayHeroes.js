angular.module('sandbox.directives')

.directive('displayHeroes', [function() {
  return {
    $scope: {
      data: '=hero'
    },
    restrict: 'E',
    templateUrl: './directives/displayHeroes/displayHeroes.html',
    controller: ['$scope', function($scope) {

      $scope.callSuperHero = function(hero) {
        alert('Your heros real name is... ' + hero.realName);
      };

      $scope.toggleOnCall = function(hero) {
        hero.onCall = !hero.onCall;
      };
    }]
  };
}]);
