window.onload = (event) => {
    setTimeout(function () {
        document.getElementById("full-time").classList.remove("prevent-animation");
    }, 200);
};

function openTab(evt, type) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablinks");

    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(type).style.display = "block";
    evt.currentTarget.classList.add("active");
}