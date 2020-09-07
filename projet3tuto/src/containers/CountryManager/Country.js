import React from 'react'
import {NavLink} from 'react-router-dom'
const component = (props) => {    
    let content = null
    if (props.onDetail) {
        content = (
            <div>Money is <strong>{props.money.name} ({props.money.symbol})</strong></div>
        )
    } else {
        content = (
            <NavLink to={props.match.url + '/' + props.name}>Details</NavLink>
        )
    }
    return (
        <>
            <div className='row no-gutters m-2'>
                <div className='col-4'>
                    <img src={props.flag} width="100%" className="p-2" alt={props.name} />
                </div>
                <div className='col'>
                    <h4 className="text-info">{props.name}</h4>
                    <h6><em className="text-muted">{props.name_fr}</em></h6>
                    <div>Capital city is <strong>{props.capital}</strong></div>
                    <div>Located in <strong>{props.region}</strong></div>
                    {content}
                </div>
            </div>
        </>
    )
}

export default component