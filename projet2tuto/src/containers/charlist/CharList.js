import React, { Component } from 'react'
import axios from 'axios'
import Char from './Char'
import TitleH1 from '../../components/Titles/TitleH1'

class CharList extends Component {
    state = {
        characters: null,
        loading: false,
    }

    loadCharacters = () => {
        this.setState({ loading: true })
        axios.get('https://reactprojet2.firebaseio.com/characters.json')
            .then((response) => {
                const characters = Object.values(response.data)
                this.setState({ characters })
            })
            .catch((error) => {
                // Handle the error here
                console.log(error)
            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    componentDidMount = () => {
        this.loadCharacters()
    }

    componentDidUpdate = (oldProps, oldState) => {
        if(oldProps.refresh !== this.props.refresh)
            this.loadCharacters()
    }

    render() {
        return (
            <>
                <div className='container'>
                    <TitleH1>Your fighters</TitleH1>
                    <div className='row no-gutters'>
                        {this.state.loading || !this.state.characters ? 
                        <div className="spinner-grow text-danger" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> 
                        :
                        this.state.characters.map((char, i) => {
                            return <Char {...char} key={i}  />
                        })}   
                    </div>             
                </div>
            </>
        )
    }
}

export default CharList