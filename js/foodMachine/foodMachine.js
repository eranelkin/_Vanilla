var sys = require('sys');
var Math = require('mathjs');
var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var testText = [];
var globalInput = -1;

function readLine(messageArg, callBack) {

	var inputText;

	rl.question(messageArg, function (answer) {
		inputText = answer;
		rl.pause();
		callBack(inputText);
	});
	return inputText;
}

//****************************************************
//**************	class  Counter    ****************
//****************************************************
function Counter() {
	this.count = 0;
}

Counter.prototype.add = function (amountArg) {
	this.count += amountArg;
}
Counter.prototype.get = function () {
	return this.count;
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


//****************************************************
//**************	class  Entity    *****************
//****************************************************
function Entity(nameArg, valueArg, countArg) {

	this.name = nameArg;
	this.value = valueArg;
	this.count = new Counter();
	this.count.add(countArg);
}
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function navigateUserSelection() {

	readLine("User Type (a)dminstrator / (u)ser / (q)uit ?", selectUserCallback);
}
function selectUserCallback(textArg) {
	console.log(textArg);

	if (textArg === "a") {
		printReport();
		navigateUserSelection();
	}
	else if (textArg === "u") {
		productSelection();
	}
	else if (textArg === "q") {
		process.exit(1);
	}
	else {
		console.log("Wrong selection");
		navigateUserSelection();
	}
}

function printReport() {
	console.log("Inventory:\n---------")
	for (var x = 0; x < inventory.length; x++) {

		console.log(x + ") Inventory:" + inventory[x].count.get() + " Product:" + inventory[x].name);
	}
	console.log("SpearCange:" + totalSpearChange);
	console.log("\nCoins Counter:\n-------------")
	for (var x = 0; x < cashMoney.length; x++) {

		console.log(cashMoney[x].name + ") --> " + cashMoney[x].count.get());
	}
}
function productSelection() {

	for (var x = 0; x < inventory.length; x++) {

		console.log(x + ") Inventory:" + inventory[x].count.get() + " Product:" + inventory[x].name + " Cost:" + inventory[x].value);
	}
	readLine("Select product number ? (-1 return to menu)", function (answerArg) {

		answerArg -= 0;
		if (answerArg === -1) {
			navigateUserSelection();
			return;
		}
		if (inventory[answerArg - 0].count.get() > 0) {
			gettingPayed(inventory[answerArg - 0]);

		}
		else {
			console.log("Out of stock");
			productSelection();
		}
	});
}
function gettingPayed(productArg) {

	var currentValue = 0;

	function getCoinUntilValue() {

		for (var x = 0; x < cashMoney.length; x++) {

			console.log(x + ") " + cashMoney[x].name);
		}
		readLine("Select a coin number ? (-1 return to menu)", function (answerArg) {

			answerArg -= 0;

			if (answerArg === -1) {
				navigateUserSelection();
				return;
			}
			currentValue += cashMoney[answerArg].value;
			cashMoney[answerArg].count.add(1);

			if (currentValue >= productArg.value) {

				giveChange();
			}
			else {
				getCoinUntilValue();
			}
		});
	}
	function giveChange() {

		var changeToGive = currentValue - productArg.value;
		console.log("total change:" + changeToGive);
		for (var x = cashMoney.length - 1; x > 0; x--) {

			if (changeToGive >= cashMoney[x].value) {

				if (cashMoney[x].count.get() > 0) {
					console.log("change: " + cashMoney[x].value + " " + cashMoney[x].name);
					cashMoney[x].count.add(-1);
					changeToGive -= cashMoney[x].value;
					x++;
				}
			}
		}
		totalSpearChange += changeToGive;
		productArg.count.add(-1);
		console.log("You just buy:" + productArg.name);
		navigateUserSelection();

	}
	getCoinUntilValue();
}

var totalSpearChange = 0;
var cashMoney = [];
var inventory = [];

cashMoney.push(new Entity("cent", 1, 2));
cashMoney.push(new Entity("nickel", 5, 2));
cashMoney.push(new Entity("dime", 10, 2));
cashMoney.push(new Entity("quarter", 25, 2));
// cashMoney.push(new Entity("half dollar", 50, 2));
// cashMoney.push(new Entity("dollar", 100, 2));

inventory.push(new Entity("Coca Cola", 125, 2));
inventory.push(new Entity("Bamba", 80, 2));
inventory.push(new Entity("Choclate Bar", 105, 2));

navigateUserSelection();

