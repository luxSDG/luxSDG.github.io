const content = document.getElementById("content");
const searchBox = document.getElementById("searchBox");

//For search
var searchList = [];

//For list
var index = 0;
for (let i = 0; i < items.length; i++)
{
	var category = items[i];
	var categoryName = Object.keys(category);

	//Restructured to fit the new json structure (description per category)
	var innerDetails = Object.values(category)[0];
	var categoryDesc = innerDetails["Description"];
	var itemList = innerDetails["ItemList"];
	content.innerHTML += "<span style=\"color: white\">" + categoryName[0] + "</span><span class=\"roleSummary enabled\"> - " + categoryDesc + "</span><br><br>";

	for (let j = 0; j < itemList.length; j++)
	{
		var item = itemList[j];
		var itemName = item["Name"];
		var itemSummary = item["Description"];
		var itemRarity = item["Rarity"];
		var itemColor = "white";

		if (itemRarity === "Legendary")
		{
			itemColor = "yellow";
		}
		else if (itemRarity === "Epic")
		{
			itemColor = "magenta";
		}
		else if (itemRarity === "Rare")
		{
			itemColor = "cyan";
		}
		else if (itemRarity === "Uncommon")
		{
			itemColor = "lime";
		}
		else if (itemRarity === "Common")
		{
			itemColor = "white";
		}


		content.innerHTML += "&emsp;<a href=\"erwItemSpecific.html?category=" + categoryName + "&id=" + itemName + "&index=" + index + "\" style=\"color:"
		 + itemColor + "\">" + itemName + "</a><span class=\"roleSummary enabled\" style=\"color:" + itemColor + "\"> - " + itemSummary + "</span><br>";
		
		var link = "erwItemSpecific.html?category=" + categoryName + "&id=" + itemName + "&index=" + index;
		searchList.push([itemName, link]);
		searchList.push([itemName.toLowerCase(), link]);

		index += 1;
	}
	content.innerHTML += "</p><br>";
}

//For checkbox
function switchSummary() {
  var checkbox = document.getElementById("flexCheckDefault");
  var roleList = document.getElementsByClassName("roleSummary");
  if (checkbox.checked)
  {
  	for (let i = 0; i < roleList.length; i++)
  	{
  		roleList[i].classList.add("enabled");
  		roleList[i].classList.remove("disabled");
  	}
  } 
  else 
  {
  	for (let i = 0; i < roleList.length; i++)
  	{
  		roleList[i].classList.add("disabled");
  		roleList[i].classList.remove("enabled");
  	}
  }
}

document.onkeypress = function (event) {
	if (event.keyCode === 13)
	{
		var value = searchBox.value;
		for (let i = 0; i < searchList.length; i++)
		{
			if (value === searchList[i][0])
			{
				location.href = searchList[i][1];
				return;
			}
		}
	}
};