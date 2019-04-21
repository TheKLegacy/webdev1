var today = new Date();

function generateForm() 
{
    console.log("test");
    var monthOptions = "";
    var yearOptions = "";
    for(var m = 1; m <= 12; m++)
    {
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
    genFormDays();
}

function genFormDays()
{
    var mInput = document.getElementById("month");
    var m = mInput.options[mInput.selectedIndex].value;
    var yInput = document.getElementById("year");
    var y = mInput.options[yInput.selectedIndex].value;
    var daysInMonth = new Date(2018+parseInt(y),m,0).getDate();
    var dayOptions = "";

    for(var d = 1; d <= daysInMonth; d++)
    {
            dayOptions += "<option value=\"" + d + "\">"+d+"</option>";
    }

    document.getElementById("day").innerHTML=dayOptions;
}

window.onload = function () {
    generateForm();
};