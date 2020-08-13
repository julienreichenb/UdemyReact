import React from 'react'
import Button from '../../components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Livre = (props) => {
    /* Write code here */
    return (
        <>
            <td>{props.id}</td>
            <td>"{props.title}"</td>
            <td><em>{props.author}</em></td>
            <td>{props.page}</td>
            <td><Button btnType="btn-warning" click={props.clickEdit}>Éditer <FontAwesomeIcon className='ml-2' icon={['fas', 'feather-alt']} /></Button></td>
            <td><Button btnType="btn-danger" click={props.clickDelete}>Supprimer <FontAwesomeIcon className='ml-2' icon={['fas', 'trash-alt']} /></Button></td>
        </>
    )
}

export default Livre