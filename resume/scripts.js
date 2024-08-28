function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "table-row";
        element.previousElementSibling.style.backgroundColor = "#dae7f1";
        //element.previousElementSibling.children.style.backgroundColor = "#dae7f1";
    } else {
        element.style.display = "none";
        element.previousElementSibling.style.backgroundColor = "white";
    }
}