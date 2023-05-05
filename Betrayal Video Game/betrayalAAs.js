const content = document.getElementById("content");

var commonList = [];
var uncommonList = [];
var rareList = [];
var epicList = [];
var legendaryList = [];

//For list
for (let i = 0; i < roles.length; i++)
{
	var category = roles[i];

	var roleList = Object.values(category)[0];
	var categoryColor = roleList[0]["Color"];

	var categoryName = Object.keys(category);

	for (let j = 0; j < roleList.length; j++)
	{
		var role = roleList[j];
		var abilities = role["Abilities"];
		if (abilities.length > 0)
		{				
			for (let k = 0; k < abilities.length; k++)
			{
				var abilitySplit = abilities[k].split("-");
				var abilityTup = [];
				abilityTup.push(abilitySplit[0]); //name
				abilityTup.push(abilitySplit[3]); //cost
				var desc = abilitySplit.slice(4).join("-");
				abilityTup.push(desc);

				if (abilitySplit[2] === " Common ")
				{
					commonList.push(abilityTup);
				}
				else if (abilitySplit[2] === " Uncommon ")
				{
					uncommonList.push(abilityTup);
				}
				else if (abilitySplit[2] === " Rare ")
				{
					rareList.push(abilityTup);
				}
				else if (abilitySplit[2] === " Epic ")
				{
					epicList.push(abilityTup);
				}
				else if (abilitySplit[2] === " Legendary ")
				{
					legendaryList.push(abilityTup);
				}
			}
		}
	}
}

var categoryName = "Common";
var categoryColor = "lime";
content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + categoryName + "</span><br><br>";
for (let i = 0; i < commonList.length; i++)
{
	content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + commonList[i][0] + " - " + commonList[i][1] + " - " + commonList[i][2] + "</span><br>";
}
content.innerHTML += "<br>";

var categoryName = "Uncommon";
var categoryColor = "cyan";
content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + categoryName + "</span><br><br>";
for (let i = 0; i < uncommonList.length; i++)
{
	content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + commonList[i][0] + " - " + commonList[i][1] + " - " + commonList[i][2] + "</span><br>";
}
content.innerHTML += "<br>";

var categoryName = "Rare";
var categoryColor = "CornflowerBlue";
content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + categoryName + "</span><br><br>";
for (let i = 0; i < rareList.length; i++)
{
	content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + commonList[i][0] + " - " + commonList[i][1] + " - " + commonList[i][2] + "</span><br>";
}
content.innerHTML += "<br>";

var categoryName = "Epic";
var categoryColor = "red";
content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + categoryName + "</span><br><br>";
for (let i = 0; i < epicList.length; i++)
{
	content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + commonList[i][0] + " - " + commonList[i][1] + " - " + commonList[i][2] + "</span><br>";
}
content.innerHTML += "<br>";

var categoryName = "Legendary";
var categoryColor = "magenta";
content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + categoryName + "</span><br><br>";
for (let i = 0; i < legendaryList.length; i++)
{
	content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + commonList[i][0] + " - " + commonList[i][1] + " - " + commonList[i][2] + "</span><br>";
}
content.innerHTML += "<br>";