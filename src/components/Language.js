import React from 'react'

export default function Language(props) {
    return (
        <div className="card border-dark mb-3 contact text-center">
            <p className='card-header bold'>👉 {props.language}</p>
            <p className='card-title'>{props.level}</p>
        </div>
    )
}