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
			canPurchase: false,
			soldOut: false, // this means - element having this aray value will show
			//images: [
				//{full: 'https://www.google.co.in/images/srpr/logo11w.png', thumb: 'https://www.google.co.in/images/srpr/logo11w.png', alt:'Google'}
			//]
		},
		{
			name: 'Pentagon',
			price: 5,
			description: 'This is lorem ipsum door sit amet.',
			canPurchase: false,
			soldOut: false // this means - element having this aray value will not show
		}
	];


	app.controller('PanelController', function(){ //Notice that controller is attached to (inside) our app
		this.tabCont = tabData;
		this.tab = 1; // initialaize first tab active
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
 	});

 	var tabData = [
	 	{
	 		heading: "India Got Prize!!",
	 		price: 2,
	 		desc: 'Lorem ipsum dolor sit amet.'
	 	},
	 	{
	 		heading: "Lenskart",
	 		price: 6,
	 		desc: 'This is a demo text. Lorem ipsum dolor sit amet.'
	 	},
	 	{
	 		heading: "Facebook",
	 		price: 8,
	 		desc: 'Aurum speca dolor amet aura. Lorem ipsum dolor sit amet.'
	 	}
 	]

 	//   app.controller('GalleryController', function(){
  // 	this.current = 0;
  //   this.setCurrent = function(myVal){
  //     this.current = myVal || 0;
  //   };

  // });

})();