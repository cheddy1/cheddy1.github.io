window.onload = (event) => {
    setTimeout(function () {
        document.getElementById("full-time").classList.remove("prevent-animation");
    }, 200);
    consoleText();
    var internships = document.getElementById('internships');
    var fullTime = document.getElementById('full-time')
    if (window.matchMedia("(max-width: 991px)").matches) {
        internships.style.display = "none";
        fullTime.style.display = "block";
    }
    else {
        var height = document.defaultView.getComputedStyle(internships, "").getPropertyValue("height");
        internships.style.display = "none";
        fullTime.style.display = "block";
        fullTime.style.height = height;
    }
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

function consoleText() {
    var text = ['Hello!']
    var visible = true;
    var con = document.getElementById('console');
    var target = document.getElementById('animated')
    var letterCount = 1;
    var temp = 1;
    var waiting = false;
    window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = text[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedWord = text.shift();
                text.push(usedWord);
                temp = 1;
                letterCount += temp;
                waiting = false;
            }, 1000)
        } else if (letterCount === text[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                temp = -1;
                letterCount += temp;
                waiting = false;
            }, 10000)
        } else if (waiting === false) {
            target.innerHTML = text[0].substring(0, letterCount)
            letterCount += temp;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true && waiting === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore animated'
            visible = true;
        }
    }, 475)
}