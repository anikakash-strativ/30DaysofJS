function personAccount() {
    let firstName = "Anik";
    let lastName = "Akash";
    let incomes = [];
    let expenses = [];

    // Inner functions 

    function totalIncome() {
        return incomes.reduce((sum, income) => sum + income.amount, 0);
    }

    function totalExpense() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0); // Fixed: Was mistakenly using `incomes` here
    }

    function accountInfo() {
        let totalIncomes = totalIncome();
        let totalExpenses = totalExpense();
        return `${firstName} ${lastName} has a total income of ${totalIncomes} and total expenses of ${totalExpenses}.`; // Fixed variable names
    }

    function addIncome(description, amount) {
        incomes.push({ description, amount });
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance,
    };
}

const myAccount = personAccount();
myAccount.addIncome("Salary", 5000);
myAccount.addExpense("Rent", 1200);
myAccount.addIncome("Freelancing", 1500);

console.log(myAccount.accountInfo());
console.log("Account Balance: ", myAccount.accountBalance());
