function toggleVisibility(id) {
    var element = document.getElementById(id);
    var elementBefore = element.previousElementSibling;
    var arrow = elementBefore.querySelector("td").querySelector("div");
    if (element.classList.contains("visible")) {
        element.classList.remove("visible");
        //element.style.visibility = "hidden";
        elementBefore.style.backgroundColor = "transparent";
        setTimeout(function() {
            arrow.classList.replace("arrow-down", "arrow-right");
            element.style.display = "none";
        }, 300);
    } else {
        element.style.display = "table-row";
        elementBefore.style.backgroundColor = "#dae7f1";
        setTimeout(function() {
            element.classList.add("visible");
            arrow.classList.replace("arrow-right", "arrow-down");
        }, 100);
        //element.style.visibility = "visible";
        //element.style.opacity = "1";
        //element.style.color = "#0e1b25";
    }
}