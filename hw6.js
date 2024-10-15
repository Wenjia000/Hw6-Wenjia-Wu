function calculate(operation) {
    const input1 = document.getElementById('Input1').value;
    const input2 = document.getElementById('Input2').value;
    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    const num1 = Number(input1);
    const num2 = Number(input2);
    if (input1 === '' || input2 === '') {
        result1.textContent = 'Error: Input1 is empty, please enter a number.';
         result2.textContent = '';
         result2.textContent = '';
         return;

    }
    if (operation === '/' && num2 === 0) {
        result1.textContent = 'Input1 = ' + num1;
        result2.textContent = 'Input2 = ' + num2;
        result3.textContent = 'Input1 / Input2 = ' + num1 + ' / ' + num2 + ' = Infinity';
        return; 
    }
   
    if (operation === '+') {
        result = num1 + num2; 
    } else if (operation === '-') {
        result = num1 - num2; 
    } else if (operation === '*') {
        result = num1 * num2; 
    } else if (operation === '/') {
        result = num1 / num2;
    }
    
    result1.textContent = 'Input1 = ' + num1; 
    result2.textContent = 'Input2 = ' + num2; 
    result3.textContent = 'Input1 ' + operation + ' Input2 = ' + num1 + ' ' + operation + ' ' + num2 + ' = ' + result;
      
    }
    function clearResult() {
        document.getElementById('Input1').value = ''; 
        document.getElementById('Input2').value = ''; 
        document.getElementById('result1').textContent = ''; 
        document.getElementById('result2').textContent = ''; 
        document.getElementById('result3').textContent = '';
    }


