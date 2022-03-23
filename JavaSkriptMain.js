
alert("Hello, it is calculator, enter your value and operation!");
let counter = prompt("How many operations do you need to do?", 1);


while(counter >= 1){


    var verificationCompleted1 = 0;
    var verificationCompleted2 = 0;
    var typeOfOperation = 0; 
    var numberVerification1 = 1;
    var numberVerification2 = 1;
    var operationVerification = 1;
    var expression;


    //enter data

    var firstValue = prompt("Enter first value: "); 
    if(firstValue != +firstValue){
        alert(`Your value (${firstValue}) is wrong!!!`);
        numberVerification1--;
    }
    var operation = prompt("Enter operation: ");

    // check operation

    switch (operation){
        case "+":
            typeOfOperation = 1;
            break;
        case "-":
            typeOfOperation = 2;
            break;
        case "*":
            typeOfOperation = 3;
            break;
        case "/":
            typeOfOperation = 4;
            break;
        default:
            alert(`Your operation ${operation} is wrong!!! Please enter (*) or (/) or (+) or (-)`)
            operationVerification--;
    }
    var secondValue = prompt("Enter second value: "); 
    if(secondValue != +secondValue){
        alert(`Your value (${secondValue}) is wrong!!!`);
        numberVerification2--;
    }

    //check 

    switch (firstValue) {
        case NaN: 
            alert(`Eror! Value ${firstValue}!!!`);
            break;
        case null:
            alert(`Eroro! Value ${firstValue}!!!`)
            break;
        case undefined:
            alert(`Eror! Value ${firstValue}!!!`)
            break;
        default:
            if(numberVerification1 === 1)
                verificationCompleted1 = 1;
    }

    switch (secondValue) {
        case NaN: 
            alert(`Eror! Value ${secondValue}!!!`);
            break;
        case null:
            alert(`Eroro! Value ${secondValue}!!!`)
            break;
        case undefined:
            alert(`Eror! Value ${secondValue}!!!`)
            break;
        default:
            if(numberVerification2 === 1)
                verificationCompleted2 = 1;
    }

    if(typeOfOperation === 1){
        expression = +firstValue + +secondValue;
        if(verificationCompleted1 && verificationCompleted2 === 1){
            alert(`Your answer ${firstValue} + ${secondValue} = ${expression.toFixed(3)}.`)
        }
    }

    if(typeOfOperation === 2){
        expression = +firstValue - +secondValue;
        if(verificationCompleted1 && verificationCompleted2 === 1){
            alert(`Your answer ${firstValue} - ${secondValue} = ${expression.toFixed(3)}.`)
        }
    }

    if(typeOfOperation === 3){
        expression = +firstValue * +secondValue;
        if(verificationCompleted1 && verificationCompleted2 === 1){
            alert(`Your answer ${firstValue} * ${secondValue} = ${expression.toFixed(3)}.`)
        }
    }

    if(typeOfOperation === 4){
        expression = +firstValue / +secondValue;
        if(verificationCompleted1 && verificationCompleted2 === 1){
            alert(`Your answer ${firstValue} / ${secondValue} = ${expression.toFixed(3)}.`)
        }
    }

    if(verificationCompleted1 === 0 || verificationCompleted2 === 0 || operationVerification === 0){
        alert("You have entered an invalid value, the program has terminated.")
    }
    counter--;
}