import React, { Component } from 'react'
import Livre from '../../components/livres/Livre'
import EditLivre from './FormModif/EditLivre'
import FormAjout from './FormAjout/FormAjout'

class Livres extends Component {
    state = {
        lastId: 9,
        editingId: null,
        books: [
            {
                id: 1,
                title: 'React Is Awesome',
                author: 'Facebook',
                page: 351,
            },
            {
                id: 5,
                title: 'Vue Is Better Tho',
                author: 'John Smith',
                page: 123,
            },
            {
                id: 7,
                title: 'Angular ? Wtf Is That ?',
                author: 'God Himself',
                page: 233,
            },
            {
                id: 9,
                title: 'Romeo & Juliett',
                author: 'Shakespear',
                page: 404,
            },
        ],
    }

    handleDeleteBook(id) {
        const i = this.state.books.findIndex(b => {
            return b.id === id
        })
    
        const newBooks = [...this.state.books]
        newBooks.splice(i, 1)

        this.setState({books: newBooks})
    }

    handleEditBook(id) {
        this.setState({editingId: id})
    }

    handleSaveBook = (id, title, author, page) => {
        const i = this.state.books.findIndex(b => {
            return b.id === id
        })
        const newBook = { id, title, author, page }
        const newBooks = [...this.state.books]

        newBooks[i] = newBook
        
        this.setState({ 
            books: newBooks,
            editingId: null,
        })
    }
    
    handleAddBook = (title, author, pages) => {
        const newBook = { id: this.state.lastId + 1, title, author, page: pages }
        const newBooks = [...this.state.books]
        newBooks.push(newBook)
        this.setState({ books: newBooks })
        this.incrementId()
        this.props.closeAdding()
    }

    incrementId() {
        const oldId = this.state.lastId
        this.setState({ lastId: oldId + 1})
    }

    render() {
        return (
            <>
                <table className="table text-center mt-4">
                    <thead>
                        <tr className="table-dark">
                            <th>#</th>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de pages</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map((book) => {
                            if (book.id !== this.state.editingId)
                                return (
                                    <tr key={book.id}>
                                        <Livre {...book} clickDelete={() => this.handleDeleteBook(book.id)} clickEdit={() => this.handleEditBook(book.id)} />
                                    </tr>
                                )
                            else
                                return (
                                    <tr key={book.id}>
                                        <EditLivre {...book} clickSave={this.handleSaveBook} clickCancel={() => this.setState({editingId: null})} />
                                    </tr>
                                )
                        })}
                    </tbody>
                </table>
                {this.props.adding && <FormAjout validation={this.handleAddBook} />}
            </>
        )
    }
}

export default Livres