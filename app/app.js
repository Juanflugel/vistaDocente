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
     
  })
  .state('Foro', {
  	url: "/Foro",
  	templateUrl: "html/Contenido.html"
  })
  .state('Estudiantes', {
  	url: "/Estudiantes",
  	templateUrl: "html/bform.html",
       
    })
  .state('Trabajos', {
  	url: "/Trabajos",
  	templateUrl: "html/Contenido.html",
       
    })
})

.controller('soloDatosCtrl',['$http','$scope','$mdSidenav','$timeout', '$mdBottomSheet','Datos', function ($http,$scope,$mdSidenav,$timeout,$mdBottomSheet,Datos){

	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	$scope.clases =[
                  {curso:'10A', materia:'Matematicas'},
                  {curso:'8B', materia:'Geometria'},
                  {curso:'7E', materia:'Matematicas'},
                  {curso:'8F', materia:'Matematicas'}
                ];

	
	$http.get('js/Json/contenido.json').success(function (data){
		$scope.Logros = data.contenido;
    $scope.Evaluaciones = data.calificaciones;
    
		console.log(data.calificaciones);
    var control = function(){
      var e = $scope.Evaluaciones;
      var tp =[];

      for(i=0 ; i<e.length ; i++){
        for( var key in e[i]){
          if(key=="ponderacion"){
            tp.push(e[i][key]);
          }
        }
      }
      console.log(tp);
      var total = 0;
      $.each(tp,function() {
        total += this;
      });
      console.log(total);
      $scope.total=total;
    };
    control();
		
	});

  $http.get('js/Json/estudiantes.json').success(function (data){
    $scope.Estudiantes = data;
    console.log($scope.Estudiantes);
  });

  $scope.edit = function(examen){
    $scope.nExamen = examen;
  };

  $scope.valor = function(key){
    console.log(key);
  };

	

	
}]);
