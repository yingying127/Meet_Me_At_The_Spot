import React from 'react';
import { Link } from 'react-router-dom';

const HarvardMuseumExhibition = ({ records, match }) => {
    const record = records?.filter(record => record.id === match.params.id*1)
    console.log(record, 'record')
    return (
        <div>
            <div>
                <h1 className='title'>Meet Me at the <Link to='/harvardmuseum'>
                    <span className='title-spot'> Spot</span></Link>
                    <span>   <Link to='/harvardmuseum'>Harvard Art Museum</Link> Exhibitions</span>
                </h1>
            </div>
            <div>
                {record?.map(info => {
                    return (
                        <div key={ info.id }>
                            <a href={ info.url } target='_blank'><h2 className='exhibitions2'> {info.title}</h2></a>
                            <div className='exhibitions-container'>
                                <div>
                                    <p className='exhibitions-text'>{ info.people?.length > 1 ? 
                                        'Curated by ' + info.people?.map(person => person.name).join(' and ')
                                        : 'Curated by ' + info.people?.map(person => person.name)
                                    }</p>
                                    <p className='exhibitions-texts'>Available at Harvard Art Museum between</p>
                                    <p className='exhibitions-texts'>{info.begindate} through {info.enddate}</p>
                                </div>
                                <div>
                                    <img className='exhibitionsimage' src={info.images.map(image => image.baseimageurl)} />
                                    <p className='exhibitionssmall'>{info.poster.caption}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default (HarvardMuseumExhibition)

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