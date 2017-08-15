import React from 'react'
import * as util from '../../lib/util.js'
import AuthForm from '../auth-form';

class LandingContainer extends React.Component {
  render() {
    let {params} = this.props.match;
    return (
      <div>
        <AuthForm auth={params.auth} />
      </div>
    )
  }
}

export default LandingContainer;
