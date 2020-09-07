import React from 'react'
import TitleH1 from '../Titles/TitleH1'
import Image from 'react-bootstrap/Image'
import imgHome from '../../assets/img/chateau.jpg'

const Home = (props) => {
    /* Write code here */
    return (
        <>
            <TitleH1>Welcome on my Site !</TitleH1>
            <Image src={imgHome} fluid rounded />
        </>
    )
}

export default Home