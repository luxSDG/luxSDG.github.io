const content = document.getElementById("content");

for (let i = 0; i < data.length; i++)
{
	var category = data[i];

	//Categories for each opsec C role, e.g. faction and/or subclass
	var categoryName = Object.keys(category);
	content.innerHTML += categoryName[0] + "<br>";

	//Specific roles per category
	var roleList = Object.values(category)[0];
	for (let j = 0; j < roleList.length; j++)
	{
		var role = roleList[j];
		var roleName = role["Name"];
		content.innerHTML += roleName + "<br>";
	}
	content.innerHTML += "<br>";
}