import React from 'react'
import {connect} from 'react-redux'
import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import CategoryForm from '../category-form'

class CategoryItem extends React.Component {
  render() {
    let {category, categoryUpdate, categoryDelete} = this.props
    return (
      <div className='category-item'>
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
      </div>
    )
  }
}

let mapStateToProps = () => ({})
let mapDispatchToProps = dispatch => ({
  categoryUpdate: (category) => dispatch(categoryUpdate(category)),
  categoryDelete: (category) => dispatch(categoryDelete(category)),
})

export default connect(mapStateToProps,mapDispatchToProps)(CategoryItem)
