import React from 'react';
import {mount} from 'enzyme';
import PhotoForm from '../component/photo-form';

describe('PhotoForm', () => {
  test('initial state without props', () => {
    let wrapper = mount(<PhotoForm />);
    expect(wrapper.state('description')).toBe('');
    expect(wrapper.state('preview')).toBe('');
    expect(wrapper.state('photo')).toBe(null);
  });
  test('initial state with props', () => {
    let mockPhoto = {
      _id: 'abc123',
      url: '/wat.jpg',
      description: 'mars rover',
    }
    let wrapper = mount(<PhotoForm photo={mockPhoto} />);
    expect(wrapper.state()).toEqual(mockPhoto);
  });

  test('description input can update the state', () => {
    let wrapper = mount(<PhotoForm />);
    wrapper.find('input[name="description"]').simulate('change', {
      target: {
        name: 'description',
        value: 'i love testing react',
      },
    })
    expect(wrapper.state('description')).toEqual('i love testing react')
  })

  test('file input can update the state', () => {
    let wrapper = mount(<PhotoForm />);
    let mockFile = {
      filename: 'cool.jpg',
      type: 'impage/jpg',
      size: '1kb',
    }
    wrapper.find('input[name="photo"]').simulate('change', {
      target: {
        name: 'photo',
        files: [mockFile]
      },
    })
    expect(wrapper.state('photo')).toEqual(mockFile)
  })

  test('submit event should invoke onComplete with state', () => {
    let mockOnComplete = jest.fn(() => Promise.resolve())

    let wrapper = mount(<PhotoForm onComplete={mockOnComplete} />)
    let mockState = {
      photo: {},
      description: '',
      preview: '',
    }
    wrapper.setState(mockState);
    wrapper.find('form').simulate('submit');
    expect(mockOnComplete).toHaveBeenCalledWith(mockState);
  })

})
