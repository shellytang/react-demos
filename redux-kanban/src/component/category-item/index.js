import React from 'react'
import {connect} from 'react-redux'
import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import CategoryForm from '../category-form'
import CardForm from '../card-form'
import CardItem from '../card-item'
import {cardCreate} from '../../action/card-actions.js'

class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryDelete, cards} = this.props
    console.log('cards', cards)
    return (
      <div className='category-item'>
        <header>
          <div className='content'>
            <h2>{category.title}</h2>
            <button onClick={() => categoryDelete(category)}>Delete</button>
          </div>
          <div className='editing'>
            <CategoryForm
              buttonText='update'
              category={category}
              onComplete={categoryUpdate}
            />
          </div>
        </header>
        <main>
          <CardForm
            categoryID={category.id}
            buttonText='create card'
            onComplete={this.props.cardCreate}
          />
          <ul>
            {cards.map(card =>
              <CardItem key={card.id} card={card} />
            )}
          </ul>
        </main>
      </div>

    )
  }
}

let mapStateToProps = (state, props) => ({
  cards: state.cards[props.category.id],
})
let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
  cardCreate: (card) => dispatch(cardCreate(card)),
})

export default connect(mapStateToProps,mapDispatchToProps)(CategoryItem)
