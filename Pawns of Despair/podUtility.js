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

//Vars to calc the dmg, heal, shield, reduct, amp, buffs, debuffs
var dmgCalc = 0;
var healCalc = 0;
var shieldCalc = 0;
var reductCalc = 0;
var ampCalc = 0;
var buffCalc = 0;
var debuffCalc = 0;

function Calculate()
{
	NumericalCalcs();

	var resA = "Attacker: " + "<br>";
	resA += HPDmgChangeAtt();
	resA += HPHealChangeAtt();
	resA += APChangeAtt();
	resA += RangeChangeAtt();
	resA += ReductionChangeAtt();
	resD += AmpChangeAtt();
	resA += BuffChangeAtt();
	resA += StatusChangeAtt();
	resA += PositionChangeAtt();
	resultsA.innerHTML = resA;

	var resD = "Defender: " + "<br>";
	resD += HPChangeDef();
	resD += APChangeDef();
	resD += RangeChangeDef();
	resD += ReductionChangeDef();
	resD += AmpChangeDef();
	resD += BuffChangeDef();
	resD += StatusChangeDef();
	resultsD.innerHTML = resD;
}

function NumericalCalcs()
{
	buffCalc = ((utilityInputFieldCalc(strengthenD) + utilityInputFieldCalc(strengthenA))
	 - (utilityInputFieldCalc(weakenD) + utilityInputFieldCalc(weakenA))) / 100;
	debuffCalc = ((utilityInputFieldCalc(suppressD) + utilityInputFieldCalc(suppressA))
	 - (utilityInputFieldCalc(tenacityD) + utilityInputFieldCalc(tenacityA))) / 100;

	reductCalc = 0;
	ampCalc = 0;

	dmgCalc = 0;
	healCalc = ((utilityInputFieldCalc(heal)));
	shieldCalc = ((utilityInputFieldCalc(shieldA)));
}

function utilityInputFieldCalc(value)
{
	if (value.value == "")
	{
		return 0;
	}
	return parseInt(value.value);
}

//Attacker
function HPDmgChangeAtt()
{
	var damageChangeAtt = "";
	return damageChangeAtt + "<br>";
}

function HPHealChangeAtt()
{
	var healChangeAtt = "";
	return healChangeAtt + "<br>";
}

function APChangeAtt()
{
	if (hasteA.value == "" && slowA.value == "")
	{
		return "";
	}
	var apChangeAtt = "";
	var curHasteA = utilityInputFieldCalc(hasteA);
	var curSlowA = utilityInputFieldCalc(slowA);
	var innerHaste = curHasteA + (curHasteA * buffCalc);
	var innerSlow = curSlowA + (curSlowA * debuffCalc);
	var formula = parseInt(innerHaste) - parseInt(innerSlow);
	apChangeAtt = "AP Change: " + formula.toString();
	return apChangeAtt + "<br>";
}

function RangeChangeAtt()
{
	var rangeChangeAtt = "";
	return rangeChangeAtt + "<br>";
}

function ReductionChangeAtt()
{
	var reductChangeAtt = "";
	return reductChangeAtt + "<br>";
}

function AmpChangeAtt()
{
	var ampChangeAtt = "";
	return ampChangeAtt + "<br>";
}

function BuffChangeAtt()
{
	var buffChangeAtt = "";
	return buffChangeAtt + "<br>";
}

function StatusChangeAtt()
{
	var statusChangeAtt = "";
	return statusChangeAtt + "<br>";
}

function PositionChangeAtt()
{
	var posChangeAtt = "";
	return posChangeAtt + "<br>";
}

//Defender
function HPChangeDef()
{
	var hpChangeDef = "";
	return hpChangeDef + "<br>";
}

function APChangeDef()
{
	if (ap.value == "")
	{
		return "";
	}
	var apChangeDef = "";
	var apVal = utilityInputFieldCalc(ap);
	var curHasteA = utilityInputFieldCalc(hasteA);
	var curSlowA = utilityInputFieldCalc(slowA);
	var curHasteD = utilityInputFieldCalc(hasteD);
	var curSlowD = utilityInputFieldCalc(slowD);
	var innerHaste = curHasteA + (curHasteA * buffCalc);
	var innerSlow = curSlowA + (curSlowA * debuffCalc);

	var formula = (parseInt(curHasteD) - parseInt(curSlowD))
	 + (parseInt(innerHaste) - parseInt(innerSlow));
	var curAP = apVal + formula;
	var origAP = apVal;
	apChangeDef = "Cur/Orig AP: " + curAP.toString() + "/" + origAP.toString();
	return apChangeDef + "<br>";
}

function RangeChangeDef()
{
	var rangeChangeDef = "";
	return rangeChangeDef + "<br>";
}

function ReductionChangeDef()
{
	var reductChangeDef = "";
	return reductChangeDef + "<br>";
}

function AmpChangeDef()
{
	var ampChangeDef = "";
	return ampChangeDef + "<br>";
}

function BuffChangeDef()
{
	var buffChangeDef = "";
	return buffChangeDef + "<br>";
}

function StatusChangeDef()
{
	var statusChangeDef = "";
	return statusChangeDef + "<br>";
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