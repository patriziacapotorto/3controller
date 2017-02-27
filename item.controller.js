// CREA UN CONTROLLER PER L'OGGETTO
angular.module('app').controller('ItemCtrl', function ($scope) {

	$scope.titolo = "Armi";

	// CREA UN OGGETTO ARMA E RIEMPILO CON I SEGUENTI DATI
	/*
	 * nome: "Ascia bipenne",
	 * descrizione: "L’ascia bipenne è una scure a due lame, simbolo del potere minoico.",
	 * slots : "3",
	 * image: "http://khazalidgrungron.altervista.org/axes/05.png"
	 */

	$scope.arma = {
		nome: "Ascia bipenne",
		descrizione: "L’ascia bipenne è una scure a due lame, simbolo del potere minoico.",
		slots: "3",
		image: "http://khazalidgrungron.altervista.org/axes/05.png"
	};

	//CREARE UN METODO PER MOSTRARE LA DESCRIZIONE DELL'ARMA
	$scope.mostraDescrizione = function () {
		$scope.descrizione = $scope.arma.descrizione;
		console.log("here");
	};


})