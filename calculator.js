function appendValue(val) {
    document.getElementById('display').value += val;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function clearEntry() {
    const display = document.getElementById('display');
    const value = display.value;
    const parts = value.trim().split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    display.value = value.slice(0, -lastPart.length);
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById('display').value);
      document.getElementById('display').value = result;
    } catch {
      document.getElementById('display').value = 'Error';
    }
  }
  
  function square() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
      display.value = value * value;
    }
  }
  
  function sqrt() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
      display.value = Math.sqrt(value);
    }
  }
  
  function plusMinus() {
    const display = document.getElementById('display');
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
      display.value = value * -1;
    }
  }

  function percent() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
      display.value = value / 100;
    }
  }
  
  function reciprocal() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value) && value !== 0) {
      display.value = 1 / value;
    } else {
      display.value = 'Error';
    }
  }