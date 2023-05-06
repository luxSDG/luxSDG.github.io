const url = window.location.href;
const indexStart = url.indexOf("?") + 10;
const indexMid = url.indexOf("&") + 4;
const indexEnd = url.lastIndexOf("&") + 7;
const categorySearched = url.slice(indexStart, indexMid-4).replace(/%20/g, " ");
const roleSearched = url.slice(indexMid, indexEnd-7).replace(/%20/g, " ");
const indexSearched = parseInt(url.slice(indexEnd, url.length).replace(/%20/g, " "));

const head = document.getElementById("head");
const content = document.getElementById("content");
const imagePic = document.getElementById("imagePic");
const sideBar = document.getElementById("sideBar");
const backLink = document.getElementById("backLink");
const nextLink = document.getElementById("nextLink");
const searchBox = document.getElementById("searchBox");

//For search
var searchList = [];

//For main page
for (let i = 0; i < roles.length; i++)
{
	var category = roles[i];

	//Check category name
	var categoryName = Object.keys(category)[0];
	if (categoryName === categorySearched)
	{
		var roleList = Object.values(category)[0];
		for (let j = 0; j < roleList.length; j++)
		{
			var role = roleList[j];
			if (role["Name"] === roleSearched)
			{
				head.style.color = role["Color"];
				content.style.color = role["Color"];
				var imageSource = role["Image"];
				imagePic.src = imageSource;
				head.innerHTML += roleSearched;
				content.innerHTML += "<br>" + categorySearched;
				content.innerHTML += "<br>" + role["Description"];
				content.innerHTML += "<br>HP: " + role["HP"];
				content.innerHTML += "<br>AP: " + role["AP"] + "<br><br>";

				var abilities = role["Abilities"];
				if (abilities.length > 0)
				{				
					content.innerHTML += "<h5>Abilities: </h5><br>";
					for (let k = 0; k < abilities.length; k++)
					{
						content.innerHTML += abilities[k] + "<br><br>";
					}
				}

				var perks = role["Perks"];
				if (perks.length > 0)
				{
					content.innerHTML += "<h5>Perks: </h5><br>";
					for (let k = 0; k < perks.length; k++)
					{
						content.innerHTML += perks[k] + "<br><br>";
					}
				}

				var achievements = role["Achievements"];
				if (achievements.length > 0)
				{
					content.innerHTML += "<h5>Achievements: </h5><br>";
					for (let k = 0; k < achievements.length; k++)
					{
						content.innerHTML += achievements[k] + "<br><br>";
					}
				}
			}
		}
	}
}


//For Sidebar
var index = 0;
for (let i = 0; i < roles.length; i++)
{
	var category = roles[i];

	//Categories for each role, e.g. faction and/or subclass
	var categoryName = Object.keys(category);

	//Specific roles per category
	var roleList = Object.values(category)[0];

	for (let j = 0; j < roleList.length; j++)
	{
		var role = roleList[j];
		var roleName = role["Name"];
		var categoryColor = role["Color"];
		if (index === indexSearched)
		{
			sideBar.innerHTML += "<a href=\"betrayalRoleSpecific.html?category=" + categoryName + "&id=" + roleName + "&index=" + index + 
			"\"class=\"list-group-item list-group-item-action darker py-3 lh-tight border-0 active2\" id=\"activeSideBar\"><div class=\"d-flex w-100 align-items-center justify-content-between\"><small style=\"color:"
			 + categoryColor + "\">" + roleName + "</small></div></a>";
		}
		else
		{
			sideBar.innerHTML += "<a href=\"betrayalRoleSpecific.html?category=" + categoryName + "&id=" + roleName + "&index=" + index + 
			"\"class=\"list-group-item list-group-item-action darker py-3 lh-tight border-0\"><div class=\"d-flex w-100 align-items-center justify-content-between\"><small style=\"color:"
			 + categoryColor + "\">" + roleName + "</small></div></a>";
		}

		var link = "betrayalRoleSpecific.html?category=" + categoryName + "&id=" + roleName + "&index=" + index;
		searchList.push([roleName, link]);
		searchList.push([roleName.toLowerCase(), link]);

		if (index === indexSearched-1)
		{
			backLink.innerHTML += "<a href=\"betrayalRoleSpecific.html?category=" + categoryName + "&id=" + roleName + 
			"&index=" + index + "\"style=\"color:"+ categoryColor + "\">" + roleName + "</a>";
		}
		if (index === indexSearched+1)
		{
			nextLink.innerHTML += "<a href=\"betrayalRoleSpecific.html?category=" + categoryName + "&id=" + roleName + 
			"&index=" + index + "\"style=\"color:" + categoryColor + "\">" + roleName + "</a>";
		}
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