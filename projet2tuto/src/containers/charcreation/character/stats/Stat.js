import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Stat.module.css'

const Stat = (props) => {
    const ownCss = `${props.color} rounded text-white text-center p-1 m-1`
    let shape = [];
    for (let i = 0; i < props.value; i++) {
        shape.push(<div className={classes.points} key={i}></div>)
    }
    return (
        <>
            <div className='row no-gutters mb-2'>
                <div className='col-2'>
                    <span className={ownCss} style={props.style}><FontAwesomeIcon icon={props.icon} /></span>
                </div>
                <div className='col-3'>
                    {props.label}                           
                </div>
                {props.isChangeable &&
                <div className='col-1 text-left'>
                     <div className={[classes.signe, classes.moins].join(' ')} onClick={props.moins} />                     
                </div>
                }
                <div className='col'>
                    <div className='row'>
                        {shape.length > 0 ? shape : <small className='text-muted'><FontAwesomeIcon icon='skull' /></small>}                
                    </div>
                </div>
                {props.isChangeable &&
                <div className='col-1 text-right'>
                     <div className={[classes.signe, classes.plus].join(' ')} onClick={props.plus} />                     
                </div>
                }
            </div>
        </>
    )
}

export default Stat