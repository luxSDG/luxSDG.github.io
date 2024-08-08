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

//Vars to calc the dmg, heal, shield, buffs, debuffs
var dmgCalc = 0;
var healCalc = 0;
var shieldCalc = 0;
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
	resA += ReductChangeAtt();
	resA += AmpChangeAtt();
	resA += BuffChangeAtt();
	resA += DebuffChangeAtt();
	resA += PosChangeAtt();
	resultsA.innerHTML = resA;

	var resD = "Defender: " + "<br>";
	resD += HPChangeDef();
	resD += APChangeDef();
	resD += RangeChangeDef();
	resD += ReductChangeDef();
	resD += AmpChangeDef();
	resD += BuffChangeDef();
	resD += DebuffChangeDef();
	resultsD.innerHTML = resD;
}

function NumericalCalcs()
{
	buffCalc = ((utilityInputFieldCalc(strengthenD) + utilityInputFieldCalc(strengthenA))
	 - (utilityInputFieldCalc(weakenD) + utilityInputFieldCalc(weakenA))) / 100;
	debuffCalc = ((utilityInputFieldCalc(suppressD) + utilityInputFieldCalc(suppressA))
	 - (utilityInputFieldCalc(tenacityD) + utilityInputFieldCalc(tenacityA))) / 100;

	var reductCalc = ((utilityInputFieldCalc(vulnerableD) + utilityInputFieldCalc(vulnerableA))
	 - (utilityInputFieldCalc(braceD) + utilityInputFieldCalc(braceA))) / 100;
	var ampCalc = (utilityInputFieldCalc(empower) - utilityInputFieldCalc(exhaust)) / 100;

	var dmgTemp = utilityInputFieldCalc(dmg) + 
	((utilityInputFieldCalc(maxHPdmg) / 100) * utilityInputFieldCalc(maxHP)) + 
	((utilityInputFieldCalc(curHPdmg) / 100) * utilityInputFieldCalc(hp));
	dmgCalc = dmgTemp + (dmgTemp * ampCalc) + (dmgTemp * reductCalc);
	var healTemp = utilityInputFieldCalc(heal);
	healCalc = healTemp + (healTemp * ampCalc) + (healTemp * buffCalc);
	var shieldTemp = utilityInputFieldCalc(shieldA);
	shieldCalc = shieldTemp + (shieldTemp * ampCalc) + (shieldTemp * buffCalc);
}

function utilityInputFieldCalc(value)
{
	if (value.value == "")
	{
		return 0;
	}
	return parseInt(value.value);
}

function utilityAttackCalc(buff, debuff)
{
	var curBuff = utilityInputFieldCalc(buff);
	var curDebuff = utilityInputFieldCalc(debuff);
	var innerBuff = curBuff + (curBuff * buffCalc);
	var innerDebuff = curDebuff + (curDebuff * debuffCalc);
	var formula = parseInt(innerBuff) - parseInt(innerDebuff);
	return formula;
}

function utilityDefendCalc(buffA, debuffA, buffD, debuffD)
{
	var curBuffA = utilityInputFieldCalc(buffA);
	var curDebuffA = utilityInputFieldCalc(debuffA);
	var curBuffD = utilityInputFieldCalc(buffD);
	var curDebuffD = utilityInputFieldCalc(debuffD);
	var innerBuff = curBuffA + (curBuffA * buffCalc);
	var innerDebuff = curDebuffA + (curDebuffA * debuffCalc);
	var formula = (parseInt(curBuffD) - parseInt(curDebuffD))
	 + (parseInt(innerBuff) - parseInt(innerDebuff));
	 return formula;
}

//Attacker
function HPDmgChangeAtt()
{
	var damageChangeAtt = "";
	if (dmg.value == "" && maxHPdmg.value == "" && curHPdmg.value == "")
	{
		return damageChangeAtt;
	}
	damageChangeAtt = "Attack: " + dmgCalc.toString();
	return damageChangeAtt + "<br>";
}

function HPHealChangeAtt()
{
	var healChangeAtt = "";
	if (heal.value == "" && shieldA.value == "")
	{
		return healChangeAtt;
	}
	healChangeAtt = "Heal: " + healCalc.toString() + " Shield: " + shieldCalc.toString();
	return healChangeAtt + "<br>";
}

function APChangeAtt()
{
	var apChangeAtt = "";
	if (hasteA.value == "" && slowA.value == "")
	{
		return apChangeAtt;
	}
	var formula = utilityAttackCalc(hasteA, slowA);
	apChangeAtt = "AP Change: " + formula.toString();
	return apChangeAtt + "<br>";
}

function RangeChangeAtt()
{
	var rangeChangeAtt = "";
	if (clarityA.value == "" && disruptA.value == "")
	{
		return rangeChangeAtt;
	}
	var formula = utilityAttackCalc(clarityA, disruptA);
	rangeChangeAtt = "Range Change: " + formula.toString();
	return rangeChangeAtt + "<br>";
}

function ReductChangeAtt()
{
	var reductChangeAtt = "";
	if (braceA.value == "" && vulnerableA.value == "")
	{
		return reductChangeAtt;
	}
	var formula = utilityAttackCalc(braceA, vulnerableA);
	reductChangeAtt = "Reduct Change: " + formula.toString() + "%";
	return reductChangeAtt + "<br>";
}

function AmpChangeAtt()
{
	var ampChangeAtt = "";
	if (empowerA.value == "" && exhaustA.value == "")
	{
		return ampChangeAtt;
	}
	var formula = utilityAttackCalc(empowerA, exhaustA);
	ampChangeAtt = "Amp Change: " + formula.toString() + "%";
	return ampChangeAtt + "<br>";
}

function BuffChangeAtt()
{
	var buffChangeAtt = "";
	if (strengthenA.value == "" && weakenA.value == "")
	{
		return buffChangeAtt;
	}
	var formula = utilityAttackCalc(strengthenA, weakenA);
	buffChangeAtt = "Buff Change: " + formula.toString() + "%";
	return buffChangeAtt + "<br>";
}

function DebuffChangeAtt()
{
	var statusChangeAtt = "";
	if (tenacityA.value == "" && suppressA.value == "")
	{
		return statusChangeAtt;
	}
	var formula = utilityAttackCalc(tenacityA, suppressA);
	statusChangeAtt = "Debuff Change: " + formula.toString() + "%";
	return statusChangeAtt + "<br>";
}

function PosChangeAtt()
{
	var posChangeAtt = "";
	if (push.value == "" && pull.value == "")
	{
		return posChangeAtt;
	}
	var formula = utilityAttackCalc(push, pull);
	//Push is positive, pull is negative
	if (formula > 0)
	{
		posChangeAtt = "Pushed: " + formula.toString();
	}
	else
	{
		posChangeAtt = "Pulled: " + (-formula).toString();
	}
	return posChangeAtt + "<br>";
}

//Defender
function HPChangeDef()
{
	var hpChangeDef = "";
	var maxHPVal = utilityInputFieldCalc(maxHP);
	var shieldVal = utilityInputFieldCalc(shieldD) + shieldCalc - dmgCalc;
	var curHPVal = utilityInputFieldCalc(hp) + healCalc;

	//Damage remaining damage after damaging through shield
	if (shieldVal > 0)
	{
		curHPVal -= dmgCalc;
	}
	else
	{
		curHPVal -= shieldVal;
		shieldVal = 0;
	}

	//Healing over max HP
	if (curHPVal > maxHPVal)
	{
		curHPVal = maxHPVal;
	}

	hpChangeDef = "Cur/Max HP/Shield: " + curHPVal.toString() + "/" + maxHPVal.toString() + "/" + shieldVal.toString();
	return hpChangeDef + "<br>";
}

function APChangeDef()
{
	var apChangeDef = "";
	if (ap.value == "")
	{
		return apChangeDef;
	}
	var formula = utilityDefendCalc(hasteA, slowA, hasteD, slowD);
	var apVal = utilityInputFieldCalc(ap);
	var curAP = apVal + formula;
	var origAP = apVal;
	apChangeDef = "Cur/Orig AP: " + curAP.toString() + "/" + origAP.toString();
	return apChangeDef + "<br>";
}

function RangeChangeDef()
{
	var rangeChangeDef = "";
	if (range.value == "")
	{
		return rangeChangeDef;
	}
	var formula = utilityDefendCalc(clarityA, disruptA, clarityD, disruptD);
	var rangeVal = utilityInputFieldCalc(range);
	var curRange = rangeVal + formula;
	rangeChangeDef = "Cur Range: " + curRange.toString();
	return rangeChangeDef + "<br>";
}

function ReductChangeDef()
{
	var reductChangeDef = "";
	if (braceA.value == "" && vulnerableA.value == "" && braceD.value == "" && vulnerableD.value == "")
	{
		return reductChangeDef;
	}
	var formula = utilityDefendCalc(braceA, vulnerableA, braceD, vulnerableD);
	reductChangeDef = "Cur Reduction: " + formula.toString() + "%";
	return reductChangeDef + "<br>";
}

function AmpChangeDef()
{
	var ampChangeDef = "";
	if (empowerA.value == "" && exhaustA.value == "" && empowerD.value == "" && exhaustD.value == "")
	{
		return ampChangeDef;
	}
	var formula = utilityDefendCalc(empowerA, exhaustA, empowerD, exhaustD);
	ampChangeDef = "Cur Amplification: " + formula.toString() + "%";
	return ampChangeDef + "<br>";
}

function BuffChangeDef()
{
	var buffChangeDef = "";
	if (strengthenA.value == "" && weakenA.value == "" && strengthenD.value == "" && weakenD.value == "")
	{
		return buffChangeDef;
	}
	var formula = utilityDefendCalc(strengthenA, weakenA, strengthenD, weakenD);
	buffChangeDef = "Cur Buff: " + formula.toString() + "%";
	return buffChangeDef + "<br>";
}

function DebuffChangeDef()
{
	var statusChangeDef = "";
	if (tenacityA.value == "" && suppressA.value == "" && tenacityD.value == "" && suppressD.value == "")
	{
		return statusChangeDef;
	}
	var formula = utilityDefendCalc(tenacityA, suppressA, tenacityD, suppressD);
	statusChangeDef = "Cur Debuff: " + formula.toString() + "%";
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

	resultsA.innerHTML = "";
	resultsD.innerHTML = "";
}