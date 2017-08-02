import categoryReducer from '../reducer/category.js'

describe('testing category reducer', () => {

  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, {type:null})
    expect(result).toEqual([])
  })

  test('if the action type is not registered it will return the state', () => {
    let mockState = [
      {id: 'abc', title: 'cool'},
      {id: '123', title: 'cool'},
    ]

    let result = categoryReducer(mockState, {type:null})
    expect(result).toEqual(mockState)
  })

  test('CATEGORY_CREATE should append to the array', () => {

    let actionOne = {
      type: 'CATEGORY_CREATE',
      payload: 'hello world',
    }

    let state = categoryReducer([], actionOne)
    expect(state.length).toBe(1)
    expect(state[0]).toBe(actionOne.payload)

    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: 'goodbye world',
    }

    state = categoryReducer(state, actionTwo)
    expect(state.length).toBe(2)
    expect(state[0]).toBe(actionOne.payload)
    expect(state[1]).toBe(actionTwo.payload)

  })

  test('CATEGORY_DELETE should delete category from the array', () => {

    let mockState = [
      {id: 'abc', title: 'cool'},
      {id: '123', title: 'cool'},
      {id: '222', title: 'cool'},
      {id: '333', title: 'cool'},
    ]

    let actionOne = {
      type: 'CATEGORY_DELETE',
      payload: mockState[1],
    }

    let state = categoryReducer(mockState, actionOne)
    expect(state.length).toBe(3)
    expect(state).toEqual(mockState.filter(item => item.id !='123'))
  })

  test('CATEGORY_UPDATE should update category in the array', () => {

    let mockState = [
      {id: 'abc', title: 'cool'},
      {id: '123', title: 'cool'},
      {id: '222', title: 'cool'},
      {id: '333', title: 'cool'},
    ]

    let actionOne = {
      type: 'CATEGORY_UPDATE',
      payload: {id: '222', title: 'hi'},
    }

    let state = categoryReducer(mockState, actionOne)
    expect(state.length).toBe(4)
    expect(state).toEqual(mockState.map(item =>
      item.id =='222' ? actionOne.payload : item))
  })

})
