import React from 'react';
import { Link } from 'react-router-dom';

const HarvardMuseum = ({ info, records }) => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return (
        <div>
            <div>
                <h1 className='title'>Meet Me at the <Link to='/home'>
                    <span className='title-spot'> Spot</span></Link>
                    <span>   Harvard Art Museum</span>
                </h1>
            </div>
            <h2 className='exhibitions'>{info?.totalrecords} exhibitions displaying (as of {today})</h2>
            <div className='record'>
                {records?.map(record => {
                    return (
                        <div className='container' key={record.id}>
                            <Link to={`/harvardmuseum/${record.id}`}>
                                <img src={record.images.map(image => image.baseimageurl)}></img>
                                <div className='overlay'>
                                <h2 className='centered'>{ record.title }</h2>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default (HarvardMuseum)

// class HarvardMuseum extends Component {
//     constructor() {
//         super()
//         this.state = {
//             info: [],
//             records: []
//         }
//     }
//     componentDidMount() {
//         fetch('https://api.harvardartmuseums.org/exhibition?venue=HAM&status=current&hasimage=1&apikey=8e787d5e-154a-4abd-877c-06d4c150ee6a&size=50')
//         .then(res => res.json())
//         .then((data) => {
//             this.setState({ info: data.info, records: data.records })
//         })
//     }
//     render() {
//         const { info, records } = this.state;
//         console.log(info, records, 'state')
//         return (
//             <div>
//                 <h2>Exhibitions ({info.totalrecords})</h2>
//                 {records.map(record => {
//                     return (
//                         <div key={record.id} className='row flex-container exhibition-box'>
//                             <div className='column'>
//                                 <Link to={`/harvardmuseum/${record.id}`}>
//                                     <div className='bg-layer'>
//                                         <h2>{record.title}</h2>
//                                     </div>
//                                 </Link>
//                             </div>
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

// export default connect(state => state)(HarvardMuseum)