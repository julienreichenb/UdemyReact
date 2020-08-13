import React from 'react'
import Stat from './Stat'

const Stats = (props) => {
    const ownCss = `badge rounded ${props.total === 0 ? 'badge-secondary' : 'badge-success'}`
    return (
        <>
            <h4 className='font-weight-bold'>
                Points left <span className={ownCss}>{props.total}</span>
            </h4>
            {props.stats.map((stat, i) => {
                return <Stat {...stat} key={stat.label} isChangeable={true} plus={() => props.plus(i)} moins={() => props.moins(i)} />
            })
            }
        </>
    )
}

export default Stats