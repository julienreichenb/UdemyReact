import React from 'react'

const Alert = (props) => {
    const ownCss = `alert alert-${props.type}`
    return (
        <>
            <div className={ownCss} role='alert'>
                {props.children}
            </div>
        </>
    )
}

export default Alert