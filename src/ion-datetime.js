angular.module('ion-datetime', [])
  .directive('ion-datetime', [function() {
    return {
      restrict: 'E',
      bindToController: {
        ngModel: '='
      },
      scope: {},
      controllerAs: 'vm',
      controller: ['$scope', function($scope) {

      }],
      link: function(scope, element, attrs, controller) {

      }
    }
  }]);
