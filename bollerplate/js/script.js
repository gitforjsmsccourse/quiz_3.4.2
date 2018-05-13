let money = prompt('сколько у вас с собой есть денег?');
let apples = prompt('сколько вы купили яблок?');
let breads = prompt('сколько вы купили батонов хлеба?');
let costOfApple = prompt('сколько стоит одно яблоко?');
let costOfApples = apples * costOfApple;
let costOfBread = prompt('сколько стоит один батон хлеба?');
let costOfBreads = breads * costOfBread;
document.body.innerHTML = (money >= costOfApples + costOfBreads);
