import React from 'react'
import classes from './TitleH1.module.css'

const titleH1 = (props) => {
    const ownCss = `${classes.policeTitre} display-3 border border-dark p-2 m-2 bg-primary rounded text-center text-white`
    return (
        <h1 className={ownCss}>{props.children}</h1>
    )
}

export default titleH1