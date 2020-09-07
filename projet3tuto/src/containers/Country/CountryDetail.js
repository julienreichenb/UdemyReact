import React, { Component } from 'react'
import axios from 'axios'
import TitleH1 from '../../components/Titles/TitleH1'
import Country from '../CountryManager/Country'

class CountryDetail extends Component {
    state = {
        data: null,
        loading: false,
    }

    componentDidMount = () => {
        this.setState({ loading: true })
        axios.get(`https://restcountries.eu/rest/v2/name/${this.props.name}?fullText=true`)
        .then((res) => {
            this.setState({ data: res.data[0] })
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            this.setState({ loading: false })
        })
    }

    render() {
        return (
            <>
                <div className="container">
                    <TitleH1>{this.props.name}</TitleH1>
                    { this.state.data && 
                    <Country                    
                        flag={this.state.data.flag}
                        name={this.state.data.name}
                        name_fr={this.state.data.translations.fr}
                        capital={this.state.data.capital}
                        region={this.state.data.region}
                        money={this.state.data.currencies[0]}
                        onDetail={true}
                        {...this.props}
                    />
                    }
                </div>
            </>
        )
    }
}

export default CountryDetail