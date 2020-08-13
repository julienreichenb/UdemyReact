import React, { Component } from 'react'
import Button from '../../../components/button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FormAjout extends Component {
    state = {
        title: '',
        author: '',
        pages: 0,
    }

    handleValidationForm(event) {
        event.preventDefault()
        this.props.validation(this.state.title, this.state.author, this.state.pages)
        this.setState({
            title: '',
            author: '',
            pages: 0,
        })
    }

    render() {
        return (
            <>
                <div className='card'>
                    <div className='card-header bg-info'>
                        <h2 className='text-center text-white'>*FORMULAIRE D'AJOUT*</h2>
                    </div>
                    <div class='card-body'>
                        <form>
                            <div className='form-group'>
                                <label htmlFor='titleInput'>Titre du livre</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    id='titleInput'
                                    value={this.state.title}
                                    onChange={(event) => this.setState({title: event.target.value})} 
                                />                      
                            </div>
                            <div className='form-group'>
                                <label htmlFor='authorInput'>Auteur</label>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    id='authorInput' 
                                    value={this.state.author}
                                    onChange={(event) => this.setState({author: event.target.value})} 
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='pageInput'>Nombre de pages</label>
                                <input 
                                    type='number' 
                                    className='form-control'
                                    id='pageInput'
                                    value={this.state.pages}
                                    onChange={(event) => this.setState({pages: event.target.value})} 
                                />
                            </div>
                            <Button btnType='btn-success' click={(event) => this.handleValidationForm(event)}>
                                Enregistrer <FontAwesomeIcon className='ml-2' icon={['fas', 'book-medical']} />
                            </Button>
                        </form>
                    </div>
                </div>
                
            </>
        )
    }
}

export default FormAjout