import React from 'react'
import {connect} from 'react-redux' // function used to wrap our components to attach them to the store

// these are action creators
import {
  categoryCreate as categoryActionCreate,
  categoryUpdate as categoryActionUpdate,
  categoryDelete as categoryActionDelete,
} from '../../action/category-actions.js'

import CategoryForm from '../category-form'
import CategoryItem from '../category-item'

class DashboardContainer extends React.Component {
  componentDidMount(){
  }

  render(){
    // console.log('categories', this.props.categories)
    return (
      <main className='dashboard-container'>
        <h2> dashboard </h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categories.map((item) =>
          <CategoryItem key={item.id} category={item} />
        )}
      </main>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardContainer)

// let bindToStore = connect(mapStateToProps, mapDispatchToProps)
// DashboardContainer = bindToStore(DashboardContainer)
// export default DashboardContainer
