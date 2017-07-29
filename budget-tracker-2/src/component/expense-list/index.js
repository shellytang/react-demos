import React from 'react';
import ExpenseForm from '../expense-form';

class ExpenseList extends React.Component {
  render() {
    return (
      <div className='expense-list'>
        <ul>
          {this.props.expenses.map((item, index) =>
            <li key={index}>
              <button
                onClick={() => this.props.expenseRemove(item)}>Delete</button>
              <p>title: {item.title}</p>
              <p>price: {item.price}</p>

              <ExpenseForm
                expense={item}
                submitTitle='update expense'
                handleSubmit={(expense) => {
                  expense.id = item.id;
                  this.props.expenseUpdate(expense);
                }} />

            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ExpenseList;
