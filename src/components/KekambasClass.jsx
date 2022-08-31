import React, { Component } from 'react'
import KekambasTable from './KekambasTable';
import SortBy from './SortBy';

export default class KekambasClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            kekambas: [],
        }
    }

    componentDidMount(){
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(kekambas => this.setState({kekambas}))
    }

    handleSort = (sortType) => {
        let unsortedKekambas = [...this.state.kekambas];
        let sorted = unsortedKekambas.sort((a, b) => {
            if (a[sortType] > b[sortType]){
                return 1
            } else {
                return -1
            }
        });
        this.setState({kekambas: sorted});
    }

    render() {
        return (
            <>
                <SortBy handleSort={this.handleSort} />
                <KekambasTable kekambas={this.state.kekambas}/>
            </>
        )
    }
}
