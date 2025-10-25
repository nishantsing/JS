let all_transaction = [];

const transaction_form = document.getElementById("transactionForm");
const transaction_list = document.getElementById("transactionList");

const total_balance = document.getElementById("totalBalance");
const total_income = document.getElementById("totalIncome");
const total_expense = document.getElementById("totalExpense");

function updateList(type, amount, date, category) {
    const itemEl = document.createElement("li");
    const iconEl = document.createElement("div");
    const detailsEl = document.createElement("div");
    const nameEl = document.createElement("div");
    const dateEl = document.createElement("div");
    const amountEl = document.createElement("div");
    const deleteEl = document.createElement("button");

    itemEl.classList.add("transaction-item");
    iconEl.classList.add("transaction-icon");
    detailsEl.classList.add("transaction-details");
    nameEl.classList.add("transaction-name");
    dateEl.classList.add("transaction-date");
    amountEl.classList.add("transaction-amount");
    deleteEl.classList.add("transaction-delete");

    iconEl.innerText = type === "Income" ? "↑" : "↓";
    iconEl.classList.add(type === "Income" ? "income" : "expense");

    nameEl.innerText = category;
    dateEl.innerText = new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    amountEl.innerText = (type === "Income" ? "+" : "-") + "₹" + amount;
    amountEl.classList.add(type === "Income" ? "income" : "expense");

    deleteEl.innerText = "x";
    deleteEl.addEventListener("click", deleteTransaction);

    detailsEl.appendChild(nameEl);
    detailsEl.appendChild(dateEl);
    itemEl.appendChild(iconEl);
    itemEl.appendChild(detailsEl);
    itemEl.appendChild(amountEl);
    itemEl.appendChild(deleteEl);

    transaction_list.prepend(itemEl);

    /* 
        <ul class="transaction-list" id="transactionList">
            <li class="transaction-item">
                <div class="transaction-icon income">↑</div>
                <div class="transaction-details">
                    <div class="transaction-name">Salary</div>
                    <div class="transaction-date">Oct 25, 2023</div>
                </div>
                <div class="transaction-amount income">+₹5,000.00</div>
                <button class="transaction-delete">x</button>
            </li>
        </ul>
    */
}

function deleteTransaction(event) {
    const btn = event.currentTarget;
    const itemEl = btn.closest(".transaction-item");

    const index = Array.from(transaction_list.children).indexOf(itemEl);
    all_transaction.splice(index, 1);
    updateBalance();

    itemEl.remove();
}

function updateBalance() {
    let income = 0;
    let expense = 0;
    let balance = 0;

    all_transaction.forEach((transaction) => {
        if (transaction.type === "Income") {
            income += parseFloat(transaction.amount);
            balance += parseFloat(transaction.amount);
        } else {
            expense += parseFloat(transaction.amount);
            balance -= parseFloat(transaction.amount);
        }
    });

    total_balance.innerText = "₹" + balance;
    total_income.innerText = "₹" + income;
    total_expense.innerText = "₹" + expense;
}

transaction_form.addEventListener("submit", function (event) {
    event.preventDefault();

    const type = event.target.type.value;
    const amount = event.target.amount.value;
    const date = event.target.date.value;
    const category = event.target.category.value;

    updateList(type, amount, date, category);
    all_transaction.unshift({ type, amount, date, category });
    updateBalance();

    transaction_form.reset();
});
