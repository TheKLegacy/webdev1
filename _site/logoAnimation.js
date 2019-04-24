var then = Date.now();
var c = document.getElementById("logo");
c.width = $("#logo-container").width();
c.height = $("#logo-container").height() - $("#mynav").height();
var ctx = c.getContext("2d");
ctx.font = c.width*0.12 + "px Lobster";
ctx.textAlign = "center";
var alpha = 0;

function onTimerTick()
{  
    ctx.globalAlpha = alpha;
    alpha = (alpha > 1)? 1 : alpha + 0.0005;
    ctx.strokeStyle = "#fff";
    if(c.width >= 768 && c.height > 680)
    {
        ctx.strokeText("Dom's Fancy Dining", c.width/2, c.height/2-110);
    }
    if(c.height <= 719)
        {
            $("#welcome").css("bottom", "40px");
        }
}

window.onresize = function () {
    c.width = $("#logo-container").width();
    c.height = $("#logo-container").height() - $("#mynav").height();
    console.log(c.height);
    if(c.width >= 768 && c.height > 680)
    {
        $("#logo").css("opacity", "100");
        ctx.font = c.width*0.12 + "px Lobster";
        ctx.textAlign = "center";
        ctx.strokeStyle = "#fff";
        ctx.strokeText("Dom's Fancy Dining", c.width/2, c.height/2-110);
    }
    else
    {
        $("#logo").css("opacity", "0");
        if(c.height <= 719)
        {
            $("#welcome").css("bottom", "40px");
        }
    }
};

window.onload = function () {
    $("#welcome").fadeIn(2600).css("display", "inline-block");
    setInterval(onTimerTick, 33);
    $("#mynav").fadeIn(2600).css("display", "inline-block");
    setInterval(onTimerTick, 33);
    $("#foot").css("display", "none");
};