'use strict';

angular.module('Servapp', ['ngResource'])
.factory('Phone', ['$resource', function($resource){
    return $resource('json/:asesorId.json', {}, {
      query: {method:'GET', params:{asesorId:'asesor'}, isArray:true}
    });
  }])

.factory('CdeList', ['$resource', function($resource){
    return $resource(location.origin +'/login/cdelist', {}, {
      query: {method:'GET', isArray:true}
    });
}])

.factory('Rac', ['$resource', function($resource){
	return $resource(location.origin + '/admin/rac', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
}])
.factory('Registro', ['$resource', function($resource){
	return $resource(location.origin + '/admin/registro', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
}]);