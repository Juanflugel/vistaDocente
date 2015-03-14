angular.module('Dirapp',[])

.directive('aCordeon', function (){
	return{
		restrict: 'E',      
		templateUrl:'html/acordeon.html',
		controller:['$scope', function ($scope){
			$scope.Periodos =[
					  {periodo:'Primer Perido',targetid:'primero',expanded:true,id:'1'},
	                  {periodo:'Segundo Perido',targetid:'segundo',expanded:false,id:'2'},
	                  {periodo:'Tercer Perido',targetid:'tercero',expanded:false,id:'3'},
	                  {periodo:'Cuarto Perido',targetid:'cuarto',expanded:false,id:'4'}
	                  ];
		}]

	};

});