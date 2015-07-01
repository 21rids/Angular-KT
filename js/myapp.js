(function(){ // Wrapping your Javascript in a closure is a good habit!
	
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){ //Notice that controller is attached to (inside) our app
		this.products = gems;
 	});

	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'This is lorem ipsum door sit amet.',
			canPurchase: true,
			soldOut: false // this means - element having this aray value will show
		},
		{
			name: 'Pentagon',
			price: 5,
			description: 'This is lorem ipsum door sit amet.',
			canPurchase: false,
			soldOut: false // this means - element having this aray value will not show
		}
	];

})();