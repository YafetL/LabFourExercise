function account(accountName, accountNumber, balance){

    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.balance = balance;

    this.withdraw = function withdraw(money){
                        this.balance -= money;
                    }

    this.deposit =  function deposit(money){
                        this.balance += money;
                    }
    
    this.transfer = function transfer(transferingAccount, accountToTransfer, money){
                        accountToTransfer.deposit(money);
                        transferingAccount.withdraw(money);
                    }

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

