import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.list ? props.list : {title: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.list)
      this.setState(props.list);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  handleChange(e) {
    this.setState({title: e.target.value});
  }

  render() {
    return (
      <form
        className='list-form'
        onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange} />
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ListForm;
