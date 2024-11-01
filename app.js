let calculator = '+'

document.getElementById('plus').onclick = () => calculator = '+'
document.getElementById('minus').onclick = () => calculator = '-'
document.getElementById('multiplication').onclick = () => calculator = '*'
document.getElementById('division').onclick = () => calculator = '/'

document.getElementById('submit').onclick = () => {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    
    const operations = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1,num2) => num1 * num2,
        '/': (num1, num2) => num1 / num2
    }
    
    document.getElementById('result').textContent = operations[calculator](num1, num2)
}