/*
	Dominik Yakoubek
	CPSC 280 A8
*/

var today = new Date();

//Add month and year fields
function generateForm() 
{
    var monthOptions = "";
    var yearOptions = "";
    for(var m = today.getMonth()+1; m <= 12; m++)
    {
        //default to current month
        if(today.getMonth() === m-1)
        {
            monthOptions += "<option selected value=\"" + m + "\">"+m+"</option>";
        }
        else 
        {
            monthOptions += "<option value=\"" + m + "\">"+m+"</option>";
        }
    }
    
    document.getElementById("month").innerHTML=monthOptions;
    
    yearOptions += "<option selected value=\"" + today.getFullYear() + "\">"+today.getFullYear()+"</option>";
    yearOptions += "<option value=\"" + (today.getFullYear()+1) + "\">"+(today.getFullYear()+1)+"</option>";
    yearOptions += "<option value=\"" + (today.getFullYear()+2) + "\">"+(today.getFullYear()+2)+"</option>";

    document.getElementById("year").innerHTML = yearOptions;
    genFormDays(true);
}

//TODO: Have months update as well so past months and days aren't shown.
//Gets dates in month selected and updates number of days
function genFormDays(firstLoad)
{
    var mInput = document.getElementById("month");
    var m = mInput.options[mInput.selectedIndex].value;
    var yInput = document.getElementById("year");
    var y = yInput.options[yInput.selectedIndex].value;
	var dInput = document.getElementById("day");
    var day = parseInt(dInput.options[dInput.selectedIndex].value);
    var daysInMonth = new Date(2018+parseInt(y),m,0).getDate();
	var dayOptions = "";

	for(var d = 1; d <= daysInMonth; d++)
	{
			if((d === day && daysInMonth+1 > day) || firstLoad && d === today.getDate())
            {
                //if selected date is still valid, keep it. 
				dayOptions += "<option selected value=\"" + d + "\">"+d+"</option>";
			}
			else if(today.getYear()+1900 < y || (m > today.getMonth()+1) || d > today.getDate())
			{
				dayOptions += "<option value=\"" + d + "\">"+d+"</option>";
			}
	}
	document.getElementById("day").innerHTML=dayOptions;
	genFormMonths();
}

function genFormMonths()
{
	var mInput = document.getElementById("month");
    var mon = mInput.options[mInput.selectedIndex].value;
	var monthOptions = "";
	var yInput = document.getElementById("year");
    var y = parseInt(yInput.options[yInput.selectedIndex].value);
    for(var m = 1; m <= 12; m++)
    {
		if(today.getYear()+1900 !== y || m >= today.getMonth()+1)
		{
			if(m === parseInt(mon))
			{
				monthOptions += "<option selected value=\"" + m + "\">"+m+"</option>";
			}
			else 
			{
				monthOptions += "<option value=\"" + m + "\">"+m+"</option>";
			}
		}
    }
	document.getElementById("month").innerHTML=monthOptions;
}

window.onload = function () {
    generateForm(true);
};