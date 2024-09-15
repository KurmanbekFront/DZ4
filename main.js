
// задание 1

const count = document.querySelector(".count");
const incrBtn = document.querySelector(".increment");
const decrBtn = document.querySelector(".decrement");

let counter = 0;

incrBtn.addEventListener("click", () => {
    counter += 1
    count.innerHTML = counter
    count.style.color = "green"
})

decrBtn.addEventListener("click", () => {
    if (counter > 0) {
        counter -= 1
        count.innerHTML = counter
        count.style.color = "red"
    } else {
        alert("Нельзя уменьшать значение ниже нуля")
    }
})


// задание 2

const block = document.querySelector(".block")
const posX = document.querySelector(".posX");
const posY = document.querySelector(".posY");

block.addEventListener("mousemove", (e) => {
    posX.innerHTML = e.screenX
    posY.innerHTML = e.screenY
})


// задание 3

const trafficLightBtn = document.querySelector(".trafficLightBtn")

trafficLightBtn.addEventListener("click", () => {

    const trafficLight = {
        красный: 'STOP',
        жёлтый: 'WAIT',
        зелёный: 'GO'
    };
    
    let color = prompt('Введите цвет светофора (красный, жёлтый, зелёный):').toLowerCase().trim();

    switch (color) {
        case "красный":
            alert(trafficLight[color])
            break;
        case "жёлтый":
            alert(trafficLight[color])
            break;
        case "зелёный":
            alert(trafficLight[color])
            break;
        default:
            alert('Надо вводить цвета светофора (красный, жёлтый, зелёный)')
    }
})

