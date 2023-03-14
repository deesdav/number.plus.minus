const number = document.getElementById("number");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.onclick = () => {
    number.innerHTML++;
}
minus.onclick = () => {
    number.innerHTML--;
}
plus.onmouseover = () => {
    plus.style.background = "white";
    plus.style.color = "black";
}
minus.onmouseover = () => {
    minus.style.background = "white";
    minus.style.color = "black";
}
plus.onmouseout = () => {
    plus.style.background = "#009dff";
    plus.style.color = "white";
}
minus.onmouseout = () => {
    minus.style.background = "#009dff";
    minus.style.color = "white";
}