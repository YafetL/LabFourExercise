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

function division(num1, num2){
    if(num2 == 0){
        return "Undefined"
    }
    return parseInt(num1) / parseInt(num2);
}

function isNumber(input){
    var truth = true;
    var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
    for(let i = 0; i < input.length; i++){
        truth = numberArray.includes(input[i]);
        if(truth){
            truth = numberArray.includes(input[i]);
        }
        else{
            return false;
        }
    }
    return truth;
}

function isNumberArray(input){
    var truth = true;
    var numberArray = [0,1,2,3,4,5,6,7,8,9,"x"];
    for(let i = 0; i < input.length; i++){
        truth = numberArray.includes(input[i]);
        if(truth){
            truth = numberArray.includes(input[i]);
        }
        else{
            return false;
        }
    }
    return truth;
}

(function(){
    var choice = prompt("Enter 1 for addition \nEnter 2 for subtraction \nEnter 3 for multiplication \nEnter 4 for division");
    if(choice == 1){
        var myArray = new Array();
        do{
            do{
                var truth = isNumberArray(myArray);
                var numbers = prompt("Enter numbers and x to exit:");
                if(numbers != "x"){
                    myArray.push(parseInt(numbers));
                }
            }while(numbers != "x");
            if(!isNumberArray(myArray)){
                myArray = [];
            }
        }while(!truth);       
        console.log(add(myArray));  
    }
    else if(choice == 2){
        do{
            var number1 = prompt("Enter the first number:");
            var number2 = prompt("Enter the second number:");
            if(isNumber(number1) && isNumber(number2)){
                break;
            }
        }while(true);
        console.log(sub(number1, number2));
    }
    else if(choice == 3){
        var myArray = new Array();
        do{
            do{
                var truth = isNumberArray(myArray);
                var numbers = prompt("Enter numbers and x to exit:");
                if(numbers != "x"){
                    myArray.push(parseInt(numbers));
                }
            }while(numbers != "x");
            if(!isNumberArray(myArray)){
                myArray = [];
            }
        }while(!truth);
        console.log(mult(myArray));
        
    }
    else if(choice == 4){
        do{
            var number1 = prompt("Enter the first number:");
            var number2 = prompt("Enter the second number:");
            if(isNumber(number1) && isNumber(number2)){
                break;
            }
        }while(true);
        console.log(division(number1, number2));
    }
})();