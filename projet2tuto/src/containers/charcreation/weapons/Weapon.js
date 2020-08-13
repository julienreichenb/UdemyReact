import React from 'react'

const Weapon = (props) => {
    const opacity = props.isChosen ? 1 : 0.3
    return (
        <>
            <div className='col text-center'>
                <img src={props.imgWeap} style={{opacity: opacity}} alt={props.children} onClick={props.click} />
                <h5 className='text-capitalize font-weight-bold'>{props.children}</h5>
            </div>
        </>
    )
}

export default Weapon