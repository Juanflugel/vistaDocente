angular.module('CDapp',[
	'ngMaterial',
	'ngMessages',
	'Dirapp',
	'Servapp',
	'ui.router'
	])

.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
	.primaryPalette('indigo')
	.accentPalette('blue');
})

.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/Contenido");
  //
  // Now set up the states
  $stateProvider
  .state('Contenido', {
  	url: "/Contenido",
  	templateUrl: "html/Contenido.html"
  })
  .state('Evaluaciones', {
  	url: "/Evaluaciones",
  	templateUrl: "html/Evaluaciones.html",
      // controller: function($scope) {
      //   $scope.items = ["A", "List", "Of", "Items"];
      // }
  })
  .state('Foro', {
  	url: "/Foro",
  	templateUrl: "html/Contenido.html"
  })
  .state('Estudiantes', {
  	url: "/Estudiantes",
  	templateUrl: "html/bform.html",
        // controller: function($scope) {
        //   $scope.things = ["A", "Set", "Of", "Things"];
        // }
    })
  .state('Trabajos', {
  	url: "/Trabajos",
  	templateUrl: "html/Contenido.html",
        // controller: function($scope) {
        //   $scope.things = ["A", "Set", "Of", "Things"];
        // }
    })
})

.controller('soloDatosCtrl',['$http','$scope','$mdSidenav','$timeout', '$mdBottomSheet','Datos', function ($http,$scope,$mdSidenav,$timeout,$mdBottomSheet,Datos){

	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	$scope.clases =[{curso:'10A', materia:'Matematicas'},{curso:'8B', materia:'Geometria'},{curso:'7E', materia:'Matematicas'},{curso:'8F', materia:'Matematicas'}];

	
	$http.get('js/Json/contenido.json').success(function (data){
		$scope.Logros = data.contenido;
		console.log(data.calificaciones);
		$scope.tabla = {
			datos:data.calificaciones,
			header:data.calificaciones[1]
		};
	});

	

	
}]);
