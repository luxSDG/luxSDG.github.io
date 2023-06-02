const content = document.getElementById("content");
const searchBox = document.getElementById("searchBox");

//For search
var searchList = [];

//For list
var index = 0;
for (let i = 0; i < chars.length; i++)
{
	var category = chars[i];
	var categoryName = Object.keys(category);

	//Restructured to fit the new json structure (description per category)
	var innerDetails = Object.values(category)[0];
	var categoryDesc = innerDetails["Description"];
	var charList = innerDetails["CharList"];
	content.innerHTML += "<span style=\"color: white\">" + categoryName[0] + "</span><span class=\"roleSummary enabled\"> - " + categoryDesc + "</span><br><br>";

	for (let j = 0; j < charList.length; j++)
	{
		var char = charList[j];
		var charName = char["Name"];
		var charSummary = char["Summary"];
		var charColor = char["Color"];
		var charMain = char["Main"];
		var charRole = char["Role"];
		var charDiff = char["Difficulty"];
		content.innerHTML += "&emsp;<a href=\"erwCharSpecific.html?category=" + categoryName + "&id=" + charName + "&index=" + index + "&main=" + charMain + "\" style=\"color:"
		 + charColor + "\">" + charName + "</a><span class=\"roleSummary enabled\" style=\"color:" + charColor + "\">  (" + charDiff + ", " + charRole + ") - " + charSummary + "</span><br>";
		
		var link = "erwCharSpecific.html?category=" + categoryName + "&id=" + charName + "&index=" + index + "&main=" + charMain;
		searchList.push([categoryName.toString() + " " + charName, link]);
		searchList.push([categoryName.toString() + " " + charName.toLowerCase(), link]);
		searchList.push([categoryName.toString().toLowerCase() + " " + charName, link]);
		searchList.push([categoryName.toString().toLowerCase() + " " + charName.toLowerCase(), link]);
		if (charMain)
		{
			searchList.push([charName, link]);
			searchList.push([charName.toLowerCase(), link]);
		}

		index += 1;
	}
	content.innerHTML += "<br>";
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