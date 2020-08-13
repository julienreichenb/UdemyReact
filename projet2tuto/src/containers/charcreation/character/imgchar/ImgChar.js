import React from 'react'
import ImageP1 from '../../../../assets/images/persos/player1.png'
import ImageP2 from '../../../../assets/images/persos/player2.png'
import ImageP3 from '../../../../assets/images/persos/player3.png'
import classes from './ImgChar.module.css'

const ImgChar = (props) => {
    
    let currentImg = ''
    switch(props.numImg){
        case 1:
            currentImg = ImageP1
            break;
        case 2:
            currentImg = ImageP2
            break;
        case 3:
            currentImg = ImageP3
            break;
    }

    return (
        <>
            <div className='row no-gutters text-center align-items-center'>
                <div className={['col-1', classes.fleche, classes.gauche].join(' ')} onClick={props.previous} />
                <div className='col'>
                    <img src={currentImg} alt='Perso' />
                </div>
                <div className={['col-1', classes.fleche, classes.droite].join(' ')} onClick={props.next} />
            </div>
        </>
    )
}

export default ImgChar