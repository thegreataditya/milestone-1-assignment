let acc = {
  username: "Aditya",
  balance: 0,
};

function deposit(money, account) {
  account.balance += money;
  console.log(
    `${account.username}'s updated account balance is ${account.balance}`
  );
}

function withdraw(money, account) {
  account.balance -= money;
  console.log(
    `${account.username}'s updated account balance is ${account.balance}`
  );
}

deposit(4000, acc);

withdraw(2000, acc);