const account = {
  name: 'Chase Terry',
  expenses: [],
  income: [],
  addExpense: function (description, amount) {
    this.expenses.push({
      description,
      amount
    })
  },
  addIncome: function (description, amount) {
    this.income.push({
      description,
      amount
    })
  },
  getAccountSummary: function () {
    let totalExpenses = 0
    let totalIncome = 0
    let accountBalance = 0

    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount
    })

    return `${this.name} has $${totalExpenses} in expenses`
  }
}

account.addExpense('rent', 900)
account.addExpense('car', 300)
account.addIncome('job', 1500)

console.log(account.getAccountSummary())