import React from 'react';
import { Link } from 'react-router-dom';

const ArtInstituteOfChicagoExhibition = ({ data, match }) => {
    const exhibition = data?.filter(record => record.id === match.params.id*1)
    console.log(exhibition, 'exhibit')
    return (
        <div>
            <div>
                <h1 className='title'>Meet Me at the <Link to='/home'>
                    <span className='title-spot'> Spot</span></Link>
                    <span>  The Art Institute of Chicago</span>
                </h1>
            </div>
            {
                exhibition?.map(info => {
                    return (
                        <div key={ info.id }>
                            <a href={info.web_url} target='_blank'><h2>Exhibition Curated By {info.title}</h2></a>
                            <p>Available at The Art Institute of Chicago between {info.aic_start_at?.slice(0, 10)} through {info.aic_end_at ? info.aic_end_at.slice(0, 10) : 'TBD'}</p>
                            <img src={info.image_url} />
                            <p>{info.short_description?.slice(3, -4)}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default (ArtInstituteOfChicagoExhibition)