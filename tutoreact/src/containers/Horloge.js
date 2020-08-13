import React, { Component } from 'react'
import classes from './Horloge.module.css'

class Horloge extends Component {
    constructor(props) {
        super(props)
        console.log('component created')
    }
    state = {
        date: new Date(),
        cpt: 1,
    }

    tick () {
        this.setState((oldState, props) => {
                return { 
                    date: new Date(),
                    cpt: oldState.cpt + 1 
                }
            }
        )
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000)
        console.log('component mounted')
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        console.log('component rendered')
        return (
            <>
                <h2 className={classes.monTitre}>Horloge : {this.state.date.toLocaleTimeString()}</h2>
                <p>Cpt : {this.state.cpt}</p>
            </>
        )
    }
}

export default Horloge