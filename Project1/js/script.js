/*alert ("Hello, World!");

let age;

age = prompt ("How old are you?", "18");

alert (age);*/

/*var money;
var shop;*/
money = prompt ("Каким бюджетом вы располагаете?");
shop = prompt ("В каком магазине вы затариваетесь?");
var shopGoods = ['blackDick', 'horseDick', 'vagina', 'littleAss'];
/*var employers = ['Rachel', 'Shona', 'Mircella', 'Angelina', 'Pamella'];*/

var employer0 = {
	name: "Rachel",
	age: 18,
	isMarried: false
};
var employer1 = {
	name: "Shona",
	age: 28,
	isMarried: true
};
var employer2 = {
	name: "Mircella",
	age: 38,
	isMarried: false
};
var employer3 = {
	name: "Angelina",
	age: 34,
	isMarried: true
};
var employer4 = {
	name: "Pamella",
	age: 32,
	isMarried: false
};


employers = {
		employer0,
		employer1,
		employer2,
		employer3,
		employer4,
	};

mainList = {
	money,
	shop,
	shopGoods,
	employers,
	open,
}

/*console.log(mainList);*/
console.log(shopGoods);
console.log(employers);
console.log(money);
console.log(shopGoods);
console.log(mainList);

var shopGoods = [
	prompt ("Какой тип товаров будем продавать?"),
	prompt ("Какой тип товаров будем продавать?"), 
	prompt ("Какой тип товаров будем продавать?"),
];


console.log(shopGoods);

alert (money / 30);