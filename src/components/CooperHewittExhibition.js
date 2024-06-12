import React from "react";
import { Link } from "react-router-dom"

const CooperHewittExhibition = ({ exhibition, match }) => {
    const data = exhibition?.filter(e => e.id === match.params.id)
    console.log(data, 'data')
    return (
        <div>
            <div>
                <h1 className='title'>Meet Me at the <Link to='/cooperhewitt'>
                    <span className='title-spot'> Spot</span></Link>
                    <span>   <Link to='/cooperhewitt'>Cooper Hewitt</Link> Exhibitions</span>
                </h1>
            </div>
            <div>
                {data?.map(info => {
                    return (
                        <div key={ info.id }>
                            <a href={ info.url } target='_blank'>
                                <h2 className='exhibitions2'>
                                    { info.title }
                                </h2>
                            </a>
                            <div className='exhibitions-container'>
                                <div>
                                    <p className='exhibitions-texts'>{ info.text }</p>
                                </div>
                                <div>
                                    <img className='exhibitionsimage' src="https://i.imgur.com/HCPfJ2m.png"></img>
                                    <p className='exhibitions-texts'>Available at Cooper Hewitt, Smithsonian Design Museum between: </p>
                                    <p className="exhibitions-texts">{ info.date_start } through { info.date_end }</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default (CooperHewittExhibition)