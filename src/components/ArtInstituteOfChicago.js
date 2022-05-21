import React from 'react';
import { Link } from 'react-router-dom';

const ArtInstituteOfChicago = ({ pagination, data }) => {
    // console.log(pagination, 'pagination', data, 'data')
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
                    <span>  The Art Institute of Chicago</span>
                </h1>
            </div>
            <h2 className='exhibitions'>{pagination?.total} exhibitions displaying (as of {today})</h2>
            <div className='record'>
                {data?.map(record => {
                    return (
                        <div key={record.id} className='container'>
                            <Link to={`/aic/${record.id}`}>
                                <img src={record.image_url}></img>
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

export default (ArtInstituteOfChicago)