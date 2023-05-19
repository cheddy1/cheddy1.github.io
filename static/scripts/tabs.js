function openTab(evt, type) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablinks");

    if (evt.currentTarget.classList.contains("active")) {
        document.getElementById(type).style.display = "none";
        evt.currentTarget.classList.remove("active");
    } else {
        for (var i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active");
        }
        document.getElementById(type).style.display = "block";
        evt.currentTarget.classList.add("active");
    }
}