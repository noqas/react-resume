import React from 'react'

export default function Course(props) {

    function handleOnClick() {
        console.log("clicked")
    }

    return (
        <table className="table table-sm course table-striped no-margin ">
            <tbody>
                <tr>
                    <th className='col-3 align-middle'>👉 {props.name}</th>
                    <td className='col-2 align-middle'>
                        {(props.hasCertificate && props.isShown) && <a className="btn btn-primary btn-sm" target="_blank" href={props.certificateURL} onClick={handleOnClick} role="button">See Certificate</a>}
                    </td>
                    <td className='col-3 align-middle'>🏢 {props.company}</td>
                    <td className='col-3 align-middle'>📅 {props.date}</td>
                </tr>
            </tbody>
        </table>
    )
}