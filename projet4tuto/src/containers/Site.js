import React, { Component } from 'react'
import Home from '../components/Pages/Home'
import Localization from './Pages/Localization'
import Contact from './Pages/Contact'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Error from '../components/Errors/Error'
import Error404 from '../components/Errors/Error404'
import {Route, Switch} from 'react-router-dom'
import Container from 'react-bootstrap/Container'

class Site extends Component {
    render() {
        return (
            <>
                <div className="site">
                    <Navbar />
                    <Container>
                        <Switch>
                            <Route path="/localization" render={() => <Localization />} />
                            <Route path="/contact" render={(props) => <Contact {...props} />} />     
                            <Route path="/" exact render={() => <Home />} />  
                            <Route render={() => <Error><Error404 /></Error>} />                       
                        </Switch>
                    </Container>   
                </div>                 
                <Footer />
            </>
        )
    }
}

export default Site