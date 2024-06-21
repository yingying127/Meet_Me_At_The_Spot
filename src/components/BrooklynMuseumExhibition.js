import React from "react";
import { Link } from 'react-router-dom'

const BrooklynMuseumExhibition = ({ brooklyndata, match }) => {
    const data = brooklyndata?.filter(data => data.id === match.params.id*1)
    return (
        <div>
            <div>
                <h1 className='title'>Meet Met at the <Link to='/brooklynmuseum'>
                    <span className='title-spot'> Spot</span></Link>
                    <span>   <Link to='/brooklynmuseum'>Brooklyn Museum</Link> Exhibitions</span>
                </h1>
            </div>
            <div>
                {data?.map(info => {
                    return (
                        <div key={info.id}>
                            <a href='https://www.brooklynmuseum.org/exhibitions' target='_blank'>
                                <h2 className='exhibitions2'>{info.title}</h2>
                            </a>
                            <div className='exhibitions-container'>
                                <div>
                                    <p className='exhibitions-text'>Click on the title to learn more about this exhibition.</p>
                                </div>
                            </div>
                            <div>
                                <img className='exhibitionsimage' src='https://i.imgur.com/liI5Dco.jpeg' />
                                <p className='exhibitionssmall'>Available at Brooklyn Museum between {info.display_date}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default (BrooklynMuseumExhibition)