function getValueById(id) {
    const valueStr = document.getElementById(id).value;
    const value = parseFloat(valueStr);
    document.getElementById(id).value = '';
    return value;
};
function getTextById(id) {
    const text = document.getElementById(id).innerText;
    return text;
};
function areaCalculate(x, y, constant) {
    const area = (constant * x * y);
    return Math.abs(area.toFixed(2));
};
let count = 1;
function displayData(name, area,) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td class="md:h-10 md:w-10 w-6 h-6 p-2 text-center">${count++ + " ."}</td>
    <td class="md:h-10 md:w-10 w-6 h-6 p-2 text-center">${name}</td>
    <td class="md:h-10 md:w-10 w-6 h-6 p-2 text-center">${area} cm<sup>2</sup></td>
    <td class="bg-primary text-center rounded-md cursor-pointer text-white">convert to m<sup>2</sup></td>
    `;
    container.appendChild(tr);
};
function calculate(landId, heightId, constant) {
    const land = getValueById(landId);
    const height = getValueById(heightId);
    const area = areaCalculate(land, height, constant);
    if (isNaN(area)) {
        alert("please input valid values")
        return;
    }
    return area;
}
function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}