import React from 'react'

const Schedule = (props) => {
    console.log(props.schedule)
    let content = props.schedule.map((s, index) => {
        return <li key={index}>
            From <strong>{s.du}</strong> till <strong>{s.au}</strong> - Between <strong>{s.heures[0].de}</strong> and <strong>{s.heures[0].a}</strong>
        </li>
    })
    return (
        <>
            <ul>
                {content}
            </ul>
        </>
    )
}

export default Schedule