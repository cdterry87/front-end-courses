import { useState } from 'react'

import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2021')

  const filterChangedHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangedHandler} value={filteredYear} />
        {
          expenses.map(expense => (
            <ExpenseItem
              key={expense.title}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }
      </Card>
    </div>
  )
}

export default Expenses