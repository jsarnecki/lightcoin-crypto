class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;

  }
}

class Withdrawal extends Transaction {

    commit() {
    this.account.balance -= this.amount;
  }

}

// class Withdrawal {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     this.account.balance -= this.amount;
//   }

// }

class Deposit extends Transaction {

    commit() {
    this.account.balance += this.amount;
  }
}


// class Deposit {

//   constructor(amount, account) {
//     this.amount = amount;
//     this.account = account;
//   }

//   commit() {
//     this.account.balance += this.amount;
//   }

// }

class Account {

  constructor(username) {
    this.username = username;
    this.balance = 0;

  }


}


// ----------------------------------DRIVER CODE BELOW-----------------------------//

let balance = 500.00;

const myAccount = new Account("snow-patrol");


t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:',  myAccount.balance);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);
