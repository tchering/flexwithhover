const allBoxes = document.querySelectorAll(".box-1, .box-2, .box-3, .box-4, .box-5, .box-6");

allBoxes.forEach((box) => {
    box.addEventListener("mouseover", function () {
        box.style.transform = "translateY(-5%)";
    });

    box.addEventListener("mouseout", function () {
        box.style.transform = "scale(1)";
    });
});
