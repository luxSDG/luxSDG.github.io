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
for (let i = 0; i < data.length; i++)
{
	var category = data[i];

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
				imagePic.src = "opsecCImages/" + role["Image"];
				head.innerHTML += roleSearched;
				content.innerHTML += "<h5>" + categorySearched + "</h5>";
				content.innerHTML += "<br>" + role["Description"];
				content.innerHTML += "<br><br> Win Condition: " + role["Win Condition"] + "<br><br>";

				var day = role["Day"];
				if (day.length > 0)
				{				
					content.innerHTML += "<h5>Day: </h5><br>";
					for (let k = 0; k < day.length; k++)
					{
						content.innerHTML += day[k] + "<br><br>";
					}
				}

				var night = role["Night"];
				if (night.length > 0)
				{
					content.innerHTML += "<h5>Night: </h5><br>";
					for (let k = 0; k < night.length; k++)
					{
						content.innerHTML += night[k] + "<br><br>";
					}
				}

				var passives = role["Passives"];
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
for (let i = 0; i < data.length; i++)
{
	var category = data[i];

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
			sideBar.innerHTML += "<a href=\"opsecCRoleSpecific.html?category=" + categoryName + "&id=" + roleName + "&index=" + index + 
			"\"class=\"list-group-item list-group-item-action darker py-3 lh-tight border-0 active2\" id=\"activeSideBar\"><div class=\"d-flex w-100 align-items-center justify-content-between\"><small style=\"color:"
			 + categoryColor + "\">" + roleName + "</small></div></a>";
		}
		else
		{
			sideBar.innerHTML += "<a href=\"opsecCRoleSpecific.html?category=" + categoryName + "&id=" + roleName + "&index=" + index + 
			"\"class=\"list-group-item list-group-item-action darker py-3 lh-tight border-0\"><div class=\"d-flex w-100 align-items-center justify-content-between\"><small style=\"color:"
			 + categoryColor + "\">" + roleName + "</small></div></a>";
		}

		var link = "opsecCRoleSpecific.html?category=" + categoryName + "&id=" + roleName + "&index=" + index;
		searchList.push([roleName, link]);
		searchList.push([roleName.toLowerCase(), link]);

		if (index === indexSearched-1)
		{
			backLink.innerHTML += "<a href=\"opsecCRoleSpecific.html?category=" + categoryName + "&id=" + roleName + 
			"&index=" + index + "\"style=\"color:"+ categoryColor + "\">" + roleName + "</a>";
		}
		if (index === indexSearched+1)
		{
			nextLink.innerHTML += "<a href=\"opsecCRoleSpecific.html?category=" + categoryName + "&id=" + roleName + 
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