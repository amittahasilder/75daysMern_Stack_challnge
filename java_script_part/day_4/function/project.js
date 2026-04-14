// Bank Data
let balance = 0;
let history = [];

// Deposit Function
function deposit(amount) {
  if (amount <= 0) {
    return "Invalid amount!";
  }

  balance += amount;

  history.push(`Deposited: ${amount}`);
  return `Deposit Successful. New Balance: ${balance}`;
}

// Withdraw Function
function withdraw(amount) {
  if (amount <= 0) {
    return "Invalid amount!";
  }

  if (amount > balance) {
    return "Insufficient Balance!";
  }

  balance -= amount;

  history.push(`Withdrawn: ${amount}`);
  return `Withdraw Successful. New Balance: ${balance}`;
}

// Check Balance
function checkBalance() {
  return `Current Balance: ${balance}`;
}

// Transaction History
function getHistory() {
  return history;
}