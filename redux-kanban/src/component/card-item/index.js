import React from 'react'
import {connect} from 'react-redux'
import Draggable from '../draggable'
import CardForm from '../card-form'
import {cardUpdate, cardDelete} from '../../action/card-actions.js'

class CardItem extends React.Component {
  render() {
    let {card, cardUpdate, cardDelete} = this.props
    return (
      <li className='card-item'>
        <Draggable dataTransferItem={card}>
          <p>{card.content}</p>
          <button onClick= {() => cardDelete(card)}>delete</button>
          <CardForm
            card={card}
            buttonText='update card'
            onComplete={cardUpdate}
          />
        </Draggable>
      </li>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = (dispatch) => ({
  cardUpdate: (card) => dispatch(cardUpdate(card)),
  cardDelete: (card) => dispatch(cardDelete(card)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardItem)
