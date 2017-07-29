import React from 'react';
import uuid from 'uuid/v1';
import Navbar from '../navbar';
import ExpenseForm from '../expense-form';
import ExpenseList from '../expense-list';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.expenseCreate = this.expenseCreate.bind(this);
    this.expenseRemove = this.expenseRemove.bind(this);
    this.expenseUpdate = this.expenseUpdate.bind(this);
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
  expenseRemove(expense) {
    let {app} = this.props;
    app.setState(prevState => ({
      expenses: prevState.expenses.filter((item) => {
        return item.id !== expense.id;
      }),
    }));
  }

  expenseUpdate(expense) {
    let {app} = this.props;
    app.setState(prevState => ({
      expenses: prevState.expenses.map((item) => {
        return item.id === expense.id ? expense : item;
      }),
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
        <ExpenseForm
          handleSubmit={this.expenseCreate}
          submitTitle='add expense'/>
        <ExpenseList
          expenseRemove={this.expenseRemove}
          expenseUpdate={this.expenseUpdate}
          expenses={app.state.expenses} />
      </div>
    );
  }
}

export default DashboardContainer;
