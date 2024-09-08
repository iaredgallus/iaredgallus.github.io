function toggleVisibility(id) {
    var element = document.getElementById(id);
    var elementBefore = element.previousElementSibling;
    var child = element.firstElementChild;
    var arrow = elementBefore.querySelector("td").querySelector("div");
    if (element.classList.contains("visible")) {
        // TURN DISPLAY OFF
        element.classList.remove("visible");
        elementBefore.style.backgroundColor = "transparent";
        setTimeout(function() {
            arrow.classList.replace("arrow-down", "arrow-right");
            child.style.display = "none";
        }, 200);
    } else {
        // TURN DISPLAY ON
        child.style.display = "table-cell";
        elementBefore.style.backgroundColor = "#dae7f1";
        element.classList.add("visible");
        setTimeout(function () {
            arrow.classList.replace("arrow-right", "arrow-down");
        }, 200)
    }
}