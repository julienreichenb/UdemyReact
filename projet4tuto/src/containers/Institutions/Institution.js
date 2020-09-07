import React from 'react'
import Card from 'react-bootstrap/Card'
import Schedule from './Schedule'

const Institution = (props) => {
    return (
        <>
            <Card className="m-2">
                <Card.Header>
                    {props.name}
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        {props.phone}
                        {props.mail && props.mail}
                    </Card.Title>
                    <Card.Text>
                        <div>{props.address[0].lignes[0]}</div>
                        <div>{props.address[0].codePostal} - {props.address[0].commune}</div>
                        <br />
                        { props.schedule &&
                            <div>
                                <h5>Schedule</h5>
                                <Schedule schedule={props.schedule} />
                            </div>
                        }
                        { props.url &&
                            <div>
                                <div>
                                    <a href={props.url} className="btn btn-info" target="_blank" rel="noopener noreferrer">Visit the website</a>
                                </div>
                            </div>
                        }                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Institution