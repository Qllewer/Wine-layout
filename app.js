let string = document.querySelector(".input__name")
console.log(string)

let number = document.querySelector(".input__number")
console.log(number)

let button = document.querySelector(".button2")
console.log(button)

function click(){
    console.log("click")
    let result = data(String(string.value), Number(number.value))
    alert("Спасибо за запись!")
    console.log(result)
}

function data(a, b){
    return a + b
}

button.addEventListener("click", click)

// 
// 
// 
number.addEventListener('input', () => {
    if (isNaN(number.value)) {
        // если не число
        // то убираем последнюю введенную букву
        number.value = number.value.slice(0, -1)
        // этот варинат удаления последнего элемента строки нашел в инете просто
    }
})
