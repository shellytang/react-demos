import React from 'react'

class CardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.card
      ? {...props.card}
      : {title: '', category: props.categoryID}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(props) {
    if(props.card) {
      this.setState(props.card)
    }
    if(props.categoryID) {
      this.setState({categoryID: props.categoryID})
    }
  }

  handleChange(e) {
    this.setState({title: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(this.state)
  }

  render() {
    return (
      <form className='card-form' onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button type='submit'> {this.buttonText} </button>
      </form>
    )
  }
}
