function showAnswer(el1, el2){
    var element1 = document.getElementById(el1);
    var element2 = document.getElementById(el2);
    element1.style.transform = "perspective(600px) rotateY(-180deg)";
    element2.style.transform = "perspective(600px) rotateY(0deg)";
}

function hideAnswer(el1, el2) {
    var element1 = document.getElementById(el1);
    var element2 = document.getElementById(el2);
    element1.style.transform = "perspective(600px) rotateY(0deg)";
    element2.style.transform = "perspective(600px) rotateY(180deg)";
}

function copyText(containerid) {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection()) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
    document.execCommand("copy");
}

<!-- Javascript controlling the click functionality for the collapsible boxes -->
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}