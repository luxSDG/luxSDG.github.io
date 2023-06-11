const content = document.getElementById("content");
const searchBox = document.getElementById("searchBox");

//For search
var searchList = [];

//For loadbalancing
var contentList = [];

//For separate item sections
function categoryEnabled(categoryN) {
	var intIndex = categoryN.indexOf("-");
	var intCategory = categoryN.slice(intIndex + 1);
  var checkbox = document.getElementById(categoryN);
  var roleList = document.getElementsByClassName(intCategory);
  var contentDivInner = document.getElementById("ChildCategoryName" + intCategory);
  if (checkbox.checked)
  {
  	contentDivInner.innerHTML += contentList[intCategory];
  	/*for (let i = 0; i < roleList.length; i++)
  	{
  		roleList[i].classList.add("enabled");
  		roleList[i].classList.remove("disabled");
  	}*/
  } 
  else 
  {
  	contentDivInner.innerHTML = "";
  	/*for (let i = 0; i < roleList.length; i++)
  	{
  		roleList[i].classList.add("disabled");
  		roleList[i].classList.remove("enabled");
  	}*/
  }
}

//For list
var index = 0;
var categoryCount = 0;
for (let i = 0; i < items.length; i++)
{
	var category = items[i];
	var categoryName = Object.keys(category);

	//Load Balancing creating children
	var child = document.createElement("div");

	//Restructured to fit the new json structure (description per category)
	var innerDetails = Object.values(category)[0];
	var categoryDesc = innerDetails["Description"];
	var itemList = innerDetails["ItemList"];
	if (itemList.length != 0)
	{
		content.innerHTML += "<p>Category Enabled <input class=\"form-check-input categoryBox\" type=\"checkbox\" id=" + "checkbox-" + categoryCount + " onclick=\"categoryEnabled(\'' + this.id + '\')\"></p>";
	}
	content.innerHTML += "<span class=\"roleLink enabled\" style=\"color: white\">" + categoryName + "</span><span class=\"roleSummary enabled\"> - " + categoryDesc + "</span><br><br>";

	child.id = "ChildCategoryName" + i;
	content.appendChild(child);
	contentList.push("");

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

		contentList[i] += "&emsp;<a class=\"roleLink " + categoryCount + "\" href=\"erwItemSpecific.html?category=" + categoryName + "&id=" + itemName + "&index=" + index + "\" style=\"color:"
		 + itemColor + "\">" + itemName + "</a><span class=\"roleSummary " + categoryCount + " \" style=\"color:" + itemColor + "\"> - " + itemSummary + "</span><br class=\"" + categoryCount + " \">";

		/*content.innerHTML += "&emsp;<a class=\"roleLink " + categoryCount + " disabled\" href=\"erwItemSpecific.html?category=" + categoryName + "&id=" + itemName + "&index=" + index + "\" style=\"color:"
		 + itemColor + "\">" + itemName + "</a><span class=\"roleSummary " + categoryCount + " disabled\" style=\"color:" + itemColor + "\"> - " + itemSummary + "</span><br class=\"" + categoryCount + " disabled\">";*/

		var link = "erwItemSpecific.html?category=" + categoryName + "&id=" + itemName + "&index=" + index;
		searchList.push([itemName, link]);
		searchList.push([itemName.toLowerCase(), link]);

		index += 1;
	}
	categoryCount += 1;
	content.innerHTML += "<br>";
}

//For checkbox
//This summary checkbox specifically checks whether rolelink is enabled or not (category name)
//This is due to being able to remove and add what is visible using category enabled
function switchSummary() {
  var checkbox = document.getElementById("flexCheckDefault");
  var roleList = document.getElementsByClassName("roleSummary");
  var roleLinks = document.getElementsByClassName("roleLink");
  if (checkbox.checked)
  {
  	for (let i = 0; i < roleList.length; i++)
  	{
  		if (roleLinks[i].classList.contains("enabled"))
  		{
	  		roleList[i].classList.add("enabled");
	  		roleList[i].classList.remove("disabled");
	  	}
  	}
  } 
  else 
  {
  	for (let i = 0; i < roleList.length; i++)
  	{
  		if (roleLinks[i].classList.contains("enabled"))
  		{
	  		roleList[i].classList.add("disabled");
	  		roleList[i].classList.remove("enabled");
	  	}
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