const content = document.getElementById("content");

//For list
for (let i = 0; i < data.length; i++)
{
	var category = data[i];

	//Specific roles per category
	var roleList = Object.values(category)[0];
	var categoryColor = roleList[0]["Color"];

	//Categories for each opsec C role, e.g. faction and/or subclass
	var categoryName = Object.keys(category);
	content.innerHTML += "<span style=\"color:" + categoryColor + "\">" + categoryName[0] + "</span><br>";

	for (let j = 0; j < roleList.length; j++)
	{
		var role = roleList[j];
		var roleName = role["Name"];
		var roleSummary = role["Summary"];
		content.innerHTML += "&emsp;<a href=\"opsecCRoleSpecific.html?category=" + categoryName + "&id=" + roleName + "\" style=\"color:"
		 + categoryColor + "\">" + roleName + "</a><span class=\"roleSummary enabled\" style=\"color:" + categoryColor + "\"> - " + roleSummary + "</span><br>";
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