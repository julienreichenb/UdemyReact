import React, { Component } from 'react'
import classes from './Personne.module.css'

class Personne extends Component {
    render() {
        const style = { 
            color:"white", 
        }

        if (this.props.sex) {
            style.backgroundColor = "blue"
        } else {
            style.backgroundColor = "lightcoral"
        }

        style.fontSize = "20px"
        return (
            <>
                <h1 className={classes.monTitre}>{this.props.nom}</h1>
                <p>{this.props.children}</p>
                <p style={style}>Sexe : {this.props.sex ? 'Homme' : 'Femme'}</p>
                <button onClick={this.props.click}>Anniversaire</button>
            </>
        )   
    }

}

export default Personne