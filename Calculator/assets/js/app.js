function sub(num1, num2){
    return parseInt(num1) - parseInt(num2);
}

function add(List){
    var result = 0;
    for(let index = 0; index < List.length; index++){
        result += List[index];
    }
    return result;
}

function mult(List){
    var result = 1;
    for(let index = 0; index < List.length; index++){
        result *= List[index];
    }
    return result;
}

function div(num1, num2){
    return parseInt(num1) / parseInt(num2);
}

(function(){
    var choice = prompt("Enter 1 for addition /nEnter 2 for subtraction /nEnter 3 for multiplication /nEnter 4 for division");
    if(choice == 1){
        var myArray = new Array();
        do{
            var numbers = prompt("Enter numbers and x to exit:");
            if(numbers != "x"){
                myArray.push(parseInt(numbers));
            }
        }while(numbers != "x");
        console.log(add(myArray));
        
    }
    else if(choice == 2){
        var number1 = prompt("Enter the first number:");
        var number2 = prompt("Enter the second number:");
        console.log(sub(number1, number2));
    }
    else if(choice == 3){
        var myArray = new Array();
        do{
            var numbers = prompt("Enter numbers and x to exit:");
            if(numbers != "x"){
                myArray.push(parseInt(numbers));
            }
        }while(numbers != "x");
        console.log(mult(myArray));
        
    }
    else if(choice == 4){
        var number1 = prompt("Enter the first number:");
        var number2 = prompt("Enter the second number:");
        console.div(add(number1, number2));
    }
})();