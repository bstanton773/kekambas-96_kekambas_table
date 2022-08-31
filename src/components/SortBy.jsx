import React, { Component } from 'react'

// export default class SortBy extends Component {
//     render() {
//         return (
//             <select className='form-select' onChange={e => this.props.handleSort(e.target.value)}>
//                 <option>Sort By</option>
//                 <option value='id'>ID</option>
//                 <option value='first_name'>First Name</option>
//                 <option value='last_name'>Last Name</option>
//             </select>
//         )
//     }
// }

export default function SortBy(props) {
    
    return (
        <select className='form-select' onChange={e => props.handleSort(e.target.value)}>
            <option>Sort By</option>
            <option value='id'>ID</option>
            <option value='first_name'>First Name</option>
            <option value='last_name'>Last Name</option>
        </select>
    )
}

