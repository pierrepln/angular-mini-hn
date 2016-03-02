'use strict';

/**
 * @ngdoc function
 * @name miniHackerNewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the miniHackerNewsApp
 */

 // ##########################################
 // - Getting array of ids ( $http.get )
 //   ##response -> ids
 //   - for each id < 30
 //     - get article with the id ( $http.get )
 //       ##response -> article
 //       - store article in a ArticleList
 // - Print the ArticleList
 // ##########################################

angular.module('miniHackerNewsApp')
  .controller('MainCtrl', function ($scope, $http) {
    //
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.loading = true;
    $scope.stories = [];

    $http.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(function(response_ids) {
      //
      for (var i = 0; i < 30; i++) {
        //
        $http.get('https://hacker-news.firebaseio.com/v0/item/'+ response_ids.data[i] +'.json')
        .then(function(response_story){
          $scope.stories.push(response_story.data);
          $scope.loading = false;
        }, function(err) {
          console.log(err);
          $scope.err = err.status;
          $scope.loading = false;
        })
      // end for
      }
    //end then
    }, function(err) {
      console.log(err);
      $scope.err = err.status;
      $scope.loading = false;
    })
  // end ctrl
  });
