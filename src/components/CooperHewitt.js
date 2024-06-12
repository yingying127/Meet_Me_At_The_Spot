import React from 'react';
import { Link } from 'react-router-dom';

const CooperHewitt = ({ exhibitions }) => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const matchingExhibitionTodayDate = `${yyyy}-${mm}-${dd}`
    //this is so we can check the exhibiton date with our current date

    const currentExhibitions = exhibitions.filter(e => {
        const exhibitionEndDate = e.date_end;
        return exhibitionEndDate > matchingExhibitionTodayDate
    })
    console.log(currentExhibitions, 'current????')
    return (
        <div>
            <div>
                <h1 className='title'>Meet Me at the <Link to='/home'>
                    <span className='title-spot'> Spot</span></Link>
                    <span>   Cooper Hewitt</span>
                </h1>
            </div>
            <h2 className='exhibitions'>{currentExhibitions?.length} exhibitions displaying (as of {today})</h2>
        </div>
    )
}

export default (CooperHewitt)