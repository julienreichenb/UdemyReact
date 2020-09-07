import React, { Component } from 'react'
import TitleH1 from '../../components/Titles/TitleH1'
import ContactForm from '../../components/Forms/ContactForm'
import Button from 'react-bootstrap/Button'
import {Route} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'

class Contact extends Component {
    /* Write code here */
    render() {
        return (
            <>
                <TitleH1>Contact Us !</TitleH1>
                <div>
                    <h2>Address</h2>
                    Rue du Technopole 2
                    <h2>Phone</h2>
                    077 432 98 61
                    <h2>Do you prefer to write us ?</h2>
                    <LinkContainer to={this.props.match.path + "/form"}>
                        <Button variant="primary">Send us a message !</Button>
                    </LinkContainer>
                    <Route path={this.props.match.path + "/form"} render={(props) => <ContactForm />} />
                </div>
            </>
        )
    }
}

export default Contact