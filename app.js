function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function calculateSum() {
    const num1 = parseInt(document.getElementById('number1').value);
    const num2 = parseInt(document.getElementById('number2').value);
    
    if (!isPrime(num1) || !isPrime(num2)) {
        document.getElementById('result').innerHTML = 
            'Ошибка: оба числа должны быть простыми!';
        return;
    }

    const sum = num1 + num2;
    
    document.getElementById('result').innerHTML = 
        `Результат: ${num1} + ${num2} = ${sum}`;
}

//функция для сброса калькулятора
function resetCalculator() {
    // Очищаем поля ввода
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    // Сбрасываем результат
    document.getElementById('result').innerHTML = 'Результат: ';
}

document.getElementById('number1').addEventListener('input', function() {
    if (this.value < 0) this.value = 0;
});

document.getElementById('number2').addEventListener('input', function() {
    if (this.value < 0) this.value = 0;
});