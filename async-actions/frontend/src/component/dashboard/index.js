import React from 'react';
import {connect} from 'react-redux';
import ListForm from '../list-form';
import * as util from '../../lib/util.js';
import * as listActions from '../../action/list-actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listFormError: null,
    };
  }

  handleListFormComplete(list) {
    this.props.listCreate(list)
      .catch(listFormError => {
        console.log('listFormError', listFormError);
        this.setState({listFormError});
      });
  }

  render() {
    return (
      <div className='dashboard'>
        <h2>dashboard</h2>
        <ListForm
          buttonText='create list'
          onComplete={this.props.listCreate}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({lists: state.lists});
let mapDispatchToProps = (dispatch) => ({
  listCreate: (list) => dispatch(listActions.listCreateRequest(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
