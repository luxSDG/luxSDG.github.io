const roleResults = document.getElementById("roleResults");

const luckBox = document.getElementById("luckBox");
const amountBox = document.getElementById("amountBox");
const itemResults = document.getElementById("itemResults");
const aaResults = document.getElementById("aaResults");

const initialBox = document.getElementById("initialBox");
const increaseBox = document.getElementById("increaseBox");
const percentageBox = document.getElementById("percentageBox");
const coinResults = document.getElementById("coinResults");

function randomPick()
{

}

function deceptPick()
{

}

function submitCarePackages()
{

}

function submitItems()
{

}

function submitAAs()
{

}

function submitCoins()
{
	var initialCoins = initialBox.value;
	var increasedCoins = increaseBox.value;
	var percentage = percentageBox.value;
	if (initialCoins == "")
	{
		initialCoins = 0;
	}
	if (increasedCoins == "")
	{
		increasedCoins = 200;
	}
	if (percentage == "")
	{
		percentage = 50;
	}
	initialCoins = parseInt(initialCoins);
	increasedCoins = parseInt(increasedCoins);
	percentage = parseInt(percentage);

	//initial + increased + (increased * percentage)
	var calculated = initialCoins + (increasedCoins + (increasedCoins * (percentage / 100)));
	coinResults.innerHTML = "You have earned " + calculated.toString() + " coins!";
}