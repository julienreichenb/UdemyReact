import React from 'react'

const Button = (props) => {
    const ownClass = `btn btn-block ${props.btnType}`
    /* Write code here */
    return (
        <>
            <button className={ownClass} onClick={props.click}>{props.children}</button>
        </>
    )
}

export default Button