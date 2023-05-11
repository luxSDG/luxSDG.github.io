const roleResults = document.getElementById("roleResults");

const luckBox = document.getElementById("luckBox");
const amountBox = document.getElementById("amountBox");
const luckResults = document.getElementById("luckResults");
const itemResults = document.getElementById("itemResults");
const aaResults = document.getElementById("aaResults");

const initialBox = document.getElementById("initialBox");
const increaseBox = document.getElementById("increaseBox");
const percentageBox = document.getElementById("percentageBox");
const coinResults = document.getElementById("coinResults");

//For rolelist
var roleList = [[],[],[]]
for (let i = 0; i < roles.length; i++)
{
	var roleInner = Object.values(roles[i])[0];
	for (let j = 0; j < roleInner.length; j++)
	{
		roleList[i].push(roleInner[j]["Name"]);
	}
}

//For itemlist
var itemList = [[],[],[],[],[],[]];
for (let i = 0; i < items.length; i++)
{
	var category = items[i];
	var itemInner = Object.values(category)[0];
	for (let j = 0; j < itemInner.length; j++)
	{
		var itemSplit = itemInner[j]["Description"].split("-");
		itemList[i].push(itemSplit[0].trim());
	}
}

//For AAlist
var aaList = [[],[],[],[],[]];
for (let i = 0; i < roles.length; i++)
{
	var category = roles[i];
	var roleListAb = Object.values(category)[0];
	for (let j = 0; j < roleListAb.length; j++)
	{
		var role = roleListAb[j];
		var abilities = role["Abilities"];
		if (abilities.length > 0)
		{				
			for (let k = 0; k < abilities.length; k++)
			{
				var abilitySplit = abilities[k].split("-");
				if (abilitySplit[2] === " Common ")
				{
					aaList[0].push(abilitySplit[0].trim());
				}
				else if (abilitySplit[2] === " Uncommon ")
				{
					aaList[1].push(abilitySplit[0].trim());
				}
				else if (abilitySplit[2] === " Rare ")
				{
					aaList[2].push(abilitySplit[0].trim());
				}
				else if (abilitySplit[2] === " Epic ")
				{
					aaList[3].push(abilitySplit[0].trim());
				}
				else if (abilitySplit[2] === " Legendary ")
				{
					aaList[4].push(abilitySplit[0].trim());
				}
			}
		}
	}
}

function randomPick()
{
	var rand = Math.floor(Math.random() * 60);
	var ind = 0;
	if (rand > 39)
	{
		ind = 2;
		rand -= 40;
	}
	else if (rand > 19)
	{
		ind = 1;
		rand -= 20;
	}
	var rolePicked = roleList[ind][rand];
	roleResults.innerHTML = "You got " + rolePicked + "!";
}

function deceptPick()
{
	var randG = Math.floor(Math.random() * 20);
	var randN = Math.floor(Math.random() * 20);
	var randE = Math.floor(Math.random() * 20);
	var rolePicked0 = roleList[0][randG];
	var rolePicked1 = roleList[1][randN];
	var rolePicked2 = roleList[2][randE];
	roleResults.innerHTML = "You can pick between " + rolePicked0 + ", " + rolePicked1 + ", and " + rolePicked2 + "!";
}

function getLuckTable()
{
	var luck = luckBox.value;
	if (luck == "")
	{
		luck = 0;
	}
	luck = parseInt(luck);
    var luckCap = 398;

    if (luck > luckCap) 
    {
        luck = luckCap;
    }
    var commonOdds = 8000 - 500 * luck;
    if (commonOdds < 0) 
    {
        commonOdds = 0;
    }

    var uncommonOdds = 1500 + 300 * luck;
    if (luck > 16) 
    {
        uncommonOdds -= 500 * (luck - 16);
    }
    if (uncommonOdds < 0) 
    {
        uncommonOdds = 0;
    }

    var rareOdds = 200 + luck * 100;
    if (luck >= 48) 
    {
        rareOdds -= 100 * (luck - 47);
    }
    if (luck > 48) 
    {
        rareOdds -= 100 * (luck - 48);
    }
    if (rareOdds < 0) {
        rareOdds = 0;
    }

    var epicOdds = 150 + luck * 50;
    if (luck > 97) 
    {
        epicOdds -= 100 * (luck - 97);
    }
    if (epicOdds < 0) 
    {
        epicOdds = 0;
    }

    var legendaryOdds = 100 + luck * 25;
    if (luck > 197) 
    {
        legendaryOdds -= 50 * (luck - 197);
    }

    var mythicalOdds = 50 + luck * 25;

    return {
        Common: commonOdds / 100,
        Uncommon: uncommonOdds / 100,
        Rare: rareOdds / 100,
        Epic: epicOdds / 100,
        Legendary: legendaryOdds / 100,
        Mythical: mythicalOdds / 100,
    };
}

function submitCarePackages()
{
	submitItems();
	submitAAs();
}

function submitItems()
{
	var luckValues = getLuckTable(); //luckBox value is inside this function
	var amount = amountBox.value;
	if (amount == "")
	{
		amount = 1;
	}
	amount = parseInt(amount);
	if (amount > 10)
	{
		amount = 10;
	}

	var luckArr = [];
	var total = 0;
	luckResults.innerHTML = "";
	for (let key in luckValues)
	{
		luckResults.innerHTML += key + ": " + luckValues[key] + "<br>";
		luckArr.push(total + luckValues[key]);
		total += luckValues[key];
	}

	var itemArr = [];
	for (let i = 0; i < amount; i++)
	{
		var rand = Math.random() * 101;
		if (rand <= luckArr[0])
		{
			var randomItem = itemList[0][Math.floor(Math.random() * itemList[0].length)];
			itemArr.push(randomItem);
		}
		else if (rand > luckArr[0] && rand <= luckArr[1])
		{
			var randomItem = itemList[1][Math.floor(Math.random() * itemList[1].length)];
			itemArr.push(randomItem);
		}
		else if (rand > luckArr[1] && rand <= luckArr[2])
		{
			var randomItem = itemList[2][Math.floor(Math.random() * itemList[2].length)];
			itemArr.push(randomItem);
		}
		else if (rand > luckArr[2] && rand <= luckArr[3])
		{
			var randomItem = itemList[3][Math.floor(Math.random() * itemList[3].length)];
			itemArr.push(randomItem);
		}
		else if (rand > luckArr[3] && rand <= luckArr[4])
		{
			var randomItem = itemList[4][Math.floor(Math.random() * itemList[4].length)];
			itemArr.push(randomItem);
		}
		else if (rand > luckArr[4] && rand <= luckArr[5])
		{
			var randomItem = itemList[5][Math.floor(Math.random() * itemList[5].length)];
			itemArr.push(randomItem);
		}
	}

	itemResults.innerHTML = "You got the following items: ";
	for (let i = 0; i < itemArr.length; i++)
	{
		if (i == itemArr.length - 1 && i != 0)
		{
			itemResults.innerHTML += "and " + itemArr[i];
		}
		else if (i == itemArr.length - 1 && i == 0)
		{
			itemResults.innerHTML += itemArr[i];
		}
		else
		{
			itemResults.innerHTML += itemArr[i] + ", ";
		}
	}
	itemResults.innerHTML += "!";
}

function submitAAs()
{
	var luckValues = getLuckTable(); //luckBox value is inside this function
	var amount = amountBox.value;
	if (amount == "")
	{
		amount = 1;
	}
	amount = parseInt(amount);
	if (amount > 10)
	{
		amount = 10;
	}

	var luckArr = [];
	var total = 0;
	luckResults.innerHTML = "";
	for (let key in luckValues)
	{
		luckResults.innerHTML += key + ": " + luckValues[key] + "<br>";
		if (key == "Mythical")
		{
			luckArr[4] += luckValues[key];
		}
		else
		{
			luckArr.push(total + luckValues[key]);
			total += luckValues[key];
		}
	}

	var aaArr = [];
	for (let i = 0; i < amount; i++)
	{
		var rand = Math.random() * 101;
		if (rand <= luckArr[0])
		{
			var randomAA = aaList[0][Math.floor(Math.random() * aaList[0].length)];
			aaArr.push(randomAA);
		}
		else if (rand > luckArr[0] && rand <= luckArr[1])
		{
			var randomAA = aaList[1][Math.floor(Math.random() * aaList[1].length)];
			aaArr.push(randomAA);
		}
		else if (rand > luckArr[1] && rand <= luckArr[2])
		{
			var randomAA = aaList[2][Math.floor(Math.random() * aaList[2].length)];
			aaArr.push(randomAA);
		}
		else if (rand > luckArr[2] && rand <= luckArr[3])
		{
			var randomAA = aaList[3][Math.floor(Math.random() * aaList[3].length)];
			aaArr.push(randomAA);
		}
		else if (rand > luckArr[3] && rand <= luckArr[4])
		{
			var randomAA = aaList[4][Math.floor(Math.random() * aaList[4].length)];
			aaArr.push(randomAA);
		}
	}

	aaResults.innerHTML = "You got the following AAs: ";
	for (let i = 0; i < aaArr.length; i++)
	{
		if (i == aaArr.length - 1 && i != 0)
		{
			aaResults.innerHTML += "and " + aaArr[i];
		}
		else if (i == aaArr.length - 1 && i == 0)
		{
			aaResults.innerHTML += aaArr[i];
		}
		else
		{
			aaResults.innerHTML += aaArr[i] + ", ";
		}
	}
	aaResults.innerHTML += "!";
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