import React from "react";
import { Link } from 'react-router-dom';

const BrooklynMuseum = ({ brooklyndata }) => {
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
                <span>   Brooklyn Museum</span>
                </h1>
            </div>
            <h2 className='exhibitions'>{brooklyndata?.length} exhibitions displaying (as of {today})</h2>
            <div className='record'>
                {brooklyndata?.map(record => {
                    return (
                        <div className='container' key={record.id}>
                            <Link to={`/brooklynmuseum/${record.id}`}>
                                <img src='https://i.imgur.com/HCPfJ2m.png'></img>
                                <div className='overlay'>
                                    <h2 className='centered'> { record.title }</h2>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default (BrooklynMuseum);