import React from 'react'
import Weapon from './Weapon'
import imgEpee from '../../../assets/images/armes/epee.png'
import imgFleau from '../../../assets/images/armes/fleau.png'
import imgHache from '../../../assets/images/armes/hache.png'
import imgArc from '../../../assets/images/armes/arc.png'

const Weapons = (props) => {
    /* Write code here */
    return (
        <>
            <div className='card mt-4'>
                <div className='card-header text-white text-center bg-secondary'>
                    <h3>Choose your Weapon</h3>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        {props.weapons.map((weap, i) => {
                            let imgWeap;
                            switch(weap) {
                                case "arc": imgWeap = imgArc
                                    break
                                case "epee": imgWeap = imgEpee
                                    break
                                case "fleau": imgWeap = imgFleau
                                    break
                                case "hache": imgWeap = imgHache
                            }
                            return  <Weapon imgWeap={imgWeap} isChosen={props.chosen === weap} key={i} click={() => props.click(weap)}>
                                        {weap}
                                    </Weapon>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weapons