import React from 'react'

export default function KekambasRow(props) {
    const kekamba = props.kekamba;
    return (
        <tr>
            <td>{kekamba.id}</td>
            <td>{kekamba.first_name}</td>
            <td>{kekamba.last_name}</td>
        </tr>
    )
}
