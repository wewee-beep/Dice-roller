const countlabel = document.getElementById("countlabel")
const resetbtn = document.getElementById("resetbtn")
const decreasebtn = document.getElementById("decreasebtn")
const increasebtn = document.getElementById("increasebtn")
const increaseby10 = document.getElementById("increase10btn")
const decreaseby10 = document.getElementById("decrease10btn")
const increaseby100 = document.getElementById("increase100btn")
const decreaseby100 = document.getElementById("decrease100btn")
const increaseby1000 = document.getElementById("increase1000btn")
const decreaseby1000 = document.getElementById("decrease1000btn")
const increaseby10000 = document.getElementById("increase10000btn")
const decreaseby10000 = document.getElementById("decrease10000btn")
const increaseby100000 = document.getElementById("increase100000btn")
const decreaseby100000 = document.getElementById("decrease100000btn")
const sqrt = document.getElementById("sqrt")
const square = document.getElementById("squarebtn")
let count = 0;
increaseby100000.onclick = function(){count = count+100000;countlabel.textContent = count.toFixed(2);}
increaseby10000.onclick = function(){count = count+10000;countlabel.textContent = count.toFixed(2);}
increaseby1000.onclick = function(){count = count+1000;countlabel.textContent = count.toFixed(2);}
increaseby100.onclick = function(){count = count+100;countlabel.textContent = count.toFixed(2);}
increaseby10.onclick = function(){count = count+10;countlabel.textContent = count.toFixed(2);}
increasebtn.onclick = function(){ count++;countlabel.textContent = count.toFixed(2);}
decreasebtn.onclick = function(){count--;countlabel.textContent = count.toFixed(2);}
decreaseby10.onclick = function(){count = count-10;countlabel.textContent = count.toFixed(2);}
decreaseby100.onclick = function(){count = count-100;countlabel.textContent = count.toFixed(2);}
decreaseby1000.onclick = function(){count = count-1000; countlabel.textContent = count.toFixed(2);}
decreaseby10000.onclick = function(){count = count-10000;countlabel.textContent = count.toFixed(2);}
decreaseby100000.onclick = function(){count = count-100000;countlabel.textContent = count.toFixed(2);}
resetbtn.onclick = function(){count=0;countlabel.textContent = count;}
sqrt.onclick = function(){count = Math.sqrt(count); countlabel.textContent = count.toFixed(2);}
square.onclick = function(){count = count**2; countlabel.textContent = count.toFixed(2);}
