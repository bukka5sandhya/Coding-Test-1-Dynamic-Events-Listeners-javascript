let myContainerEle = document.getElementById("myContainer")
let createBtnEle = document.getElementById("createBtn");

let headingEle = document.createElement("h1");
headingEle.style.color ="#0000ff"
headingEle.textContent = "Main Heading Element";
createBtnEle.onclick = function (){
    myContainerEle.appendChild(headingEle);
}