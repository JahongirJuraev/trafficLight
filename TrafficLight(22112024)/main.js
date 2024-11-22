// Массив текстов для каждого состояния светофора
const text = ["Go go!", "Stop!", "Stop danger!"];
const colors = ['red', 'yellow', 'green'];
const changeColorTime = [3000, 2000, 3000]; // Время для каждого цвета

let currentIndex = 0;
let timer;

// Функция для изменения цвета светофора и текста
function changeLight(color, message) { 
    document.querySelector('.red').style.backgroundColor = color === 'red' ? 'red' : '#75868e'; 
    document.querySelector('.yellow').style.backgroundColor = color === 'yellow' ? 'yellow' : '#75868e'; 
    document.querySelector('.green').style.backgroundColor = color === 'green' ? 'green' : '#75868e'; 
    document.querySelector('#trafficMessage').innerHTML = message;
}

// Функция для выполнения циклического переключения светофора
function loopTrafficLight(){
    changeLight(colors[currentIndex], text[currentIndex]);
    timer = setTimeout(() => {
        currentIndex = (currentIndex + 1) % colors.length;
        loopTrafficLight();
    }, changeColorTime[currentIndex]);
}

// Обработчик для кнопки "Start"
document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();

    if(!timer){
        loopTrafficLight();
    }
});
