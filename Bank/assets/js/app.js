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

(function(){
    var account1 = new account("Abebe",1234,5000);
    var account2 = new account("Kebede",1235,4000);
    var account3 = new account("Sisay",1236,3000);
    var account4 = new account("Million",1237,2000);
    var accountlist = [account2.accountNumber, account3.accountNumber, account4.accountNumber];
    var limit = 0;
    do{
        var choice = prompt("Enter 1 to know you're balance \nEnter 2 to Deposit \nEnter 3 to Withdraw \nEnter 4 to Transfer \nEnter 5 to Exit");
        if(choice == 1){ 
            console.log(account1.balance);
            window.alert(account1.balance + " birr");
        }
        else if(choice == 2){
            var number = prompt("Enter the ammount you want to deposit:");
            do{
                if(isNumber(number)){
                    number = parseInt(number);
                    break;
                }
                else{
                    number = prompt("Enter a valid ammount you want to deposit:");
                }
            }while(true);
            account1.deposit(number);
            console.log("You have deposited " + number + " birr");
            window.alert("You have deposited " + number + " birr");
        }
        else if(choice == 3){
            var number = prompt("Enter the ammount you want to withdraw:");
            do{
                if(isNumber(number)){
                    number = parseInt(number);
                    break;
                }
                else{
                    number = prompt("Enter a valid ammount you want to withdraw:");
                }
            }while(true);
            if(account1.balance < number){
                console.log("You're balance is insufficient");
                window.alert("You're balance is insufficient");
            }
            else{
                account1.withdraw(number);
                console.log("You have withdrew " + number + " birr");
                window.alert("You have withdrew " + number + " birr");
            }
        }
        else if(choice == 4){
            var acountnum = prompt("Enter the account number:");
            do{
                if(accountlist.includes(parseInt(acountnum))){
                    acountnum = parseInt(acountnum);
                    break;
                }
                else{
                    acountnum = prompt("Invalid account number. Try again:");
                }
            }while(true);
            var number = prompt("Enter the amount you want to transfer:");
            do{
                if(isNumber(number)){
                    number = parseInt(number);
                    break;
                }
                else{
                    number = prompt("Enter the amount you want to transfer:");
                }
            }while(true);
            var min = 100;
            var max = 10000;
            if(number > max || limit >= max){
                console.log("You have exceeded the maximum amount to transfer for today");
                window.alert("You have exceeded the maximum amount to transfer for today");
            }
            else if(number < min){
                console.log("You are below the minimum amount to transfer");
                window.alert("You are below the minimum amount to transfer");
            }
            else{
                if(account1.balance < number){
                    console.log("Can not transfer. Insufficient balance.");
                    window.alert("Can not transfer. Insufficient balance.");
                }
                else{
                    if(acountnum == accountlist[0]){
                        account1.transfer(account1, account2, number);
                        console.log("you have transfered " + number + " birr to " + account2.accountName);
                        window.alert("you have transfered " + number + " birr to " + account2.accountName);
                    }
                    else if(acountnum == accountlist[1]){
                        account1.transfer(account1, account3, number);
                        console.log("you have transfered " + number + " birr to " + account3.accountName);
                        window.alert("you have transfered " + number + " birr to " + account3.accountName);
                    }
                    else if(acountnum == accountlist[2]){
                        account1.transfer(account1, account4, number);
                        console.log("you have transfered " + number + " birr to " + account4.accountName);
                        window.alert("you have transfered " + number + " birr to " + account4.accountName);
                    }
                }
            }
        }
    }while(choice != 5);
})();