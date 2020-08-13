import React, {Component} from 'react'
import Personne from './components/Personne/Personne'
import AgePersonne from './components/Personne/AgePersonne'
import Horloge from './containers/Horloge'
import './App.css'

class App extends Component {
    state = {
        personnes: [
            { 
                id: 1,
                nom: "Julien",
                age: 28,
                sex: true,
            },
            { 
                id: 12,
                nom: "Olivier",
                age: 24,
                sex: false,
            },
            { 
                id: 13,
                nom: "John",
                age: 45,
                sex: true,
            },
            {
                id: 46,
                nom: "Toto",
            }
        ]
    }

    anniversaireHandler = (id) => {
        const i = this.state.personnes.findIndex(el => {
            return el.id === id
        })

        /* Synthax pour copier l'Object et non pas uniquement la référence */
        const newPerson = {...this.state.personnes[i]}
        newPerson.age++
        
        /* Synthax pour copier l'Array et non pas uniquement la référence */
        const newPersons = [...this.state.personnes]
        newPersons[i] = newPerson

        /* On remplace les personnes, avec la nouvelle personne updated, dans le state */
        this.setState({personnes: newPersons})
    }

    render() {
        return (
            <>
                <Horloge />
                {this.state.personnes.map((p) => {
                    return (
                        <Personne {...p} click={() => this.anniversaireHandler(p.id)} key={p.id}>
                            <AgePersonne age={p.age} />
                        </Personne>
                    )
                })}
            </>
        )
    }
}

export default App;