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


//For AAlist


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
	var luckValues = getLuckTable();
	luckResults.innerHTML = "";
	for (let key in luckValues)
	{
		luckResults.innerHTML += key + ": " + luckValues[key] + "<br>";
	}
}

function submitItems()
{
	var luckValues = getLuckTable();
	luckResults.innerHTML = "";
	for (let key in luckValues)
	{
		luckResults.innerHTML += key + ": " + luckValues[key] + "<br>";
	}
}

function submitAAs()
{
	var luckValues = getLuckTable();
	luckResults.innerHTML = "";
	for (let key in luckValues)
	{
		luckResults.innerHTML += key + ": " + luckValues[key] + "<br>";
	}
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