//source: https://www.ethanstowellrestaurants.com/locations/staple-fancy/dinner-menu/
var menu = [
    {
        name: "Hanger Steak",
        price: "25",
        img: "assets/imgs/steak.jpg",
        desc: "confit sunchokes, mushrooms, red wine",
        cal: "740"
    },
    {
        name: "Duck Breast",
        price: "22",
        img: "assets/imgs/dbreast.jpg",
        desc: "aged balsamic, squash, farro",
        cal: "620"
    },
    {
        name: "Whole Fish",
        price: "30",
        img: "assets/imgs/fish.jpg",
        desc: "brown butter, caper, citrus, parsley",
        cal: "800"
    },
    {
        name: "Spaghetti Nero",
        price: "18",
        img: "assets/imgs/snero.jpg",
        desc: "garlic, chili, olive oil, lemon pangratatto, bottarga",
        cal: "680"
    },
    {
        name: "Bruschetta",
        price: "10",
        img: "assets/imgs/brush.jpg",
        desc: "smoked fish, lemon, pickled onion",
        cal: "460"
    },
    {
        name: "Fried Oysters",
        price: "14",
        img: "assets/imgs/oys.jpg",
        desc: "fennel salad, calabrian chili aioli, lemon",
        cal: "440"
    },
    {
        name: "Beef Carpaccio ",
        price: "16",
        img: "assets/imgs/beefcap.jpg",
        desc: "white anchovy. truffle vinaigrette, chives, caper",
        cal: "520"
    },
    {
        name: "Nettle Ravioli",
        price: "23",
        img: "assets/imgs/rav.jpg",
        desc: "ricotta, sorrel, sunflower seed pesto",
        cal: "700"
    },
    {
        name: "Baby Lettuces",
        price: "10",
        img: "assets/imgs/let.jpg",
        desc: "champagne vinaigrette, radish, crouton",
        cal: "320"
    },
    {
        name: "Marble Potatoes",
        price: "10",
        img: "assets/imgs/marpat.jpg",
        desc: "roasted confit garlic, fried herbs",
        cal: "560"
    },
];


window.onload = function () 
{
    var menuStr = "";
    menu.forEach(i => {
        menuStr += "<div>\n         <div class=\"card bg-dark text-white\">\n            <div class=\"card-body\">\n               <h5 class=\"card-title\">" +i.name+ "<\/h5>\n               <h6 class=\"card-subtitle mb-2 text-muted\">$"+i.price+"<\/h6>\n               <img class=\"card-img-top\" src=\""+i.img+"\" alt=\"Card image cap\">\n               <p class=\"card-text\">"+i.desc+"<\/p>\n               <span class=\"cal\">Calories: "+i.cal+"<\/span>\n            <\/div>\n         <\/div>\n      <\/div>";
    });
    document.getElementById("menu-content").innerHTML = menuStr;
};
