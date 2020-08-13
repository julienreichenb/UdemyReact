import React from 'react'
import Stat from '../charcreation/character/stats/Stat'
import Player1 from '../../assets/images/persos/player1.png'
import Player2 from '../../assets/images/persos/player2.png'
import Player3 from '../../assets/images/persos/player3.png'
import Arc from '../../assets/images/armes/arc.png'
import Epee from '../../assets/images/armes/epee.png'
import Fleau from '../../assets/images/armes/fleau.png'
import Hache from '../../assets/images/armes/hache.png'

const Char = (props) => {
    const defaultName = '*Unknown player*'
    let playerImg = ''
    switch(props.character.img) {
        case 1: playerImg = Player1
            break
        case 2: playerImg = Player2
            break
        case 3: playerImg = Player3
            break
    }
    let weapImg = ''
    switch(props.character.weapon) {
        case 'arc': weapImg = Arc
            break
        case 'epee': weapImg = Epee
            break
        case 'hache': weapImg = Hache
            break
        case 'fleau': weapImg = Fleau
            break
    }
    return (
        <>
            <div className='col-6'>
                <div className='card m-2'>
                    <div className='card-header bg-info'>
                        <h4 className='font-weight-bold text-white'>{props.username ? props.username : defaultName}</h4>
                    </div>
                    <div className='card-body'>
                        <div className='row no-gutters'>
                            <div className='col-4'>
                                <img src={playerImg} alt='hello' />
                                {props.character.weapon ? 
                                <img src={weapImg} width={50} alt='hello' />
                                :
                                <p>*No Weapon*</p>
                                }
                            </div>
                            <div className='col-8'>
                                {props.character.stats.map((stat, i) => {
                                    return <Stat {...stat} key={stat.label} isChangeable={false} plus={() => props.plus(i)} moins={() => props.moins(i)} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Char