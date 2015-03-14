angular.module('CDapp',[
	'ngMaterial',
	'ngMessages',
	'Dirapp',
	'ui.router'
	])

.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
	.primaryPalette('indigo')
	.accentPalette('blue');
})

.controller('soloDatosCtrl',['$scope','$mdSidenav','$timeout', '$mdBottomSheet', function ($scope,$mdSidenav,$timeout, $mdBottomSheet){

	$scope.toggleSidenav = function(menuId) {
		$mdSidenav(menuId).toggle();
	};

	










	$scope.clases =[{curso:'10A', materia:'Matematicas'},{curso:'8B', materia:'Geometria'},{curso:'7E', materia:'Matematicas'},{curso:'8F', materia:'Matematicas'}];

	$scope.Logros =[
	{logro:'El gobierno de Colombia y las FARC anunciaron este sábado de forma conjunta un acuerdo para remover minas antipersonales en varias zonas del país',periodo:'1',peso:7,evaluaciones:2},
	{logro:'También dijo que se levantarán temporalmente las órdenes de captura que pesan sobre los guerrilleros que participen de este plan.',periodo:'2',peso:8,evaluaciones:2},
	{logro:'Todavía no se conoce un cronograma de implentación ni en qué lugares del territorio colombiano se realizará el trabajo de desminado.',periodo:'4',peso:10,evaluaciones:2},
	{logro:'El gobierno y las FARC señalaron en un comunicado emitido desde la capital cubana que establecerán un grupo técnico para definir esos puntos.',periodo:'3',peso:9,evaluaciones:3},
	{logro:'El gobierno de Colombia y las FARC anunciaron este sábado de forma conjunta un acuerdo para remover minas antipersonales en varias zonas del país',periodo:'1',peso:7,evaluaciones:2},
	{logro:'También dijo que se levantarán temporalmente las órdenes de captura que pesan sobre los guerrilleros que participen de este plan.',periodo:'2',peso:8,evaluaciones:2},
	{logro:'Todavía no se conoce un cronograma de implentación ni en qué lugares del territorio colombiano se realizará el trabajo de desminado.',periodo:'1',peso:10,evaluaciones:2},
	{logro:'El gobierno y las FARC señalaron en un comunicado emitido desde la capital cubana que establecerán un grupo técnico para definir esos puntos.',periodo:'3',peso:9,evaluaciones:3}

	];

	
}]);
