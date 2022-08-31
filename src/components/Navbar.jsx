import React from 'react'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">{props.brand}</span>
            </div>
        </nav>
    )
}
