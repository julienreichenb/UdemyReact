import React from 'react'
import ImgChar from '../character/imgchar/ImgChar'
import Stats from './stats/Stats'

const Character = (props) => {
    return (
        <>
            <div className='row'>
                <div className='col-6'>
                    <div className='card h-100'>
                        <div className='card-header bg-info text-white text-center'>
                            <h2>Character</h2>
                        </div>
                        <div className='card-body'>
                            <ImgChar numImg={props.img} previous={props.previous} next={props.next} />
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='card'>
                        <div className='card-header bg-warning text-white text-center'>
                            <h2>Stats</h2>
                        </div>
                        <div className='card-body'>
                            <Stats stats={props.stats} total={props.total} plus={props.plus} moins={props.moins} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Character