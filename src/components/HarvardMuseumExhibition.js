import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HarvardMuseumExhibition extends Component {
    constructor() {
        super()
        this.state = {
            records: []
        }
    }
    componentDidMount() {
        fetch('https://api.harvardartmuseums.org/exhibition?venue=HAM&status=current&hasimage=1&apikey=8e787d5e-154a-4abd-877c-06d4c150ee6a&size=50')
        .then(res => res.json())
        .then((data) => {
            this.setState({ records: data.records })
        })
    }
    render() {
        const { records } = this.state;
        console.log(records, 'render')
        return (
            <div>
                <h2>Exhibition</h2>
                {records.id}
            </div>
        )
    }
}

const mapState = (state, otherProps) => {
    console.log( state)
    return {
        records: state.records
    }
}

export default connect(mapState)(HarvardMuseumExhibition)