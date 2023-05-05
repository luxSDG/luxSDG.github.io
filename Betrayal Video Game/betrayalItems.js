const content = document.getElementById("content");

//For list
for (let i = 0; i < items.length; i++)
{
	var category = items[i];
	var itemList = Object.values(category)[0];
	var categoryName = Object.keys(category);
	var categoryColor = "white";

	//Common, Uncommon, Rare, Epic, Legendary, Mythic
	if (i === 0)
	{
		categoryColor = "lime";
	}
	else if (i === 1)
	{
		categoryColor = "cyan";
	}
	else if (i === 2)
	{
		categoryColor = "CornflowerBlue";
	}
	else if (i === 3)
	{
		categoryColor = "red";
	}
	else if (i === 4)
	{
		categoryColor = "magenta";
	}
	else if (i === 5)
	{
		categoryColor = "Plum";
	}

	content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + categoryName + "</span><br><br>";
	for (let j = 0; j < itemList.length; j++)
	{
		content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + itemList[0]["Description"] + "</span><br>";
	}
	content.innerHTML += "<br>";
}