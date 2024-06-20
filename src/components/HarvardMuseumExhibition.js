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