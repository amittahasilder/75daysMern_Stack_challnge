let transactions = JSON.parse(localStorage.getItem("data")) || [];

function addTransaction() {
  let desc = document.getElementById("desc").value;
  let amount = document.getElementById("amount").value;

  if(desc === "" || amount === "") {
    alert("Please enter data");
    return;
  }

  let transaction = {
    id: Date.now(),
    desc: desc,
    amount: Number(amount)
  };

  transactions.push(transaction);

  saveData();
  showData();
}

function showData() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  transactions.forEach(function(item) {
    let li = document.createElement("li");

    li.innerHTML = `
      ${item.desc} - ${item.amount}
      <button onclick="deleteData(${item.id})">❌</button>
    `;

    list.appendChild(li);
  });

  updateBalance();
}

function deleteData(id) {
  transactions = transactions.filter(function(item) {
    return item.id !== id;
  });

  saveData();
  showData();
}

function updateBalance() {
  let total = 0;

  transactions.forEach(function(item) {
    total += item.amount;
  });

  document.getElementById("balance").innerText = total;
}

function saveData() {
  localStorage.setItem("data", JSON.stringify(transactions));
}

// Load data on start
showData();