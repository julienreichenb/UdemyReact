import React from 'react'

const agePersonne = (props) => {
    let now = new Date().getFullYear()
    return (
        <span>Age : {props.age} - {now  - props.age} </span>
    )
}

export default agePersonne;