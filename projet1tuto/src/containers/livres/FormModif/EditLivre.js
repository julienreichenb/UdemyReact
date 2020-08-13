import React, {Component} from 'react'
import Button from '../../../components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class EditLivre extends Component {
    state = {
        newTitle: '',
        newAuthor: '',
        newPage: 0,
    }

    componentDidMount() {
        this.setState({
            newTitle: this.props.title,
            newAuthor: this.props.author,
            newPage: this.props.page
        })
    }

    handleSave = () => {
        this.props.clickSave(this.props.id, this.state.newTitle, this.state.newAuthor, this.state.newPage)
        this.setState({
            newTitle: '',
            newAuthor: '',
            newPage: 0,
        })
    }

    handleCancel(event) {
        event.preventDefault()
        this.props.clickCancel()
    }

    render() {
        return (
            <>
                <td>{this.props.id}</td>
                <td>
                    <input 
                        type="text" 
                        value={this.state.newTitle}
                        onChange={(event) => this.setState({newTitle: event.target.value})}
                    />
                </td>
                <td>
                    <input 
                        type="text"
                        value={this.state.newAuthor} 
                        onChange={(event) => this.setState({newAuthor: event.target.value})}
                    />
                </td>
                <td>
                    <input
                        type="number"
                        value={this.state.newPage} 
                        onChange={(event) => this.setState({newPage: event.target.value})}
                    />
                </td>
                <td><Button btnType="btn-success" click={(event) => this.handleSave(event)}>Ok <FontAwesomeIcon className='ml-2' icon={['fas', 'save']} /></Button></td>
                <td><Button btnType="btn-secondary" click={(event) => this.handleCancel(event)}>Annuler <FontAwesomeIcon className='ml-2' icon={['fas', 'times']} /></Button></td>
            </>
        )
    }
}

export default EditLivre