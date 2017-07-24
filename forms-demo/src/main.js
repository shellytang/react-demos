import React from 'react'
import ReactDom from 'react-dom'
import superagent from 'superagent'

const API_URL = 'http://pokeapi.co/api/v2'
//create a form container component every time you create a form
//a form container is a component that holds the state for a forms input

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeName: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePokeNameChange = this.handlePokeNameChange.bind(this)
  }

  handlePokeNameChange(e) {
    this.setState({pokeName: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.pokemonSelect(this.state.pokeName)
  }

  render() {
    return (
  //all inputs should have their values bond to a state (this is called controlled inputs)
  //we create controlled inputs by binding "value" to a state property and providing an onChange event handler to the input
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='pokemonName'
          placeholder='pokemon name'
          value={this.state.pokeName}
          onChange={this.handlePokeNameChange}
        />
      </form>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonLookup: {},
      pokemonSelected: null,
      pokemonNameError: null,
    }
    this.pokemonSelect = this.pokemonSelect.bind(this)
  }
  //call everytime the state is changed

  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }

  //this will get called once right before the app component gets added to the DOM
  componentDidMount() {
    superagent.get(`${API_URL}/pokemon/`)
    .then(res => {
      let pokemonLookup = res.body.results.reduce((lookup, next) => {
        lookup[next.name] = next.url;
        return lookup
      }, {})
      this.setState({pokemonLookup})
    })
    .catch(console.error)
  }

  pokemonSelect(name) {
    if(!this.state.pokemonLookup[name]) {
      //do something on state that enables the view to show an error that pokemon does not exists
      this.setState({
        pokemonSelected: null,
        pokemonNameError: name,
      })
    } else {
      //make a request ot the pokemon api and do something on state to store the pokemon details to be displayed to the user
      superagent.get(this.state.pokemonLookup[name])
      .then(res => {
        // console.log('selected pokemon', res.body)
        this.setState({
          pokemonSelected: res.body,
          pokemonNameError: null,
        })
      })
      .catch(console.error)
    }
  }
  render() {
    return (
      <div>
        <h1>Form demo</h1>
        <PokemonForm pokemonSelect={this.pokemonSelect} />
        { this.state.pokemonNameError ?
          <div>
            <h2>pokemon {this.state.pokemonNameError} does not exist</h2>
            <p>Make another request!</p>
          </div> :
        <div>
          { this.state.pokemonSelected ?
            <div>
              <h2>selected {this.state.pokemonSelected.name}</h2>
              <h3>abilities</h3>
              <ul>
                { this.state.pokemonSelected.abilities.map((item, i) => {
                  return (
                    <li key={i}>
                      <p>{item.ability.name}</p>
                    </li>
                  )
                }

                )}
              </ul>
            </div> :
            <div>
              <p>make a request</p>
            </div>
          }
        </div>
        }
    </div>
    )
  }
}

//create a place to put the app
const container = document.createElement('div')
document.body.appendChild(container)
ReactDom.render(<App />, container)
