import { useState } from 'react';

import ExpenseForm from './expense-tracker/components/ExpenseForm';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseList from './expense-tracker/components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategeory, setSelectedCategeory] = useState('');

  const addExpense = newExpense => {
    setExpenses([...expenses, newExpense]);
  };

  const deleteExpense = id =>
    setExpenses(expenses.filter(expense => expense.id !== id));

  const visibleExpenses = selectedCategeory
    ? expenses.filter(expense => expense.category === selectedCategeory)
    : expenses;

  return (
    <>
      <ExpenseForm onSubmit={addExpense} />
      <ExpenseFilter
        onSelectCategory={category => setSelectedCategeory(category)}
      />
      <ExpenseList expenses={visibleExpenses} onDelete={deleteExpense} />
    </>
  );
}

export default App;
