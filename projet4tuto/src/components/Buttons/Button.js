import React from 'react'
import '../FontAwesomeIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {
    const ownClass = `btn ${props.btnType}`
    return (
        <>
            <button 
                className={ownClass} 
                onClick={props.click}
                style={props.isSelected ? {opacity: 1} : {opacity: .7}}
            >
                {props.children}
                { props.icon && <FontAwesomeIcon className='ml-2' icon={props.icon} /> }
            </button>
        </>
    )
}

export default Button