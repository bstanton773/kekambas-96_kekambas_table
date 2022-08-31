import React from 'react'
import KekambasRow from './KekambasRow'

export default function KekambasTable(props) {
    
    return (
        <table className="table table-secondary table-striped">
            <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>First Name</th>
                    <th scope='col'>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {props.kekambas.map(k => <KekambasRow kekamba={k} key={k.id} />)}
            </tbody>
        </table>
    )
}
