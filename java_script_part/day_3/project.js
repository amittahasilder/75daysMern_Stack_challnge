// Initial Balance
let balance = 1000;

// Add Expense
let expense = Number(prompt("Enter expense amount:"));
let category = prompt("Enter category (food/transport/other):");

// Validation
if (expense <= 0) {
  console.log("Invalid expense!");
} else if (expense > balance) {
  console.log("Not enough balance!");
} else {

  // Deduct balance
  balance -= expense;

  console.log("Expense Added:", expense);
  console.log("Remaining Balance:", balance);

  // Category Check
  if (category === "food") {
    console.log("You spent on Food 🍔");
  } else if (category === "transport") {
    console.log("Transport cost 🚗");
  } else {
    console.log("Other expense 📦");
  }

  // Warning System
  if (balance < 200) {
    console.log("⚠️ Low Balance Warning!");
  }

  // Smart Suggestion (Ternary)
  let status = (balance > 500) ? "Good 💰" : "Control Spending ⚠️";
  console.log("Status:", status);
}