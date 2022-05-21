import React from 'react';
import { Link } from 'react-router-dom';

const CooperHewitt = ({  }) => {
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
                    <span>   Cooper Hewitt</span>
                </h1>
            </div>
            <h2 className='exhibitions'>exhibitions tbd</h2>
        </div>
    )
}

export default (CooperHewitt)