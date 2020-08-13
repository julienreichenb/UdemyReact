import React, { Component } from 'react';
import './components/FontAwesomeIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TitleH1 from './components/title/TitleH1'
import Button from './components/button/Button'
import Livres from './containers/livres/Livres'

class App extends Component {

  state = {
    adding: false
  }

  addBook() {
    const oldAdding = this.state.adding
    this.setState({ adding: !oldAdding })
  }

  render() {
    return (
      <div className="container">
        <TitleH1>
          Ma bibliothèque
        </TitleH1>
        <Livres adding={this.state.adding} closeAdding={() => this.setState({adding: false})} />
        <Button btnType={(this.state.adding ? 'btn-secondary' : 'btn-outline-success') + ' btn-lg mt-2'} click={() => this.addBook()}>
          {this.state.adding ? "Annuler l'ajout" : 'Ajouter un livre'} <FontAwesomeIcon className='ml-2' icon={this.state.adding ? ['fas', 'times'] : ['fas', 'book']} />
        </Button>
      </div>
    );
  }
}

export default App;
