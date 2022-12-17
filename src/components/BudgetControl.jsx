import { useState, useEffect } from 'react'

const BudgetControl = ({ expenses, budget }) => {

   const [disponible, setDisponible] = useState(0);
   const [expensible, setExpensible] = useState(0)

   useEffect(() => {
      const totalExpenses = expenses.reduce(( total, expense) => expense.amount + total, 0);
      const totalDisponble = budget - totalExpenses;
      
      setExpensible(totalExpenses);
      setDisponible(totalDisponble);
   }, [expenses])
   

   const formatAmount = (amount) => {
      return amount.toLocaleString('en-US', {
         style: 'currency',
         currency: 'USD'
      })
   }

  return (
    <div className='container-budget container shadow two-columns'>
      
      <div>
         <p>Graphic here</p>
      </div>

      <div className='content-budget'>
         <p>
            <span>Budget: </span> {formatAmount(budget)}
         </p>

         <p>
            <span>Disponible: </span> {formatAmount(disponible)}
         </p>

         <p>
            <span>Expenses: </span> {formatAmount(expensible)}
         </p>
      </div>



    </div>
  )
}

export default BudgetControl