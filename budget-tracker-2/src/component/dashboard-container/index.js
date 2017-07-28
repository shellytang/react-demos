import React from 'react';
import uuid from 'uuid/v1';
import Navbar from '../navbar';
import ExpenseCreateForm from '../expense-create-form';
import ExpenseList from '../expense-list';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.expenseCreate = this.expenseCreate.bind(this);
  }
  // hooks
  //methods
  expenseCreate(expense) {
    expense.id = uuid();
    let {app} = this.props;
    //immutably add the new expense to the old expense array on apps state
    app.setState(prevState => ({
      expenses: prevState.expenses.concat([expense]),
    }));
  }

  render() {
    let {app} = this.props;
    let totalSpent = app.state.expenses.reduce((prev, curr) => {
      return prev + curr.price;
    },0);
    let remainingBudget = app.state.total - totalSpent;
    return (
      <div className='dashboard-container'>
        <Navbar />
        <p>Total Budget: {app.state.total}</p>
        <p>Total Spent: {totalSpent}</p>
        <p>Remaining Budget: {remainingBudget}</p>
        <ExpenseCreateForm expenseCreate={this.expenseCreate} />
        <ExpenseList expenses={app.state.expenses} />
      </div>
    );
  }
}

export default DashboardContainer;
