import React from 'react'

export default function Education(props) {
    return (
        <div className="card border-dark mb-3 job">
            <p className='card-header bold'>{props.name}</p>
            <div class="card-body">
                <p className="card-text">👩🏻‍🎓 {props.degree} @ {props.university}</p>
                <p>📅 {props.startDate} - {props.endDate}</p>
                <p className="card-text">📍 {props.location}</p>
                <p className="card-text">✍️ {props.description}</p>
            </div>
        </div>
    )
}