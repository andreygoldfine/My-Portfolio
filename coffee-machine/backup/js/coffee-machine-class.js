function CoffeeMachine() {
	this.products = [//создает массив всех продуктов
		{
			name: "Cappuchino",
			id: "cappuchino",
			price: 0.6 ,
			img: "img/cappuchino.png"
		},
		{
			name: "Americano",
			id: "americano",
			price: 0.7,
			img: "img/cappuchino.png"
		},
		{
			name: "Espresso",
			id: "espresso",
			price: 0.9,
			img: "img/cappuchino.png"
		},
		{
			name: "Latte",
			id: "latte",
			price: 1.2,
			img: "img/cappuchino.png"
		},
		{
			name: "Mochachino",
			id: "mochachino",
			price: 1.4,
			img: "img/cappuchino.png"
		},
		{
			name: "Macchiato",
			id: "macchiato",
			price: 1.7,
			img: "img/cappuchino.png"
		},
		{
			name: "Mokko",
			id: "moka",
			price: 5.0,
			img: "img/cappuchino.png"
		},
		{
			name: "Hot chocolate",
			id: "hot-chocolate",
			price: 2.0,
			img: "img/cappuchino.png"
		}
	];

	this.typesOfMoneyInWallet = [// создает массив типов купюр и монет в кошельке
		{
			name: "1 dollar",
			id: "1dollar",
			class: "bill",
			price: 1,
			img: "img/1dollar.png"
		},
		{
			name: "2 dollars",
			id: "2dollars",
			class: "bill",
			price: 2,
			img: "img/2dollars.png"
		},
		{
			name: "5 dollars",
			id: "5dollars",
			class: "bill",
			price: 5,
			img: "img/5dollars.png"
		},
		{
			name: "10 dollars",
			id: "10dollars",
			class: "bill",
			price: 10,
			img: "img/10dollars.png"
		},
		{
			name: "20 dollars",
			id: "20dollars",
			class: "bill",
			price: 20,
			img: "img/20dollars.png"
		},
		{
			name: "10 cents",
			id: "10cents",
			class: "coin",
			price: 0.1,
			img: "img/10cents.png"
		},
		{
			name: "25 cents",
			id: "25cents",
			class: "coin",
			price: 0.25,
			img: "img/25cents.png"
		},
		{
			name: "50 cents",
			id: "50cents",
			class: "coin",
			price: 0.5,
			img: "img/50cents.png"
		},
		{
			name: "1 dollar",
			id: "1dollar",
			class: "coin",
			price: 1,
			img: "img/1dollar-coin.png"
		},
	];
	this.moneyInCash = [];// создается пустой массив всех внесенных в кассу значений
	this.numberOfCups = 1;// задает количество чашек по умолчанию
	this.sugarAmount = 'little&nbsp;sweet';// количество сахара по умолчанию - little sweet &nbsp; = пробел
	this.sugarAmountId = 'sugar-little';// id'шник сахара по умолчанию - sugar-little
	this.sugarPrice = 0;// мало сахара - бесплатно
	this.sum = 0; // сумма внесенных денег
	this.orderSum = 0; // сумма заказа
	this.showCups = function() {
		for(var i = 0; i < this.products.length; i++){
		    var product = this.products[i];// переменная product - это один элемент массива products
		    drinks.innerHTML += ` 
			<div 
				class="drink" 
				id='`+product['id']+`' 
				onclick="
					selectedDrink = '`+product['name']+`'; 
					selectedDrinkPrice = `+product['price']+`; 
					coffee.changeBackground('drink', '`+product['id']+`'); 
					if(!coffee.sugarPrice) {
						coffee.changeBackground('sugar-amount', 'sugar-little');
					}
				"
			>
				<div class="coffee-icon" style="background: url(`+product['img']+`); background-size: cover;"></div>
				<div class="coffee-name">`+product['name']+`</div>
				<div class="coffee-price">`+"$" + product['price'].toFixed(2)+`</div>
			</div>
		    `    
		};
	};
	this.createWallet = function() { //заполнение кошелька монетами и купюрами
		for(var i = 0; i < this.typesOfMoneyInWallet.length; i++){
		    var typeOfMoneyInWallet = this.typesOfMoneyInWallet[i];
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
	}
	this.finalOutput = function() {//выводит сдачу, изменяет pay for coffee на thank you, выводит знаменательный текст готовности.
		if (this.sum >= this.orderSum) {
			this.calcCash();
			document.getElementById("wallet").style.display = "none";
			document.getElementById("red-button").style.background = "#676767";
			document.getElementById("red-button").innerHTML = "Thank you!"
			document.getElementById("cash").innerHTML = "Change: " + "<b>" + "$" + this.cash.toFixed(2); + "</b>";
			if(this.numberOfCups > 1) {
				var isOrAre = "are";
				var cupOrCups = "cups";
			} else {
				var isOrAre = "is";
				var cupOrCups = "cup";
			}
			document.getElementById("result").innerHTML = "Your" + "&nbsp;" + this.numberOfCups + "&nbsp;" + cupOrCups + "&nbsp;" + "of" + "&nbsp;" + selectedDrink + "&nbsp;" + isOrAre + "&nbsp;" + "ready!";
		}
	}
	this.calcCash = function() {// считает сдачу
		this.cash = this.sum - this.orderSum;
	}
	this.changeBackground = function(groupClass, id) {// изменяет цвет фона у напитков и сахара
		var group = document.getElementsByClassName(groupClass);
		for(var i = 0; i < group.length; i++){
			group[i].style.background = "#c18b70";
		} 
		document.getElementById(id).style.background = "#86624a";
		this.functionOrder();
	}
	this.functionOrder = function() {// в зависимости от выбранного напитка выводит его цену, кол-во, вид; кнопка оплаты становится видимой
		document.getElementById("order-name").innerHTML = "Your order: " + "<b>" + selectedDrink + "&nbsp;" + "(" + this.sugarAmount + ")" + "&nbsp;" + "x" + this.numberOfCups + "</b>";
		document.getElementById("order-sum").innerHTML = "Price (including sugar): " + "<b>" + "$" + this.functionOrderPrice().toFixed(2) + "</b>";
		document.getElementById("pay").style.display += "block";
		document.getElementById("number-of-cups").style.display = "block";
	}
	this.functionOrderPrice = function() {// считает цену заказа
		var orderMiddleSum = selectedDrinkPrice + this.sugarPrice;
		this.orderSum = orderMiddleSum * this.numberOfCups;
		return this.orderSum;
	}

	this.addWallet = function() {// показывает кошелек
		document.getElementById("wallet").style.display = "block";
		this.createWallet();	
	}

	this.add = function(number){// добавляет в массив moneyInCash (пустой) новый элемент, складывает все элементы, выводит paid
		this.moneyInCash.push(number);
		this.sum = 0;
		for(var i = 0; i < this.moneyInCash.length; i++){
			this.sum = this.sum + parseFloat(this.moneyInCash[i]);
		}
		document.getElementById("paid").innerHTML = "Paid: " + "<b>" + "$" + this.sum.toFixed(2) + "</b>";	
	};

}