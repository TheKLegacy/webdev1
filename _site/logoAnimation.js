var then = Date.now();
var c = document.getElementById("logo");
c.width = $("#logo-container").width();
c.height = $("#logo-container").height() - $("#mynav").height();
document.getElementById("logo-container").style.height = c.height+"px";
var ctx = c.getContext("2d");
ctx.font = c.width*0.12 + "px Lobster";
ctx.textAlign = "center";
var alpha = 0;

function onTimerTick()
{  
    ctx.globalAlpha = alpha;
    alpha = (alpha > 1)? 1 : alpha + 0.0005;
    ctx.strokeStyle = "#fff";
    if(c.width > 800 && c.height > 500)
    {
        ctx.strokeText("Dom's Fancy Dining", c.width/2, c.height/2-60);
    }
}

window.onresize = function () {
    c.width = $("#logo-container").width();
    if(c.width > 800 && c.height > 500)
    {
        $("#logo").css("opacity", "100");
        ctx.font = c.width*0.12 + "px Lobster";
        ctx.textAlign = "center";
        ctx.strokeStyle = "#fff";
        ctx.strokeText("Dom's Fancy Dining", c.width/2, c.height/2-60);
    }
    else
    {
        $("#logo").css("opacity", "0");
    }
};

window.onload = function () {
    $("#welcome").fadeIn(5000).css("display", "inline-block");
    $("#mynav").fadeIn(5000).css("display", "inline-block");
    setInterval(onTimerTick, 33);
};