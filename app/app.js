angular.module('sandbox', ['ui.router','ngAnimate','sandbox.controllers','sandbox.services','sandbox.directives'])

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        $urlRouterProvider.when("/", "/heroes");
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'index.html'
            })
            .state('heroes', {
                url: '/heroes',
                templateUrl: 'views/heroes.html'
            });

    }
]);

angular.module('sandbox.controllers', []);
angular.module('sandbox.services', []);
angular.module('sandbox.directives', []);
