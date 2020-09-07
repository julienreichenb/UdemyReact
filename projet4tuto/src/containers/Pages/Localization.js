import React, { Component } from 'react'
import axios from 'axios'
import TitleH1 from '../../components/Titles/TitleH1'
import Institution from '../Institutions/Institution'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Localization extends Component {
    state = {
        loading: false,
        search: null,
    }

    searchForInstitution = (type) => {
        this.setState({ loading: true })
        axios.get(`http://etablissements-publics.api.gouv.fr/v3/departements/01/${type}`)
            .then((res) => {
                this.setState({ search: res.data.features })
            })
            .catch((error) => {

            })
            .finally(() => {
                this.setState({ loading: false })
            })
    }

    render() {
        return (
            <>
                <TitleH1>Search for an Institution</TitleH1>
                <ButtonGroup>
                    <Button variant="secondary" onClick={() => this.searchForInstitution('mairie')}>Town Hall</Button>
                    <Button variant="secondary" onClick={() => this.searchForInstitution('commissariat_police')}>Police Station</Button>
                    <Button variant="secondary" onClick={() => this.searchForInstitution('pole_emploi')}>Employment Dpt</Button>
                    <Button variant="secondary" onClick={() => this.searchForInstitution('prefecture')}>Prefecture</Button>
                </ButtonGroup>
                <Row>
                    {this.state.search && this.state.search.map((el) => {
                        return (
                        <Col md={6} key={el.properties.id}>
                            <Institution
                                id={el.properties.id}
                                address={el.properties.adresses}
                                schedule={el.properties.horaires}
                                name={el.properties.nom}
                                phone={el.properties.telephone}
                                mail={el.properties.mail}
                                url={el.properties.url}
                            />
                        </Col>                      
                        )
                    })}
                </Row>
             
            </>
        )
    }
}

export default Localization