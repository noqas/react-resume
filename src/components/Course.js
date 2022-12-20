import React from 'react'

export default function Course(props) {

    return (
        <table className='table table-sm table-striped no-margin'>
            <tbody>
                <tr>
                    <th className='col-3 align-middle'>👉 {props.name}</th>
                    <td className='col-2 align-middle'>
                        {(props.hasCertificate && props.isShown) &&
                            <a className='btn btn-primary btn-sm' target='_blank' href={props.certificateURL} role='button'>See Certificate</a>}
                    </td>
                    <td className='col-3 align-middle'>🏢 {props.company}</td>
                    <td className='col-3 align-middle'>📅 {props.date}</td>
                </tr>
            </tbody>
        </table>
    )
}