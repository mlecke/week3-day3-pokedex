angular.module('pokedex')
  .controller('pokeCtrl', function ($scope, pokeServ) {

//manipulate api data here
$scope.pokeData = function(num) {
  pokeServ.getPokemon(num).then(function(response){
    console.log(response);
    $scope.pokepic = response.sprites.front_shiny;
  });
};

  });
