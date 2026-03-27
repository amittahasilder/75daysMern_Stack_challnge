const transactions = []; // store all data

let balance = 0; // current balance

// ➕ Add transaction
function addTransaction(type, amount) {
  const transaction = {
    type, // "income" or "expense"
    amount,
  };

  transactions.push(transaction);

  if (type === "income") {
    balance += amount;
  } else if (type === "expense") {
    balance -= amount;
  }
}

// 📋 Show all transactions
function showTransactions() {
  console.log("All Transactions:");
  transactions.forEach((t, index) => {
    console.log(`${index + 1}. ${t.type} - ${t.amount}`);
  });
}

// 💰 Show balance
function showBalance() {
  console.log("Current Balance:", balance);
}