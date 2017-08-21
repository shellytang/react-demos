import React from 'react';
import {mount} from 'enzyme';
import superagent from 'superagent';
import * as photoActions from '../action/photo-actions';
import superagentMocker from 'superagent-mocker';
import appStoreCreate from '../lib/app-store-create';

import ConnectedPhotoItem, {PhotoItem} from '../component/photo-item';

let mockAPI = superagentMocker(superagent);
let mockPhoto = {
  _id: 'lulwat',
  url: '/cool.jpg',
  description: 'summer fun',
}

describe('PhotoItem', () => {
  test('initial state', () => {
    let wrapper = mount(<PhotoItem  photo={mockPhoto}/>)
    expect(wrapper.state('editing')).toEqual(false)
  })

  test('click trash can should invoke photoDelete with this.props.photo', () => {
    let mockDeletePhoto = jest.fn(() => Promise.resolve())
    let wrapper = mount(<PhotoItem photo={mockPhoto} deletePhoto={mockDeletePhoto} />)
    wrapper.find('.fa-trash-o').simulate('click')
    expect(mockDeletePhoto).toHaveBeenCalledWith(mockPhoto)
  })

  test('click pencil should invoke photoUpdate with this.props.photo', () => {
    let wrapper = mount(<PhotoItem photo={mockPhoto} />)
    wrapper.find('.fa-pencil').simulate('click')
    expect(wrapper.state('editing')).toEqual(true)
  })

  test('ConnectedPhotoItem should make a delete req to the backend and update store', () => {
    mockAPI.del('http://localhost:7777/photos/1234', () => {
      return {
        status: 200,
      }
    });
    let mockStore = appStoreCreate();
    mockStore.dispatch(photoActions.userPhotoCreate(mockPhoto));
    let wrapper = mount(<ConnectedPhotoItem photo={mockPhoto} store={mockStore}/>);
    wrapper.find('.fa-trash-o').simulate('click');
    mockStore.subscribe(() => {
      console.log('store.getState', mockStore.getState())
    });
  });

})
