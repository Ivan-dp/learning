/*alert ("Hello, World!");

let age;

age = prompt ("How old are you?", "18");

alert (age);*/

/*var money;
var shop;*/
money = prompt ("Каким бюджетом вы располагаете?");
name = prompt ("В каком магазине вы затариваетесь?");
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
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

/*console.log(mainList);*/
console.log(shopGoods);
console.log(employers);
console.log(money);
console.log(shopGoods);
console.log(mainList);

for (let i=0; i < 5; i++) {

	let a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50) {
		console.log('Всё верно');
		mainList.shopGoods[i] = a;
	}
}




// var shopGoods = [
// 	prompt ("Какой тип товаров будем продавать?"),
// 	prompt ("Какой тип товаров будем продавать?"), 
// 	prompt ("Какой тип товаров будем продавать?"),
// ];

alert (mainList.budget / 30);

console.log (mainList);

// let num = 50;

// if (num < 49) {
// 	console.log('Неверно')
// } else if (num > 100) {
// 	console.log('Неверно')
// } else {
// 	console.log('Верно')
// }

// //(num == 50)? console.log('Верно') : console.log('Неверно');

// switch (num) {
// 	case 49:
// 		console.log('Мало');
// 		break;
// 	case 100:
// 		console.log('Много');
// 		break;
// 	case 80:
// 		console.log('Всё ещё много');
// 		break;
// 	case 50:
// 		console.log('В точку');
// 		break;
// 	default:
// 		console.log('Не в этот раз');
// 		break;
// }

// // while (num < 55) {
// // 	console.log(num);
// // 	num++;
// // }


// // do {
// // 	console.log(num);
// // 	num++;
// // }
// // while (num < 55); 


// for (let i = 0; i < 8; i++) {
// 	console.log(i);
// }