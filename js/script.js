document.getElementById('cal').addEventListener('click', function(e) {
    if((e.target.innerText) == 'AC'){
        document.getElementById('display').innerText = ""
    }
    else if((e.target.innerText) == "DEL"){
        const display = document.getElementById('display');
    const displayNumber = display.innerText
    const newNumber = displayNumber.slice(0, -1);
    display.innerText = newNumber;
    }
    else if((e.target.innerText) == '='){
        e.stopPropagation();
    }
    
    else{
        const display = document.getElementById('display');
    const displayNumber = display.innerText
    const newNumber = displayNumber + (e.target.innerText)
    display.innerText = newNumber;
    }
    
})

document.getElementById('equal').addEventListener('click', function() {
    const display = document.getElementById('display');
    const displayNumber = display.innerText
    const equation = eval(displayNumber);
    display.innerText = equation;
})
