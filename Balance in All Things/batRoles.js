const content = document.getElementById("content");
const searchBox = document.getElementById("searchBox");

//For search
var searchList = [];

//For list
var index = 0;
for (let i = 0; i < data.length; i++)
{
	var category = data[i];

	//Specific roles per category
	var roleList = Object.values(category)[0];
	var categoryColor = roleList[0]["Color"];

	//Categories for each BAT role, e.g. faction and/or subclass
	var categoryName = Object.keys(category);
	content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + categoryName[0] + "</span><br>";

	for (let j = 0; j < roleList.length; j++)
	{
		var role = roleList[j];
		var roleName = role["Name"];
		var roleSummary = role["Description"];
		var roleDifficulty = role["Difficulty"];
		content.innerHTML += "&emsp;<a href=\"batRoleSpecific.html?category=" + categoryName + "&id=" + roleName + "&index=" + index + "\" style=\"color:"
		 + categoryColor + "\">" + roleName + "</a><span class=\"roleSummary enabled\" style=\"color:" + categoryColor + "\"> (" + roleDifficulty + ") - " + roleSummary + "</span><br>";
		
		var link = "batRoleSpecific.html?category=" + categoryName + "&id=" + roleName + "&index=" + index;
		searchList.push([roleName, link]);
		searchList.push([roleName.toLowerCase(), link]);

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