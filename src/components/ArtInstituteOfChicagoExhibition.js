import React from 'react';
import { Link } from 'react-router-dom';

const ArtInstituteOfChicagoExhibition = ({ data, match }) => {
    const exhibition = data?.filter(record => record.id === match.params.id*1)
    console.log(exhibition, 'exhibit')
    return (
        <div>
            <div>
                <h1 className='title'>Meet Me at the <Link to='/aic'>
                    <span className='title-spot'> Spot</span></Link>
                    <span>  <Link to='/aic'>The Art Institute of Chicago</Link> Exhibitions</span>
                </h1>
            </div>
            <div>
                {exhibition?.map(info => {
                    return (
                        <div key={ info.id }>
                            <a href={info.web_url} target='_blank'><h2 className='exhibitions2'>{info.title}</h2></a>
                            <div className='exhibitions-container'>
                                <div>
                                    <p className='exhibitions-texts'>{info.description ? info.description : info.short_description ? info.short_description.slice(3, -4) : 'Click on the title to learn more about this exhibition' }</p>
                                </div>
                                <div>
                                    <img className='exhibitionsimage' src={info.image_url} />
                                    <p className='exhibitionssmall'>Available at The Art Institute of Chicago between {info.aic_start_at?.slice(0, 10)} through {info.aic_end_at ? info.aic_end_at.slice(0, 10) : 'TBD'}</p>
                                </div>
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default (ArtInstituteOfChicagoExhibition)