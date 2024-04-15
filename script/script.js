// button events
document.getElementById("calculate-triangle").addEventListener("click", function () {
    const area = calculate("triangle-land", "triangle-height", 0.5);
    if (isNaN(area)) {
        return;
    }
    displayData("triangle", area);
});
document.getElementById("calculate-rectangle").addEventListener("click", function () {
    const area = calculate("rectangle-width", "rectangle-height", 1);
    if (isNaN(area)) {
        return;
    }
    displayData("rectangle", area);
});
document.getElementById("calculate-parallelogram").addEventListener("click", function () {
    const area = calculate("parallelogram-width", "parallelogram-height", 1);
    if (isNaN(area)) {
        return;
    }
    displayData("parallelogram", area);
});
document.getElementById("calculate-rhombus").addEventListener("click", function () {
    const area = calculate("rhombus-width", "rhombus-height", 0.5);
    if (isNaN(area)) {
        return;
    }
    displayData("rhombus", area);
});
document.getElementById("calculate-pentagon").addEventListener("click", function () {
    const area = calculate("pentagon-height", "pentagon-width", 0.5);
    if (isNaN(area)) {
        return;
    }
    displayData("pentagon", area);
});
document.getElementById("calculate-ellipse").addEventListener("click", function () {
    const area = calculate("ellipse-height", "ellipse-width", 3.1416);
    if (isNaN(area)) {
        return;
    }
    displayData("ellipse", area);
});

// mouse over event
document.getElementById('tri-card').addEventListener('mouseenter', function() {
    document.getElementById('tri-card').style.backgroundColor = randomColor();
});
document.getElementById('rec-card').addEventListener('mouseenter', function() {
    document.getElementById('rec-card').style.backgroundColor = randomColor();
});
document.getElementById('par-card').addEventListener('mouseenter', function() {
    document.getElementById('par-card').style.backgroundColor = randomColor();
});
document.getElementById('rho-card').addEventListener('mouseenter', function() {
    document.getElementById('rho-card').style.backgroundColor = randomColor();
});
document.getElementById('pen-card').addEventListener('mouseenter', function() {
    document.getElementById('pen-card').style.backgroundColor = randomColor();
});
document.getElementById('ell-card').addEventListener('mouseenter', function() {
    document.getElementById('ell-card').style.backgroundColor = randomColor();
});