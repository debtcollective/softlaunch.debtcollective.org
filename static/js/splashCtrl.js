app.controller('splashCtrl', [
  '$scope',
  '$http',
  'util_svc',
  '$document',
  '$timeout',
  '$window',
  function($scope, $http, util_svc, $document, $timeout, $window) {
    $scope.email = null;
    $scope.username = null;
    $scope.location = null;
    $scope.newsletter = true;
    $scope.debtType = null;
    $scope.amount = null;
    $scope.formSubmitted = false;
    $scope.focused = false;

    $scope.startShowingFormLoc = 4300;

    $http.get('/static/js/points.json').then(function(resp) {
      $scope.cities = resp.data;
    });

    $scope.bannerFadeInTimeout = false;
    $timeout(function() {
      $scope.bannerFadeInTimeout = true;
    }, 500);

    $scope.scrollClick = function() {
      var someElement = angular.element(document.getElementById('mapdiv'));
      $document.scrollToElement(someElement, 0, 18000);
    };
  },
]);
