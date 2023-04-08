const url = window.location.href;
const indexStart = url.indexOf("?") + 10;
const indexMid = url.indexOf("&") + 4;
const categorySearched = url.slice(indexStart, indexMid-4).replace(/%20/g, " ");
const roleSearched = url.slice(indexMid, url.length).replace(/%20/g, " ");

const head = document.getElementById("head");
const content = document.getElementById("content");
const imagePic = document.getElementById("imagePic");

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