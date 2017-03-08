function CoffeeMachine() {
	this.products = [//создает массив всех продуктов
		{name: "Cappuchino",	id: "cappuchino", price: 0.6, img: "img/cappuchino.png"},
		{name: "Americano", id: "americano", price: 0.7, img: "img/cappuchino.png"},
		{name: "Espresso", id: "espresso", price: 0.9, img: "img/cappuchino.png"},
		{name: "Latte", id: "latte", price: 1.2, img: "img/cappuchino.png"},
		{name: "Mochachino", id: "mochachino", price: 1.4, img: "img/cappuchino.png"},
		{name: "Macchiato", id: "macchiato", price: 1.7, img: "img/cappuchino.png"},
		{name: "Mokko", id: "moka", price: 4.0, img: "img/cappuchino.png"},
		{name: "Black coffee", id: "black-coffee", price: 2.0, img: "img/cappuchino.png"}
	];

	this.numberOfCups = 1;// задает количество чашек по умолчанию
	this.sugarAmount = 'little&nbsp;sweet';// количество сахара по умолчанию - little sweet &nbsp; = пробел
	this.sugarAmountId = 'sugar-little';// id'шник сахара по умолчанию - sugar-little
	this.sugarPrice = 0;// мало сахара - бесплатно
	this.orderSum = 0; // сумма заказа
	this.moneyInCash = [];// создается пустой массив всех внесенных в кассу значений
	this.sum = 0; // сумма внесенных денег
	this.showCups = function() {
		for(var i = 0; i < this.products.length; i++){
			var product = this.products[i];
		    drinks.innerHTML += ` 
			<div class="drink" id='`+product['id']+`' onclick="`+this.myName()+`.selectTheDrink('`+product['id']+`', '`+product['name']+`', '`+product['price']+`');">		
				<div class="coffee-icon" style="background: url(`+product['img']+`); background-size: cover;"></div>
				<div class="coffee-name">`+product['name']+`</div>
				<div class="coffee-price">`+"$" + product['price'].toFixed(2)+`</div>
			</div>
		    `    
		};
	};
	this.selectTheDrink = function(id, name, price){
		if (!this.sum) {
			this.selectedDrink = name; 
			this.selectedDrinkPrice = price; 
			this.changeBackground('drink', id); 
			if(!this.sugarPrice) {
				this.changeBackground('sugar-amount', 'sugar-little');
			};
		};
	}
	
	this.functionOrder = function() {// в зависимости от выбранного напитка выводит его цену, кол-во, вид; кнопка оплаты становится видимой
		document.getElementById("order-name").innerHTML = "Your order: " + "<b>" + this.selectedDrink + "&nbsp;" + "(" + this.sugarAmount + ")" + "&nbsp;" + "x" + this.numberOfCups + "</b>";
		document.getElementById("order-sum").innerHTML = "Price (including sugar): " + "<b>" + "$" + this.functionOrderPrice().toFixed(2) + "</b>";
		document.getElementById("pay").style.display += "block";
		document.getElementById("number-of-cups").style.display = "block";
	}


	this.functionOrderPrice = function() {// считает цену заказа
		var orderMiddleSum = parseFloat(this.selectedDrinkPrice) + this.sugarPrice;
		this.orderSum = orderMiddleSum * this.numberOfCups;
		return this.orderSum;
	}	
	this.functionSugarAmount = function(id) {
		if (id == "sugar-little" && !this.sum) {
			this.sugarAmountId = 'sugar-little';
			this.sugarAmount = 'little&nbsp;sweet';
			this.sugarPrice = 0;
		} else if (id == "sugar-middle" && !this.sum) {
			this.sugarAmountId = 'sugar-middle';
			this.sugarAmount = 'middle&nbsp;sweet';
			this.sugarPrice = 0.1;
		} else if (id == "sugar-many" && !this.sum) {
			this.sugarAmountId = 'sugar-many';
			this.sugarAmount = 'very&nbsp;sweet';
			this.sugarPrice = 0.2;
		}
		this.changeBackground('sugar-amount', this.sugarAmountId);

	}
	this.editNumberOfCups = function(moreOrLess) {
		if (moreOrLess == "less") {
			if (this.numberOfCups > 1 && !this.sum){
				this.numberOfCups = this.numberOfCups - 1;	
			}
			document.getElementById('number-of-cups-value').innerHTML = this.numberOfCups;
			coffee.functionOrder();
		} else if (moreOrLess == "more" && !this.sum) {
			if (this.numberOfCups < 5){
				this.numberOfCups = this.numberOfCups + 1;	
			}
			document.getElementById('number-of-cups-value').innerHTML = this.numberOfCups;
			coffee.functionOrder();
		};
		
	}
	
	this.changeBackground = function(groupClass, id) {// изменяет цвет фона у напитков и сахара
		var group = document.getElementsByClassName(groupClass);
		for(var i = 0; i < group.length; i++){
			group[i].style.background = "#c18b70";
		} 
		document.getElementById(id).style.background = "#86624a";
		if (this.selectedDrink) {
			this.functionOrder();
		};	
	}

	


	
	this.finalOutput = function() {//выводит сдачу, изменяет pay for coffee на thank you, выводит знаменательный текст готовности.
		if (this.sum >= this.orderSum) {
			this.calcCash();
			document.getElementById("wallet").style.display = "none";
			document.getElementById("red-button").style.background = "#676767";
			document.getElementById("red-button").innerHTML = "Thank you!"; 
			for(var i = 0; i < this.numberOfCups; i++){
		    document.getElementById("cups-output").innerHTML += ` 
			<div class="final-cup"></div>		
		    `    
		};
		    ;
			document.getElementById("change").innerHTML = "Change: " + "<b>" + "$" + this.change.toFixed(2); + "</b>";
			if(this.numberOfCups > 1) {
				var isOrAre = "are";
				var cupOrCups = "cups";
			} else {
				var isOrAre = "is";
				var cupOrCups = "cup";
			}
			document.getElementById("result").innerHTML = "Your" + "&nbsp;" + this.numberOfCups + "&nbsp;" + cupOrCups + "&nbsp;" + "of" + "&nbsp;" + this.selectedDrink + "&nbsp;" + isOrAre + "&nbsp;" + "ready!";
		}
	}
	this.add = function(number){
		this.moneyInCash.push(number);
		this.sum = 0;
		for(var i = 0; i < this.moneyInCash.length; i++){
			this.sum = this.sum + parseFloat(this.moneyInCash[i]);
		}
		document.getElementById("paid").innerHTML = "Paid: " + "<b>" + "$" + this.sum.toFixed(2) + "</b>";	
	};
	this.calcCash = function() {// считает сдачу
		this.change = this.sum - coffee.orderSum;
	}

	// this.fillCoffee = function(){
	// 	if(!this.selectedDrink && this.change >= 0){
	// 		this.fill = true;
	// 		var gBorder = 0;
	// 		var gHeight = 146;
	// 		var id = setInterval(function(){
	// 			gBorder++;
	// 			gHeight--;
	// 			glass.setAttribute('style', 
	// 				'border-bottom:' + gBorder +'px solid #3A0908;' +
	// 				'height: ' + gHeight + 'px'
	// 			);
	// 			if(gHeight == 40) clearInterval(id);
	// 		}, 20);			
	// 	}
	// 	if(this.delivery == 0){
	// 		info.innerHTML = 'Спасибо, приходите еще :)';
	// 	}
	// },

	this.myName = function () { 
	for (var name in this.global) 
	  if (this.global[name] == this) 
	    return name
	} 
}
function Wallet() {
	this.typesOfMoneyInWallet = [// создает массив типов купюр и монет в кошельке
		{name: "10 cents", id: "10cents", class: "coin", price: 0.1, img: "img/10cents.png"},
		{name: "25 cents", id: "25cents", class: "coin", price: 0.25, img: "img/25cents.png"},
		{name: "50 cents", id: "50cents", class: "coin", price: 0.5, img: "img/50cents.png"},
		{name: "1 dollar", id: "1dollar", class: "coin", price: 1, img: "img/1dollar-coin.png"},
		{name: "1 dollar", id: "1dollar", class: "bill", price: 1, img: "img/1dollar.png"},
		{name: "2 dollars", id: "2dollars", class: "bill", price: 2, img: "img/2dollars.png"},
		{name: "5 dollars", id: "5dollars", class: "bill", price: 5, img: "img/5dollars.png"},
		{name: "10 dollars", id: "10dollars", class: "bill", price: 10, img: "img/10dollars.png"},
		{name: "20 dollars", id: "20dollars", class: "bill", price: 20, img: "img/20dollars.png"},
		
	];
	this.addWallet = function() {// показывает кошелек
		if (!coffee.sum) {
			document.getElementById("wallet").style.display = "block";
			this.createWallet();
		};	
	}
	this.createWallet = function() { //заполнение кошелька монетами и купюрами
		for(var i = 0; i < this.typesOfMoneyInWallet.length; i++){
		    var typeOfMoneyInWallet = this.typesOfMoneyInWallet[i];
		    if (!coffee.sum) {
			    wallet_content.innerHTML += `  
				<div 
					class="`+typeOfMoneyInWallet['class']+`" 
					id='`+typeOfMoneyInWallet['id']+`'
					onclick="
						coffee.add(`+typeOfMoneyInWallet['price']+`);
						coffee.finalOutput();
					"
				>
					<div class="money-icon" style="background: url(`+typeOfMoneyInWallet['img']+`); background-size: cover;"></div>
					<div class="money-name">`+typeOfMoneyInWallet['name']+`</div>
				</div>
				`
			};        
		};
	}
	// добавляет в массив moneyInCash (пустой) новый элемент, складывает все элементы, выводит paid
	
	this.myName = function () { 
	for (var name in this.global) 
	  if (this.global[name] == this) 
	    return name
	}
}