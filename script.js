function Account(agency, account, balance) {
  this.agency = agency;
  this.account = account;
  this.balance = balance;
}

Account.prototype.toWithdraw = function(value) {
  if(this.balance < value) {
   console.log(`Insufficient funds: ${this.balance}`);
    return;
  }

  this.balance -= value;
  this.seeBalance();
};
Account.prototype.deposit = function(value) {
  this.balance += value;
  this.seeBalance();
};
Account.prototype.seeBalance = function() {
  console.log(`Ag/Acc.: ${this.agency}/${this.account} | Balance: R$${this.balance.toFixed(2)}`);
};

function CurrentAccount(agency, account, balance, limit) {
  Account.call(this, agency, account, balance);
  this.limit = limit;
}

CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.toWithdraw = function(value) {
  if((this.balance + this.limit) < value) {
    console.log(`Insuficient funds: ${this.balance}`);
    return;
  }

  this.balance -= value;
  this.seeBalance();
};

function SavingsAccount(agency, account, balance) {
  Account.call(this, agency, account, balance);
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

const currentAccount1 = new CurrentAccount(11, 22, 0, 100);

currentAccount1.deposit(10);
currentAccount1.toWithdraw(110);
currentAccount1.toWithdraw(1);

const savingsAccount1 = new SavingsAccount(12, 33, 0);

savingsAccount1.deposit(10);
savingsAccount1.toWithdraw(10);
savingsAccount1.toWithdraw(1);