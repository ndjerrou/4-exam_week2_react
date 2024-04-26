import { useState } from 'react';

import ExpenseForm from './expense-tracker/components/ExpenseForm';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseList from './expense-tracker/components/ExpenseList';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const addExpense = newExpense => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  };

  const deleteExpense = id =>
    setExpenses(expenses.filter(expense => expense.id !== id));

  const visibleExpenses = selectedCategory
    ? expenses.filter(expense => expense.category === selectedCategory)
    : expenses;

  return (
    <>
      <ExpenseForm onSubmit={addExpense} />
      <ExpenseFilter
        onSelectCategory={category => setSelectedCategory(category)}
      />
      <ExpenseList expenses={visibleExpenses} onDelete={deleteExpense} />
    </>
  );
}

export default App;
