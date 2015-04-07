angular.module('CDapp', [
	'ngMaterial',
	'Dirapp',
	'ui.router'
	])
.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('top')
    .primaryPalette('grey', {
      'default': '100', // by default use shade 400 from the gray palette for primary intentions
      'hue-1': '800', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '700', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': '300' // use shade A100 for the <code>md-hue-3</code> class
    })
    .accentPalette('blue');
})
.config(function($stateProvider, $urlRouterProvider) {

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/Docente");
      //
    // Now set up the states
    $stateProvider
    // Rol de Doncente que cuenta con un parametro para cada clase
    .state('Docente',{
    	url:"/Docente/:idclase",
    	templateUrl:"html/todo.html",
    	controller: function($stateParams){
    		console.log($stateParams);
    	}
    })

    // estados anidaddos a Docente

    .state('Docente.Contenido', {
    	url: "/Contenido",
    	template:"<a-cordeon></a-cordeon>"
    })
    .state('Docente.Foro', {
    	url: "/Foro",
    	template: "<h1>Espacio para el Foro</h1>"
    })
    .state('Docente.Estudiantes', {
    	url: "/Estudiantes",
    	templateUrl: "html/Estudiantes.html",
    	controller:'AppCtrl'

    })
    .state('Docente.Trabajos', {
    	url: "/Trabajos",
    	template: "<h2> espacio para trabajos</h2>",
    })

})




.controller('soloDatosCtrl',['$http','$scope','$mdSidenav','$timeout', '$mdBottomSheet', function ($http,$scope,$mdSidenav,$timeout,$mdBottomSheet){

    // $state.go('Docente.Estudiantes');

    $scope.toggleSidenav = function(menuId) {
    	$mdSidenav(menuId).toggle();
    };

    $scope.clases =[
    {curso:'10A', materia:'Matematicas',state:'10A'},
    {curso:'8B', materia:'Geometria',state:'8B'},
    {curso:'7E', materia:'Matematicas',state:'7E'},
    {curso:'8F', materia:'Matematicas',state:'8F'}
    ];

    $http.get('js/Json/estudiantes1.json').success(function (data){
    	$scope.estudiantes = data;
    });

    $http.get('js/Json/contenido.json').success(function (data){

    	$scope.Logros = data.contenido;
    	$scope.Evaluaciones = data.calificaciones;

    	console.log(data.calificaciones);
        // var control = function(){
        //     var e = $scope.Evaluaciones;
        //     var tp =[];

        //     for(i=0 ; i<e.length ; i++){
        //         for( var key in e[i]){
        //             if(key=="ponderacion"){
        //                 tp.push(e[i][key]);
        //             }
        //         }
        //     }
        //     console.log(tp);
        //     var total = 0;
        //     $.each(tp,function() {
        //         total += this;
        //     });
        //     console.log(total);
        //     $scope.total=total;
        // };
        // control();
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

    $scope.showLogro = function(Logro){
    	$scope.texto=Logro;

    };
}])
.controller('AppCtrl', function($scope) {
	$scope.todos = [
	{
		face : 'http://lorempixel.com/50/50/people',
		what: 'Brunch this weekend?',
		who: 'Min Li Chan',
		when: '3:08PM',
		notes: " I'll be in your neighborhood doing errands"
	},
	{
		face : 'http://lorempixel.com/50/50/people',
		what: 'Brunch this weekend?',
		who: 'Min Li Chan',
		when: '3:08PM',
		notes: " I'll be in your neighborhood doing errands"
	},
	{
		face : 'http://lorempixel.com/50/50/people',
		what: 'Brunch this weekend?',
		who: 'Min Li Chan',
		when: '3:08PM',
		notes: " I'll be in your neighborhood doing errands"
	},
	{
		face : 'http://lorempixel.com/50/50/people',
		what: 'Brunch this weekend?',
		who: 'Min Li Chan',
		when: '3:08PM',
		notes: " I'll be in your neighborhood doing errands"
	},
	{
		face : 'http://lorempixel.com/50/50/people',
		what: 'Brunch this weekend?',
		who: 'Min Li Chan',
		when: '3:08PM',
		notes: " I'll be in your neighborhood doing errands"
	},
	];
});
