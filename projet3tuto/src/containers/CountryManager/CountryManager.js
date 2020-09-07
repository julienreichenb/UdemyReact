import React, { Component } from 'react'
import axios from 'axios'
import TitleH1 from '../../components/Titles/TitleH1'
import Button from '../../components/Buttons/Button'
import Country from './Country'

class CountryManager extends Component {
    state = {
        countriesList: [],
        loading: false,
        currentSelect: null,
        currentPage: 1,
    }

    componentDidMount = () => {
        this.handleSelectRegion()
    }

    handleSelectRegion(region) {
        this.setState({ loading: true, currentPage: 1 })
        if (region === undefined) {
            axios.get('https://restcountries.eu/rest/v2/all')
            .then((res) => {
                const countries = res.data.map((country) => {
                    return {
                        name: country.name,
                        name_fr: country.translations.fr,
                        capital: country.capital,
                        region: country.region,
                        flag: country.flag
                    }
                })
                this.setState({ countriesList: countries, currentSelect: 'all' })
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                this.setState({ loading: false })
            })
        } else {
            axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
            .then((res) => {
                const countries = res.data.map((country) => {
                    return {
                        name: country.name,
                        name_fr: country.translations.fr,
                        capital: country.capital,
                        region: country.region,
                        flag: country.flag
                    }
                })
                this.setState({ countriesList: countries, currentSelect: region })
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                this.setState({ loading: false })
            })
        }
    }

    render() {
        let pagination = []
        let countryList = []
        if (this.state.countriesList) {
            let end = this.state.countriesList.length / 10
            if (this.state.countriesList.length % 10 !== 0) end++
            for (let i = 1; i <= end; i++) {
                pagination.push(
                    <Button 
                        key={i} 
                        btnType="btn-warning" 
                        isSelected={this.state.currentPage === i}
                        click={() => this.setState({ currentPage: i })}
                    >
                        {i}
                    </Button>
                )
            }
            const startList = (this.state.currentPage - 1) * 10
            const endList = (this.state.currentPage - 1) * 10 + 10
            const selectedList = this.state.countriesList.slice(startList, endList)
            countryList = selectedList.map((c) => {
                return (
                    <div className="col-12 col-md-6" key={c.name}>
                        <Country {...c} {...this.props} />
                    </div>
                )
            })
            
        }
        return (
            <>
                <div className="container">
                    <TitleH1>Worldwide Country List</TitleH1>
                    <Button 
                        btnType="btn-info" 
                        click={() => this.handleSelectRegion()}
                        isSelected={this.state.currentSelect === 'all'}
                    >
                        All
                    </Button>
                    <Button 
                        btnType="btn-info" 
                        click={() => this.handleSelectRegion('Europe')}
                        isSelected={this.state.currentSelect === 'Europe'}
                    >
                        Europe
                    </Button>
                    <Button 
                        btnType="btn-info" 
                        click={() => this.handleSelectRegion('Africa')}
                        isSelected={this.state.currentSelect === 'Africa'}
                    >
                        Africa
                    </Button>
                    <Button 
                        btnType="btn-info" 
                        click={() => this.handleSelectRegion('Asia')}
                        isSelected={this.state.currentSelect === 'Asia'}
                    >
                        Asia
                    </Button>
                    <Button 
                        btnType="btn-info" 
                        click={() => this.handleSelectRegion('Americas')}
                        isSelected={this.state.currentSelect === 'Americas'}
                    >
                        Americas
                    </Button>
                    <Button 
                        btnType="btn-info" 
                        click={() => this.handleSelectRegion('Oceania')}
                        isSelected={this.state.currentSelect === 'Oceania'}
                    >
                        Oceania
                    </Button>
                    <span className="ml-5 text-info">
                        Total : 
                        <span className="badge badge-success">{this.state.countriesList.length}</span>
                    </span>
                    { this.state.loading 
                        ? <div>Loading . . .</div>
                        : <div className="row no-gutters">
                            {countryList}
                        </div> 
                    }
                    <div>{pagination}</div>
                </div>
            </>
        )
    }
}

export default CountryManager