import superagent from 'superagent';

// sync actions for updating store
export const tokenSet = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
})

export const tokenDelete = () => ({type: 'TOKEN_DELETE'})

// async actions that will make requests to the backend
export const signupRequest = (user) => (dispatch) => {
  return superagent.post(`${__API_URL__}/signup`)
  .withCredentials()
  .send(user)
  .then(res => {
    dispatch(tokenSet(res.body));
    return res;
  })
  .catch(console.error);
}

export const loginRequest = (user) => (dispatch) => {
  return superagent.get(`${__API_URL__}/login`)
  .auth(user.username, user.password)
  .then(res => {
    dispatch(tokenSet(res.text));
    return res;
  });
}
