// CREA UN CONTROLLER PER L'OGGETTO
angular.module('app').controller('Itemcontroller', function($scope){
  $scope.titolo = "Titolo della mia app";
  $scope.listaArmi =[
    {
      id : "it01",
      nome: 'Ascia bipenne',
     descrizione: 'L’ascia bipenne è una scure a due lame, simbolo del potere minoico.',
     slots:'3',
     image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2fHwUVElm-OEg9CVEAfNNI5JzZaDdIwp3rEcfFK2cjF0HIMyhUDIbAPzI'
    },
  {
    id : "it02",
    nome: 'Spada',
    descrizione: 'La spada è un \'arma molto potente',
    slots:'5',
    image:'http://www.pmsoftair.com/ImmaginiArt/Spada%20Templare%20Oro%20Ridot.jpg'
  }
];

  $scope.elimina = function(id,indice){
  $scope.listaArmi.splice(indice,1);

};

 $scope.listanumeri = [1,2,3];

});
//
