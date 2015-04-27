'use strict';

angular.module('myApp.investment_calc', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/investment_calc', {
    templateUrl: 'investment_calc/investment_calc.html',
    controller: 'InvestmentCalcCtrl'
  });
}])
		.controller('InvestmentCalcCtrl', ['$scope', function($scope) {

			//Create main variables

			$scope.investedAmount = parseFloat('');

			$scope.investmentInterest = parseFloat('');

			$scope.investmentGains = parseFloat('');

			$scope.roiAmount = parseFloat('');


			//create variables for ngShow

			$scope.returnsShow = false;
			$scope.roiShow = false;


			//Main module functions - Shows/Hides by returning true,
			//as well as calculate the necessary information to display the Gain and ROI

			$scope.investmentGainsCalc = function(){
				var totalPlusInterest = $scope.investedAmount * $scope.investmentInterest;
		    $scope.investmentGains =  totalPlusInterest + $scope.investedAmount;
				$scope.returnsShow = true;
			};

			$scope.totalRoi = function(){
				$scope.roiAmount = ($scope.investmentGains - $scope.investedAmount) / $scope.investedAmount * 100;
				$scope.roiShow = true;
			};

		}]);

