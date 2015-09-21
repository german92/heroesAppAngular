angular.module('sandbox.controllers')

.controller('HeroController', ['heroService', function(heroService) {
  var ctrl = this;

  ctrl.superHeroesData = [];
  heroService.superHeroesData().success(function (argument) {
    ctrl.superHeroesData = argument;
  });

} ]);
