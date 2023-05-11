const content = document.getElementById("content");

var aaList = [[],[],[],[],[]];

//For list
for (let i = 0; i < roles.length; i++)
{
	var category = roles[i];

	var roleList = Object.values(category)[0];
	var categoryColor = roleList[0]["Color"];

	var categoryName = Object.keys(category);

	for (let j = 0; j < roleList.length; j++)
	{
		var role = roleList[j];
		var abilities = role["Abilities"];
		if (abilities.length > 0)
		{				
			for (let k = 0; k < abilities.length; k++)
			{
				var abilitySplit = abilities[k].split("-");
				var abilityTup = [];
				abilityTup.push(abilitySplit[0]); //name
				abilityTup.push(abilitySplit[3]); //cost
				var desc = abilitySplit.slice(4).join("-");
				abilityTup.push(desc);

				if (abilitySplit[2] === " Common ")
				{
					aaList[0].push(abilityTup);
				}
				else if (abilitySplit[2] === " Uncommon ")
				{
					aaList[1].push(abilityTup);
				}
				else if (abilitySplit[2] === " Rare ")
				{
					aaList[2].push(abilityTup);
				}
				else if (abilitySplit[2] === " Epic ")
				{
					aaList[3].push(abilityTup);
				}
				else if (abilitySplit[2] === " Legendary ")
				{
					aaList[4].push(abilityTup);
				}
			}
		}
	}
}

function alphabetSort(a, b)
{
	if (a[0] > b[0])
	{
		return 1;
	}
	else if (a[0] < b[0])
	{
		return -1;
	}
	return 0;
}

var categoryNames = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
var categoryColors = ["lime", "cyan", "CornflowerBlue", "red", "magenta"];
for (let i = 0; i < aaList.length; i++)
{
	aaList[i].sort(alphabetSort);
	content.innerHTML += "<span style=\"color:" + categoryColors[i] + "\">" + categoryNames[i] + "</span><br><br>";
	for (let j = 0; j < aaList[i].length; j++)
	{
		content.innerHTML += "<span style=\"color:" + categoryColors[i] + "\">" + aaList[i][j][0] + " - " + aaList[i][j][1] + "</span><span class=\"roleSummary enabled\" style=\"color:" + categoryColors[i] + "\"> - " + aaList[i][j][2] + "</span><br>";
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