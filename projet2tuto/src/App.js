import React, { Component } from 'react'
import CharCreation from './containers/charcreation/CharCreation'
import CharList from './containers/charlist/CharList'


class App extends Component {
  
  state = {
    refresh: false,
  }

  handleRefresh = () => {
    this.setState((oldState) => {
      return {
        refresh: !oldState.refresh
      }
    })
  }

  render() {
    return (
      <>
        <CharCreation refresh={this.handleRefresh} />
        <CharList refresh={this.state.refresh} />
      </>
    )
  }
}

export default App