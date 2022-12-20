import React from 'react'

export default function Jobs(props) {
    return (
        <div className='card border-dark mb-3 width-47'>
            <p className='card-header'>{props.name}</p>
            <div class='card-body'>
                <p class='card-title bold'>🏢 {props.company}</p>
                <p>📅 {props.startDate} - {props.endDate}</p>
                <p className='card-text'>📍 {props.location}</p>
                {props.skills && <p className='card-text'><span>💪 {props.skills}</span></p>}
                {props.description && <p className='card-text'><span>✍️ {props.description}</span></p>}
            </div>
        </div>
    )
}