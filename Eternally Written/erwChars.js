const content = document.getElementById("content");
const searchBox = document.getElementById("searchBox");

//For search
var searchList = [];

//For list
var index = 0;
for (let i = 0; i < chars.length; i++)
{
	var category = chars[i];

	//Specific chars per category
	var charList = Object.values(category)[0];
	var categoryColor = charList[0]["Color"];

	//Categories for each char
	var categoryName = Object.keys(category);
	content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + categoryName[0] + "</span><br>";

	for (let j = 1; j < charList.length; j++)
	{
		var char = charList[j];
		var charName = char["Name"];
		var charSummary = char["Description"];
		content.innerHTML += "&emsp;<a href=\"erwCharSpecific.html?category=" + categoryName + "&id=" + charName + "&index=" + index + "\" style=\"color:"
		 + categoryColor + "\">" + charName + "</a><span class=\"roleSummary enabled\" style=\"color:" + categoryColor + "\"> - " + charSummary + "</span><br>";
		
		var link = "erwCharSpecific.html?category=" + categoryName + "&id=" + charName + "&index=" + index;
		searchList.push([charName, link]);
		searchList.push([charName.toLowerCase(), link]);

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