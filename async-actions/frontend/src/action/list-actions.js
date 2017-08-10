import superagent from 'superagent';

// sync actions
// e.g., talk to the redux store
export const listCreate = (list) => ({
  type: 'LIST_CREATE',
  payload: list,
});

export const listUpdate = (list) => ({
  type: 'LIST_UPDATE',
  payload: list,
});

export const listDelete = (list) => ({
  type: 'LIST_DELETE',
  payload: list,
});

// async actions
// e.g., talk to the API
export const listCreateRequest = (list) => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/lists`)
    .send(list)
    .then(res => {
      dispatch(listCreate(res.body));
      return res;
    });
};
