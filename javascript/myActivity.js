// Display the image
function mouseOverHandler(event) {
    
    if (event.target.parentNode.className == "row2" || event.target.parentNode.parentNode.className == "row2") {
        document.querySelector(".row2").childNodes[3].childNodes[3].style.display = "inline";
        document.querySelector(".contactsImage").src = "resources/theshire.jpeg";

    } else if (event.target.parentNode.className == "row3" || event.target.parentNode.parentNode.className == "row3") {
        document.querySelector(".row3").childNodes[3].childNodes[3].style.display = "inline";
        document.querySelector(".contactsImage").src = "resources/hogwarts.jpeg";

    } else if (event.target.parentNode.className == "row4" || event.target.parentNode.parentNode.className == "row4") {
        document.querySelector(".row4").childNodes[3].childNodes[3].style.display = "inline";
        document.querySelector(".contactsImage").src = "resources/westeros.jpeg";

    } else if (event.target.parentNode.className == "row5" || event.target.parentNode.parentNode.className == "row5") {
        document.querySelector(".row5").childNodes[3].childNodes[3].style.display = "inline";
        document.querySelector(".contactsImage").src = "resources/mpls.jpeg";

    } else if (event.target.parentNode.className == "row6" || event.target.parentNode.parentNode.className == "row6") {
        document.querySelector(".row6").childNodes[3].childNodes[3].style.display = "inline";
        document.querySelector(".contactsImage").src = "resources/arrakis.jpeg";
    }

}

// Remove the image 
function mouseOutHandler(event) {

    if (event.target.parentNode.className == "row2" || event.target.parentNode.parentNode.className == "row2") {
        document.querySelector(".row2").childNodes[3].childNodes[3].style.display = "none";
        document.querySelector(".contactsImage").src = "resources/contacts.png";

    } else if (event.target.parentNode.className == "row3" || event.target.parentNode.parentNode.className == "row3") {
        document.querySelector(".row3").childNodes[3].childNodes[3].style.display = "none";
        document.querySelector(".contactsImage").src = "resources/contacts.png";

    } else if (event.target.parentNode.className == "row4" || event.target.parentNode.parentNode.className == "row4") {
        document.querySelector(".row4").childNodes[3].childNodes[3].style.display = "none";
        document.querySelector(".contactsImage").src = "resources/contacts.png";

    } else if (event.target.parentNode.className == "row5" || event.target.parentNode.parentNode.className == "row5") {
        document.querySelector(".row5").childNodes[3].childNodes[3].style.display = "none";
        document.querySelector(".contactsImage").src = "resources/contacts.png";

    } else if (event.target.parentNode.className == "row6" || event.target.parentNode.parentNode.className == "row6") {
        document.querySelector(".row6").childNodes[3].childNodes[3].style.display = "none";
        document.querySelector(".contactsImage").src = "resources/contacts.png";
    }

}

// Register event handlers 
document.querySelector(".row2").addEventListener("mouseover", mouseOverHandler);
document.querySelector(".row3").addEventListener("mouseover", mouseOverHandler);
document.querySelector(".row4").addEventListener("mouseover", mouseOverHandler);
document.querySelector(".row5").addEventListener("mouseover", mouseOverHandler);
document.querySelector(".row6").addEventListener("mouseover", mouseOverHandler);

document.querySelector(".row2").addEventListener("mouseout", mouseOutHandler);
document.querySelector(".row3").addEventListener("mouseout", mouseOutHandler);
document.querySelector(".row4").addEventListener("mouseout", mouseOutHandler);
document.querySelector(".row5").addEventListener("mouseout", mouseOutHandler);
document.querySelector(".row6").addEventListener("mouseout", mouseOutHandler);