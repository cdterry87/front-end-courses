import Card from './Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {
        expenses.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </Card>
  )
}

export default Expenses