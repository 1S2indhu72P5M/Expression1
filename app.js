(function (){
'use Strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Sindhu";
  $scope.stateOfBeing="angre";
  $scope.sayMessage = function () {
    return "Sindhu likes to eat healthy snacks at night!";
  };

$scope.feedSindhu = function () {
  $scope.stateOfBeing = "feed";
};
}
})();
