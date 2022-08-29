import React, { useState } from 'react'
// import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Shampoo',
      amount: 400,
      date: new Date(2022, 8, 27),
    },
    {
      id: 'e2',
      title: 'Bucket',
      amount: 250,
      date: new Date(2022, 5, 2),
    },
    {
      id: 'e3',
      title: 'Spices',
      amount: 790,
      date: new Date(2022, 10, 17),
    },
    {
      id: 'e4',
      title: 'Bread',
      amount: 90.50,
      date: new Date(2022, 2, 15),
    },
  ];
   const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
   
    const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
