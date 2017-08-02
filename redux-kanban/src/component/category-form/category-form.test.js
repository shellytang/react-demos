import React from 'react'
import {mount} from 'enzyme'
import CategoryForm from './index.js'

describe('testing CategoryForm', () => {
  test('onComplete should be invoked with the state when onSubmit', () => {
    let mockHandleOnComplete = jest.fn()
    let wrapper = mount(
      <CategoryForm onComplete={mockHandleOnComplete} buttonText='submit' />
    )

    let mockState = {title: 'cool beans'}
    wrapper.setState(mockState)

    wrapper.find('form').simulate('submit')

    let {calls} = mockHandleOnComplete.mock
    expect(calls.length).toBe(1)
    expect(calls[0][0]).toEqual(mockState)

  })


  test('testing onChange should update the title on the state', () => {
    let wrapper = mount (
      <CategoryForm onComplete={() => {}} buttonText='submit' />
    )

    wrapper.find('input').simulate('change', {
      target: {
        value: 'cool',
      },
    })

    expect(wrapper.state('title')).toEqual('cool')
  })
})
