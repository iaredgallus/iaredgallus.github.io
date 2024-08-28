function toggleVisibility(id) {
    var element = document.getElementById(id);
    var elementBefore = element.previousElementSibling;
    var arrow = elementBefore.querySelector("td").querySelector("div");
    if (element.style.display === "none") {
        element.style.display = "table-row";
        elementBefore.style.backgroundColor = "#dae7f1";
        arrow.classList.replace("arrow-right", "arrow-down");
    } else {
        element.style.display = "none";
        element.previousElementSibling.style.backgroundColor = "white";
        arrow.classList.replace("arrow-down", "arrow-right");
    }
}