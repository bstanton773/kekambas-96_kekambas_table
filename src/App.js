import React from 'react'
import Kekambas from './components/Kekambas'
import KekambasClass from './components/KekambasClass'
import Navbar from './components/Navbar'

export default function App() {
    let appName = 'My Kekambas'
    
    return (
        <>
            <Navbar brand={appName} />
            <div className='container'>
                {/* <Kekambas /> */}
                <KekambasClass />
            </div>
        </>
    )
}
