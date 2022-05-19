// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// class HarvardMuseumExhibition extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             records: []
//         }
//         // this.findCurrentState = this.findCurrentState.bind(this)
//     }
//     componentDidMount() {
//         fetch('https://api.harvardartmuseums.org/exhibition?venue=HAM&status=current&hasimage=1&apikey=8e787d5e-154a-4abd-877c-06d4c150ee6a&size=50')
//         .then(res => res.json())
//         .then((data) => {
//             this.setState({ records: data.records })
//         })
//     }
//     // findCurrentState() {
//     //     console.log(this.state, 'state')
//     //     console.log(exhibition, 'exhibition')
//     //     return exhibition;
//     // }
//     render() {
//         const { records } = this.state;
//         console.log(this.state, 'render')
//         // const { findCurrentState } = this;
//         return (
//             <div>
//                 <h2>Exhibition</h2>

//             </div>
//         )
//     }
// }

// const mapState = (state) => {
//     console.log(state, 'state map')
//     return {
//         state
//     }
// }

// export default connect(mapState)(HarvardMuseumExhibition)