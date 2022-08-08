var color=document.getElementById("colour")
color.style.backgroundColor ="silver"

var newcolor=document.getElementById("title")
newcolor.style.color="green"

document.getElementById("fruits").style.textTransform="uppercase";
document.getElementById("vegetable").style.textTransform="uppercase"

var newlist = document.createElement("li");
var newfruit = document.createTextNode("cherry");
newlist.appendChild(newfruit);
var element = document.getElementById("fruitList");
element.appendChild(newlist);

var newlist2=document.createElement("li");
var newvegetable=document.createTextNode("potatoes");
newlist2.appendChild(newvegetable)
var newelement=document.getElementById("vegetableList");
newelement.appendChild(newlist2)
