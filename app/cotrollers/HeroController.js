angular.module('sandbox.controllers')

.controller('HeroController', [ 'heroService', function(heroService) {
  this.superHeroesData = heroService.superHeroesData();
  var a = heroService.test();

} ]);
