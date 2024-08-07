//PoD Utility

//Attack/Heal
const dmg = document.getElementById("dmg");
const maxHPdmg = document.getElementById("maxHPdmg");
const curHPdmg = document.getElementById("curHPdmg");
const empower = document.getElementById("empower");
const exhaust = document.getElementById("exhaust");
const heal = document.getElementById("heal");
const shieldA = document.getElementById("shieldA");

//Status
const slowA = document.getElementById("slowA");
const disruptA = document.getElementById("disruptA");
const vulnerableA = document.getElementById("vulnerableA");
const exhaustA = document.getElementById("exhaustA");
const weakenA = document.getElementById("weakenA");
const suppressA = document.getElementById("suppressA");
const push = document.getElementById("push");
const pull = document.getElementById("pull");

//Buff
const hasteA = document.getElementById("hasteA");
const clarityA = document.getElementById("clarityA");
const braceA = document.getElementById("braceA");
const empowerA = document.getElementById("empowerA");
const strengthenA = document.getElementById("strengthenA");
const tenacityA = document.getElementById("tenacityA");

//Stats
const hp = document.getElementById("hp");
const maxHP = document.getElementById("maxHP");
const shieldD = document.getElementById("shieldD");
const ap = document.getElementById("ap");
const range = document.getElementById("range");

//buffs
const hasteD = document.getElementById("hasteD");
const clarityD = document.getElementById("clarityD");
const braceD = document.getElementById("braceD");
const empowerD = document.getElementById("empowerD");
const strengthenD = document.getElementById("strengthenD");
const tenacityD = document.getElementById("tenacityD");

//stats
const slowD = document.getElementById("slowD");
const disruptD = document.getElementById("disruptD");
const vulnerableD = document.getElementById("vulnerableD");
const exhaustD = document.getElementById("exhaustD");
const weakenD = document.getElementById("weakenD");
const suppressD = document.getElementById("suppressD");

//Results
const resultsA = document.getElementById("resultsA");
const resultsD = document.getElementById("resultsD");

function Calculate()
{
	var resA = "Attacker: " + "<br>";
	resA += HPDmgChangeAtt() + "<br>";
	resA += HPHealChangeAtt() + "<br>";
	resA += APChangeAtt() + "<br>";
	resA += RangeChangeAtt() + "<br>";
	resA += ReductionChangeAtt() + "<br>";
	resD += DmgChangeAtt() + "<br>";
	resA += BuffChangeAtt() + "<br>";
	resA += StatusChangeAtt() + "<br>";
	resA += PositionChangeAtt() + "<br>";
	resultsA.innerHTML = resA;

	var resD = "Defender: " + "<br>";
	resD += HPChangeDef() + "<br>";
	resD += APChangeDef() + "<br>";
	resD += RangeChangeDef() + "<br>";
	resD += ReductionChangeDef() + "<br>";
	resD += DmgChangeDef() + "<br>";
	resD += BuffChangeDef() + "<br>";
	resD += StatusChangeDef() + "<br>";
	resultsD.innerHTML = resD;
}

//Attacker
function HPDmgChangeAtt()
{
	var damageChangeAtt = "";
	return damageChangeAtt;
}

function HPHealChangeAtt()
{
	var healChangeAtt = "";
	return healChangeAtt;
}

function APChangeAtt()
{
	var apChangeAtt = "";
	return apChangeAtt;
}

function RangeChangeAtt()
{
	var rangeChangeAtt = "";
	return rangeChangeAtt;
}

function ReductionChangeAtt()
{
	var reductChangeAtt = "";
	return reductChangeAtt;
}

function DmgChangeAtt()
{
	var dmgChangeAtt = "";
	return dmgChangeAtt;
}

function BuffChangeAtt()
{
	var buffChangeAtt = "";
	return buffChangeAtt;
}

function StatusChangeAtt()
{
	var statusChangeAtt = "";
	return statusChangeAtt;
}

function PositionChangeAtt()
{
	var posChangeAtt = "";
	return posChangeAtt;
}

//Defender
function HPChangeDef()
{
	var hpChangeDef = "";
	return hpChangeDef;
}

function APChangeDef()
{
	var apChangeDef = "";
	return apChangeDef;
}

function RangeChangeDef()
{
	var rangeChangeDef = "";
	return rangeChangeDef;
}

function ReductionChangeDef()
{
	var reductChangeDef = "";
	return reductChangeDef;
}

function DmgChangeDef()
{
	var dmgChangeDef = "";
	return dmgChangeDef;
}

function BuffChangeDef()
{
	var buffChangeDef = "";
	return buffChangeDef;
}

function StatusChangeDef()
{
	var statusChangeDef = "";
	return statusChangeDef;
}

function Clear()
{
	dmg.value = '';
	maxHPdmg.value = '';
	curHPdmg.value = '';
	empower.value = '';
	exhaust.value = '';
	heal.value = '';
	shieldA.value = '';

	slowA.value = '';
	disruptA.value = '';
	vulnerableA.value = '';
	exhaustA.value = '';
	weakenA.value = '';
	suppressA.value = '';
	push.value = '';
	pull.value = '';

	hasteA.value = '';
	clarityA.value = '';
	braceA.value = '';
	empowerA.value = '';
	strengthenA.value = '';
	tenacityA.value = '';

	hp.value = '';
	maxHP.value = '';
	shieldD.value = '';
	ap.value = '';
	range.value = '';

	hasteD.value = '';
	clarityD.value = '';
	braceD.value = '';
	empowerD.value = '';
	strengthenD.value = '';
	tenacityD.value = '';

	slowD.value = '';
	disruptD.value = '';
	vulnerableD.value = '';
	exhaustD.value = '';
	weakenD.value = '';
	suppressD.value = '';
}