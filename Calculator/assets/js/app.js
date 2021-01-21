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

