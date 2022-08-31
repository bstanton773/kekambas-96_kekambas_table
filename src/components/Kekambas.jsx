import React, { useEffect, useState } from 'react'
import KekambasTable from './KekambasTable';
import SortBy from './SortBy';

export default function Kekambas() {

    const [kekambas, setKekambas] = useState([]);
    

    useEffect(() => {
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => setKekambas(data))
    }, []); // Similar to componentDidMount

    const handleSort = (sortType) => {
        let unsortedKekambas = [...kekambas];
        let sorted = unsortedKekambas.sort((a, b) => {
            if (a[sortType] > b[sortType]){
                return 1
            } else {
                return -1
            }
        });
        setKekambas(sorted);
    }

    return (
        <>
            <SortBy handleSort={handleSort} />
            <KekambasTable kekambas={kekambas}/>
        </>
    )
}
