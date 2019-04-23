var e = (id) => document.getElementById(id);
var err = (ids,str) => e(ids+"-warning").innerHTML = str;
var vis = (ids) => e(ids+"-warning").style.display = "inline-block";
var emailReg = /\b[A-Z0-9._-]+@[A-Z0-9._-]+\.[A-Z]{2,}$/i;

function verifyForm()
{
  clearErrs();
  var valid = true;

  if(e("color").value == "empty")
  {
      valid = false;
      err("color","Please Select a color");
      vis("color");
  }

  if (!(e("2dr").checked || e("4dr").checked))
  {
      valid = false;
      err("dr","Please Select # of doors");
      vis("dr");
  }
  else if(e("4dr").checked && e("sun").checked)
  {
    valid = false;
    err("dr","Sunroofs are only availiable one two door car models. <br> Please select two door or uncheck sunroof.");
    vis("dr");
  }

  if(e("dealer").value == "" && !zipReg.test(e("zip").value) || e("dealer").value != "" && zipReg.test(e("zip").value))
  {
    valid = false;
    err("dealer","Please enter a valid zip or dealer, not both");
    vis("dealer");
  }

  if(e("nm").value == "")
  {
      valid = false;
      err("name","Please enter a name");
      vis("name");
  }

  if(!emailReg.test(e("addr").value))
  {
    valid = false;
    err("email","Invalid Email Address");
    vis("email");
  }

  return valid;
}

function clearErrs()
{
  var x = document.getElementsByClassName("warning-msg");
  for (var i = 0; i < x.length; i++)
  {
    x[i].style.display = "none";
  }
}
