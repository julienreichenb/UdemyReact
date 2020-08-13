import React, { Component } from 'react'
import '../../components/FontAwesomeIcons'
import Button from '../../components/button/Button'
import TitleH1 from '../../components/Titles/TitleH1'
import Character from './character/Character'
import Weapons from './weapons/Weapons'
import axios from 'axios'
import rug from 'random-username-generator'

class CharCreation extends Component {
    state = {
        username: '',
        total: 12,
        max: 9,
        weapons: null,
        character: {
            img: 1,
            weapon: null,
            stats: [
                {
                    label: 'Strength',
                    value: 0,
                    icon: ['fas', 'dumbbell'],
                    color: 'bg-danger',
                },
                {
                    label: 'Agility',
                    value: 0,
                    icon: ['fas', 'running'],
                    color: 'bg-warning',
                },
                {
                    label: 'Intelligence',
                    value: 0,
                    icon: ['fas', 'brain'],
                    color: 'bg-success',
                },
                {
                    label: 'Spirit',
                    value: 0,
                    icon: ['fas', 'moon'],
                    style: { backgroundColor: 'purple'},
                },
                {
                    label: 'Stamina',
                    value: 0,
                    icon: ['fas', 'shield-alt'],
                    color: 'bg-info',
                },
            ]
        }
    }    

    componentDidMount = () => {
        axios.get("https://reactprojet2.firebaseio.com/weapons.json")
            .then((response) => {
                const weaponsArray = Object.values(response.data)
                this.setState({weapons: weaponsArray})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    reset() {
        const defaultState = {
            username: '',
            total: 12,
            character: {
                img: 1,
                weapon: null,
                stats: [
                    {
                        label: 'Strength',
                        value: 0,
                        icon: ['fas', 'dumbbell'],
                        color: 'bg-danger',
                    },
                    {
                        label: 'Agility',
                        value: 0,
                        icon: ['fas', 'running'],
                        color: 'bg-warning',
                    },
                    {
                        label: 'Intelligence',
                        value: 0,
                        icon: ['fas', 'brain'],
                        color: 'bg-success',
                    },
                    {
                        label: 'Spirit',
                        value: 0,
                        icon: ['fas', 'moon'],
                        style: { backgroundColor: 'purple'},
                    },
                    {
                        label: 'Stamina',
                        value: 0,
                        icon: ['fas', 'shield-alt'],
                        color: 'bg-info',
                    },
                ]
            }
        }
        this.setState({...defaultState})
    }

    handleReset = () => {
        this.reset()
    }

    handleRandom = async () => {
        await this.handleReset()
        const randomImg = Math.floor(Math.random() * 3 + 1)
        const randomIWeap = Math.floor(Math.random() * this.state.weapons.length)
        const randomStats = [...this.state.character.stats]
        let newTotal = this.state.total
        for (let i = 0; i < this.state.total; i++) {
            const randI = Math.floor(Math.random() * 5)
            if (newTotal > 0 && randomStats[randI].value <= this.state.max) {
                randomStats[randI].value++
                newTotal--
            } else {
                i--
            }
        }
        const newCharacter = {...this.state.character}
        newCharacter.stats = randomStats
        newCharacter.img = randomImg
        newCharacter.weapon = this.state.weapons[randomIWeap]

        this.setState({character: newCharacter, total: newTotal, username: rug.generate() })
    }

    handleNext = () => {
        let newCharacter = {...this.state.character}
        newCharacter.img = newCharacter.img >= 3 ? 1 : newCharacter.img + 1
        this.setState({ character: newCharacter })
    }

    handlePrevious = () => {
        let newCharacter = {...this.state.character}
        newCharacter.img = newCharacter.img <= 1 ? 3 : newCharacter.img - 1
        this.setState({ character: newCharacter })
    }

    handleMoins = (i) => {
        const newCharacter = {...this.state.character}
        let newTotal = this.state.total
        let oldValue = newCharacter.stats[i].value
        if (oldValue > 0) {
            newCharacter.stats[i].value--
            newTotal++
        }
        this.setState({ character: newCharacter, total: newTotal })
    }

    handlePlus = (i) => {
        const newCharacter = {...this.state.character}
        let newTotal = this.state.total
        let oldValue = newCharacter.stats[i].value
        if (newTotal > 0 && oldValue <= this.state.max) {
            newCharacter.stats[i].value++
            newTotal--
        }
        this.setState({ character: newCharacter, total: newTotal })
    }

    handleWeapon = (weapon) => {
        const newCharacter = {...this.state.character}
        newCharacter.weapon = weapon
        this.setState({ character: newCharacter })
    }

    handleSave = () => {
        const player = {
            character: {...this.state.character},
            username: this.state.username,
        }
        axios.post('https://reactprojet2.firebaseio.com/characters.json', player)
            .then((response) => {
                // Handle the response here
                this.props.refresh()
            })
            .catch((error) => {
                // Handle the error here
                console.log(error)
            })
            .finally(() => {
                this.reset()
            })
    }

    render() {
        return (
            <>
                <div className='container'>
                    <TitleH1>Créateur de perso</TitleH1>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="usernameInput" 
                            placeholder="Choose a username !"
                            value={this.state.username}
                            onChange={event => this.setState({username: event.target.value})}
                        />
                    </div>
                    <Character 
                        {...this.state.character}
                        total={this.state.total}
                        next={this.handleNext}
                        previous={this.handlePrevious}
                        plus={this.handlePlus}
                        moins={this.handleMoins}
                    />
                    {this.state.weapons ?
                        <Weapons weapons={this.state.weapons} chosen={this.state.character.weapon} click={this.handleWeapon} />
                        :
                        <div className="mt-3 progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
                        </div>
                    }
                    <div className='btn-group btn-group-lg w-100 mt-3'>
                        <Button btnType='btn-danger' icon={['fas', 'dizzy']} click={this.handleReset}>Reset</Button>
                        <Button btnType='btn-info' icon={['fas', 'random']} click={this.handleRandom}>Randomize</Button>
                        <Button btnType='btn-success' icon={['fas', 'fist-raised']} click={this.handleSave}>Let's fight</Button>
                    </div>
                </div>
            </>
        )
    }
}

export default CharCreation