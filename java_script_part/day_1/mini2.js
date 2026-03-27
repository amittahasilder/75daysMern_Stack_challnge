function createTracker() {
  const transactions = [];
  let balance = 0;

  return {
    add(type, amount) {
      transactions.push({ type, amount });

      if (type === "income") balance += amount;
      else balance -= amount;
    },

    getBalance() {
      return balance;
    },

    getTransactions() {
      return transactions;
    }
  };
}

const tracker = createTracker();

tracker.add("income", 1000);
tracker.add("expense", 300);

console.log(tracker.getBalance());
console.log(tracker.getTransactions());