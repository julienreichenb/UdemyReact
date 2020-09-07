import React from 'react'
import classes from './TitleH1.module.css'

const TitleH1 = (props) => {
    const ownCss = `${classes.myTitle} p-3 m-3 bg-primary rounded text-center text-white`
    return (
        <>
            <h1 className={ownCss}>
                {props.children}
            </h1>
        </>
    )
}

export default TitleH1