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
            <h2>Current Exhibitions({pagination?.total}) as of {today}</h2>
            {data?.map(record => {
                return (
                    <div key={record.id} className='exhibition box'>
                        <Link to={`/aic/${record.id}`}>
                            <h2>{ record.title }</h2>
                            <img src={record.image_url}></img>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default (ArtInstituteOfChicago)