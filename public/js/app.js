const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
  this.name = null;
  this.conviction = null;
  this.sentence = null;
  this.image = null;
  this.indexOfEditFormToShow = null;

  const controller = this;

  this.createJailbird = function(){
    $http({
      method: 'POST',
      url: '/jailbirds',
      data: {
        name: this.name,
        conviction: this.conviction,
        sentence: this.sentence,
        image: this.image
      }
    }).then(
      function(response){
        controller.getJailbirds();
        console.log(response);
      },
      function(error){
        console.log(error);
      }
    )
  }

  this.deleteJailbird = function(jailbird){
    $http({
      method: 'DELETE',
      url: '/jailbirds/' + jailbird._id
    }).then(
      function(){

        controller.getJailbirds();
      },
      function(error){

      }
    )
  }

  this.editJailbird = function(jailbird){
    $http({
      method: 'PUT',
      url: '/jailbirds/' + jailbird._id,
      data: {
        name: this.updatedName,
        conviction: this.updatedConviction,
        sentence: this.updatedSentence,
        image: this.updatedImage
      }
    }).then(
      function(response){
        controller.indexOfEditFormToShow = null;
        console.log(response);
        controller.getJailbirds();
      },
      function(error){
        console.log(error);
      }
    )
  }

  this.getJailbirds = function(){
    $http({
      method: 'GET',
      url: '/jailbirds'
    }).then(
      function(response){
        console.log(this);
        console.log(controller);
        console.log(response);
        controller.jailbirds = response.data;
      },
      function(error){
        console.log(error);
      }
    )
  }
  this.getJailbirds();
}]);
