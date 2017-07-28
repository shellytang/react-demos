import React from 'react';

class ExpenseCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // hooks
  // methods
  handleChange(e) {
    let {name, value, type} = e.target;
    if(type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value),
        });
      } catch(err) {
        console.error(err);
      }
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.expenseCreate(this.state);
  }

  render() {
    return (
      <form
        className='expense-create-form'
        onSubmit={this.handleSubmit}>

        <input
          name='title'
          type='text'
          value={this.state.title}
          onChange={this.handleChange}
        />

        <input
          name='price'
          type='number'
          value={this.state.price}
          onChange={this.handleChange}
        />

        <button type='submit'>add expense</button>
      </form>
    );
  }
}

export default ExpenseCreateForm;
