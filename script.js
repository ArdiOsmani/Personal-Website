function toggleLeftSide() {
    var leftSide = document.querySelector(".left-side");
    var rightSide = document.querySelector(".right-side");
    var button = document.querySelector(".btn");
    var h2Elements = document.querySelectorAll("h2");

    if (leftSide.style.width === "47px") {
        leftSide.style.width = "150px";
        rightSide.style.width = "calc(100% - 150px)";
        button.style.width = "150px";

        setTimeout(function () {
            for (var i = 0; i < h2Elements.length; i++) {
                h2Elements[i].style.transition = "opacity 0.3s";
                h2Elements[i].style.opacity = "1";
            }
        }, 200);

    } else {
        leftSide.style.width = "47px";
        rightSide.style.width = "calc(100% - 47px)";
        button.style.width = "47px";

        for (var i = 0; i < h2Elements.length; i++) {
            h2Elements[i].style.transition = "opacity 0s";
            h2Elements[i].style.opacity = "0";
        }
    }
}