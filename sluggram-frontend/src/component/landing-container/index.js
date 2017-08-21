import './_landing-container.scss';
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import AuthForm from '../auth-form';
import {signupRequest, loginRequest} from '../../action/auth-actions';
import {userProfileFetchRequest} from '../../action/profile-actions.js'

class LandingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.auth && props.userProfile)
      props.history.replace('/dashboard')
    if(props.auth && !props.userProfile)
      props.history.replace('/settings')
  }

  handleLogin(user) {
    let {profileFetch, history} = this.props
    return this.props.login(user)
    .then(() => profileFetch())
    .then(() => history.push('/dashboard'))
    .catch(util.logError)
  }

  handleSignup(user) {
    return this.props.signup(user)
    .then(() => {
      this.props.history.push('/settings')
    })
    .catch(util.logError)
  }

  render() {
    let {params} = this.props.match;
    let handleComplete = params.auth === 'login' ? this.handleLogin : this.handleSignup
    return (
      <div className='landing-container'>
        <AuthForm
          auth={params.auth}
          onComplete={handleComplete}
        />
        <div className='auth-nav'>
          {util.renderIf(params.auth === 'login',
            <Link to='/welcome/signup'>sign up</Link>)}
          {util.renderIf(params.auth === 'signup',
            <Link to='/welcome/login'>login</Link>)}
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  auth: state.auth,
  userProfile: state.userProfile,
})

let mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signupRequest(user)),
    login: (user) => dispatch(loginRequest(user)),
    profileFetch: () => dispatch(userProfileFetchRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (LandingContainer);
