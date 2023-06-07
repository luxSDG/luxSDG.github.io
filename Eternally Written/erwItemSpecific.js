const url = window.location.href;
const indexStart = url.indexOf("?") + 10;
const indexMid = url.indexOf("&") + 4;
const indexEnd = url.lastIndexOf("&") + 7;
const categorySearched = url.slice(indexStart, indexMid-4).replace(/%20/g, " ");
var roleSearched = url.slice(indexMid, indexEnd-7).replace(/%20/g, " ");
const indexSearched = parseInt(url.slice(indexEnd, url.length).replace(/%20/g, " "));

const head = document.getElementById("head");
const content = document.getElementById("content");
const imagePic = document.getElementById("imagePic");
const sideBar = document.getElementById("sideBar");
const backLink = document.getElementById("backLink");
const nextLink = document.getElementById("nextLink");
const searchBox = document.getElementById("searchBox");

roleSearched = roleSearched.replace(/%27/g, "'");

//For search
var searchList = [];

//For main page
for (let i = 0; i < items.length; i++)
{
	var category = items[i];

	//Check category name
	var categoryName = Object.keys(category)[0];
	if (categoryName === categorySearched)
	{
		var itemList = Object.values(category)[0]["ItemList"];
		for (let j = 0; j < itemList.length; j++)
		{
			var item = itemList[j];
			if (item["Name"] === roleSearched)
			{
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

				head.style.color = itemColor;
				content.style.color = itemColor;
				var imageSource = item["Image"];
				imagePic.src = imageSource;
				head.innerHTML += roleSearched;
				content.innerHTML += "<h5>" + categoryName + "</h5><br>";

				var buildpath = item["Build Path"];
				if (buildpath.length > 0)
				{				
					content.innerHTML += "<h5>Build Path: </h5><br>";
					for (let k = 0; k < buildpath.length; k++)
					{
						content.innerHTML += buildpath[k] + "<br><br>";
					}
				}

				var stats = item["Statistics"];
				if (stats.length > 0)
				{				
					content.innerHTML += "<h5>Statistics </h5><br>";
					for (let k = 0; k < stats.length; k++)
					{
						content.innerHTML += stats[k] + "<br><br>";
					}
				}
				var passives = item["Passives"];
				if (passives.length > 0)
				{
					content.innerHTML += "<h5>Passives: </h5><br>";
					for (let k = 0; k < passives.length; k++)
					{
						content.innerHTML += passives[k] + "<br><br>";
					}
				}
			}
		}
	}
}

//For Sidebar
var index = 0;
for (let i = 0; i < items.length; i++)
{
	var category = items[i];
	var categoryName = Object.keys(category)[0];
	var itemList = Object.values(category)[0]["ItemList"];

	for (let j = 0; j < itemList.length; j++)
	{
		var item = itemList[j];
		var itemName = item["Name"];
		var itemRarity = item["Rarity"];
		var categoryColor = "white";

		if (itemRarity === "Legendary")
		{
			categoryColor = "yellow";
		}
		else if (itemRarity === "Epic")
		{
			categoryColor = "magenta";
		}
		else if (itemRarity === "Rare")
		{
			categoryColor = "cyan";
		}
		else if (itemRarity === "Uncommon")
		{
			categoryColor = "lime";
		}
		else if (itemRarity === "Common")
		{
			categoryColor = "white";
		}

		if (categoryName === categorySearched)
		{
			if (index === indexSearched)
			{
				sideBar.innerHTML += "<a href=\"erwItemSpecific.html?category=" + categoryName + "&id=" + itemName + "&index=" + index +
				"\"class=\"list-group-item list-group-item-action darker py-3 lh-tight border-0 active2\" id=\"activeSideBar\"><div class=\"d-flex w-100 align-items-center justify-content-between\"><small style=\"color:"
				 + categoryColor + "\">" + itemName + "</small></div></a>";
			}
			else
			{
				sideBar.innerHTML += "<a href=\"erwItemSpecific.html?category=" + categoryName + "&id=" + itemName + "&index=" + index +
				"\"class=\"list-group-item list-group-item-action darker py-3 lh-tight border-0\"><div class=\"d-flex w-100 align-items-center justify-content-between\"><small style=\"color:"
				 + categoryColor + "\">" + itemName + "</small></div></a>";
			}


			if (index === indexSearched-1)
			{
				backLink.innerHTML += "<a href=\"erwItemSpecific.html?category=" + categoryName + "&id=" + itemName + 
				"&index=" + index + "\"style=\"color:"+ categoryColor + "\">" + itemName + "</a>";
			}
			if (index === indexSearched+1)
			{
				nextLink.innerHTML += "<a href=\"erwItemSpecific.html?category=" + categoryName + "&id=" + itemName + 
				"&index=" + index + "\"style=\"color:" + categoryColor + "\">" + itemName + "</a>";
			}
		}

		var link = "erwItemSpecific.html?category=" + categoryName + "&id=" + itemName + "&index=" + index;
		searchList.push([itemName, link]);
		searchList.push([itemName.toLowerCase(), link]);

		index += 1;
	}
}
document.getElementById("activeSideBar").scrollIntoView();

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