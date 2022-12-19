import React from 'react'

export default function Contacts(props) {
    return (
        <div className="card border-dark mb-3 contact text-center">
            {props.id === 1 && <p className='card-header'>📞</p>}
            {props.id === 2 && <p className='card-header'>📩</p>}
            {props.id === 3 && <p className='card-header'>💼</p>}

            {props.id === 1 && <p className='card-title'>{props.value}</p>}
            {props.id === 2 && <p className='card-title'>{props.value}</p>}
            {props.id === 3 && <p className='card-title'><a href={props.value} target="_blank">LinkedIn</a></p>}
        </div>
    )
}