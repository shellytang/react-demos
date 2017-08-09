import React from 'react'
import { mount } from 'enzyme'
import Draggable from './index.js'

describe('testing Draggable', () => {
  test('should store json on e.dataTransfer', () => {
    let item = { example: 'data'}
    let wrapper = mount(<Draggable dataTransferItem={item}></Draggable>)
    wrapper.find('.draggable').simulate('dragstart')
    
  })
})
