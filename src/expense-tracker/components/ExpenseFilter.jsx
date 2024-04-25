import categories from '../categories';

const ExpenseFilter = ({ onSelectCategory }) => {
  return (
    <select
      className='form-select'
      onChange={event => onSelectCategory(event.target.value)}
    >
      <option value=''>All categories</option>
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
