const url = window.location.href;
const indexStart = url.indexOf("?") + 10;
const indexMid = url.indexOf("&") + 4;

//For mid index
var urlMid = 0;
var count = 0;
for (let i = 0; i < url.length; i++)
{
	if (url[i] === "&" && count === 1)
	{
		urlMid = i;
		break;
	}
	else if (url[i] === "&")
	{
		count++;
	}
}
const indexMid2 = urlMid + 7;

const indexEnd = url.lastIndexOf("&") + 6;
const categorySearched = url.slice(indexStart, indexMid-4).replace(/%20/g, " ");
const roleSearched = url.slice(indexMid, indexMid2-7).replace(/%20/g, " ");
const indexSearched = parseInt(url.slice(indexMid2, indexEnd-6).replace(/%20/g, " "));
const mainSearched = url.slice(indexEnd, url.length).replace(/%20/g, " ");

const head = document.getElementById("head");
const content = document.getElementById("content");
const imagePic = document.getElementById("imagePic");
const sideBar = document.getElementById("sideBar");
const backLink = document.getElementById("backLink");
const nextLink = document.getElementById("nextLink");
const searchBox = document.getElementById("searchBox");
const linkWeapons = document.getElementById("linkWeapons");

//For search
var searchList = [];

//For Sidebar
var index = 0;
for (let i = 0; i < chars.length; i++)
{
	var category = chars[i];
	var categoryName = Object.keys(category)[0];
	var charList = Object.values(category)[0]["CharList"];

	for (let j = 0; j < charList.length; j++)
	{
		var char = charList[j];
		var charName = char["Name"];
		var categoryColor = char["Color"];
		var charMain = char["Main"];
		if (index === indexSearched)
		{
			sideBar.innerHTML += "<a href=\"erwCharSpecific.html?category=" + categoryName + "&id=" + charName + "&index=" + index + "&main=" + charMain +
			"\"class=\"list-group-item list-group-item-action darker py-3 lh-tight border-0 active2\" id=\"activeSideBar\"><div class=\"d-flex w-100 align-items-center justify-content-between\"><small style=\"color:"
			 + categoryColor + "\">" + categoryName + " " + charName + "</small></div></a>";
		}
		else
		{
			sideBar.innerHTML += "<a href=\"erwCharSpecific.html?category=" + categoryName + "&id=" + charName + "&index=" + index + "&main=" + charMain +
			"\"class=\"list-group-item list-group-item-action darker py-3 lh-tight border-0\"><div class=\"d-flex w-100 align-items-center justify-content-between\"><small style=\"color:"
			 + categoryColor + "\">" + categoryName + " " + charName + "</small></div></a>";
		}

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
		if (charName === roleSearched)
		{
			linkWeapons.innerHTML += "<a href=\"erwCharSpecific.html?category=" + categoryName + "&id=" + charName + 
			"&index=" + index + "&main=" + charMain + "\"style=\"color:"+ categoryColor + "\">" + categoryName + " " + charName + "</a><br>";
		}

		if (index === indexSearched-1)
		{
			backLink.innerHTML += "<a href=\"erwCharSpecific.html?category=" + categoryName + "&id=" + charName + 
			"&index=" + index + "&main=" + charMain + "\"style=\"color:"+ categoryColor + "\">" + categoryName + " " + charName + "</a>";
		}
		if (index === indexSearched+1)
		{
			nextLink.innerHTML += "<a href=\"erwCharSpecific.html?category=" + categoryName + "&id=" + charName + 
			"&index=" + index + "&main=" + charMain + "\"style=\"color:" + categoryColor + "\">" + categoryName + " " + charName + "</a>";
		}
		index += 1;
	}
}
document.getElementById("activeSideBar").scrollIntoView();

//For main page
for (let i = 0; i < chars.length; i++)
{
	var category = chars[i];

	//Check category name
	var categoryName = Object.keys(category)[0];
	if (categoryName === categorySearched)
	{
		var charList = Object.values(category)[0]["CharList"];
		for (let j = 0; j < charList.length; j++)
		{
			var char = charList[j];
			if (char["Name"] === roleSearched)
			{
				head.style.color = char["Color"];
				content.style.color = char["Color"];
				var imageSource = char["Image"];
				imagePic.src = imageSource;
				head.innerHTML += roleSearched;
				content.innerHTML += "<h5>" + categoryName + "</h5><br>";
				content.innerHTML += "<br>Lore: <br>" + char["Lore"];
				content.innerHTML += "<br><br>Description: <br>" + char["Description"];
				content.innerHTML += "<br><br>Role: " + char["Role"];
				content.innerHTML += "<br>Difficulty: " + char["Difficulty"];
				content.innerHTML += "<br>Power Spike: " + char["Power Spike"];
				content.innerHTML += "<br>HP: " + char["HP"];
				content.innerHTML += "<br>Basic Attack (" + char["Basic Attack Cooldown"] + "): " + char["Basic Attack"];

				content.innerHTML += "<br><br><h5>Actions: </h5><br>";
				var lvl1 = char["Level 1"];
				if (lvl1.length > 0)
				{				
					content.innerHTML += "<h5>Level 1 </h5><br>";
					for (let k = 0; k < lvl1.length; k++)
					{
						content.innerHTML += lvl1[k] + "<br><br>";
					}
				}

				var lvl4 = char["Level 4"];
				if (lvl4.length > 0)
				{				
					content.innerHTML += "<h5>Level 4 </h5><br>";
					for (let k = 0; k < lvl4.length; k++)
					{
						content.innerHTML += lvl4[k] + "<br><br>";
					}
				}

				var lvl7 = char["Level 7"];
				if (lvl7.length > 0)
				{				
					content.innerHTML += "<h5>Level 7 </h5><br>";
					for (let k = 0; k < lvl7.length; k++)
					{
						content.innerHTML += lvl7[k] + "<br><br>";
					}
				}

				var lvl10 = char["Level 10"];
				if (lvl10.length > 0)
				{				
					content.innerHTML += "<h5>Level 10 </h5><br>";
					for (let k = 0; k < lvl10.length; k++)
					{
						content.innerHTML += lvl10[k] + "<br><br>";
					}
				}

				var passives = char["Passives"];
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