function createBankAccount() {
    // Private variables
    let balance = 0;
    let transactionHistory = [];

    return {
        deposit: function (amount) {
            balance += amount;
            transactionHistory.push({ type: 'Deposit', amount });
            console.log(`Deposited: ${amount}`);
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log('Insufficient balance');
            } else {
                balance -= amount;
                transactionHistory.push({ type: 'Withdrawal', amount });
                console.log(`Withdrawn: ${amount}`);
            }
        },
        getBalance: function () {
            console.log(`Current balance: ${balance}`);
            return balance;
        },
        getTransactionHistory: function () {
            console.log('Transaction History:', transactionHistory);
            return transactionHistory;
        }
    };
}

// Example Usage:
const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined
account.getBalance(); // Output: Current balance: 300
account.getTransactionHistory(); // Output: Transaction History: [...]
