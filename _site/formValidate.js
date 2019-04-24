var valid;
var e = (id) => document.getElementById(id);
var err = (ids,str) => {e(ids+"-warning").innerHTML = str; valid = false;};
var emailReg = /\b[A-Z0-9._-]+@[A-Z0-9._-]+\.[A-Z]{2,}$/i;
//Not perfect phone validation but it's 4 am and I think this is decent. 
//regexr.com/4cq22 Used this for testing
var phoneReg =/\b[-\.\s]*[1]*\(*[0-9]{3}\)*[-\.\s]*[0-9]{3}[-\.\s]*[0-9]{4}/i;

function verifyForm()
{
  clearErrs();
  valid = true;
  console.log(e("name").value.length);

  if(e("name").value.length < 2)
  {
      //TODO: Only letters
      err("name","Plese use at least a two letter name");
  }

  if (!phoneReg.test(e("tel").value))
  {
      err("tel","Please enter a valid phone number");
  }

  if(!(e("breakfeast").checked || e("lunch").checked || e("dinner").checked))
  {
      err("meal","Please select a menu");
  }

  if(!emailReg.test(e("email").value))
  {
    err("email","Invalid Email Address");
  }

  if(parseInt(e("numGuests").value) > 60 || parseInt(e("numGuests").value) < 1 || !isNaN(e("numGuests").value))
  {
    err("num","Please enter a valid # guests (1-60)");
  }

  return valid;
}

function clearErrs()
{
  var x = document.getElementsByClassName("warning-msg");
  for (var i = 0; i < x.length; i++)
  {
    x[i].innerHTML = "";
  }
}