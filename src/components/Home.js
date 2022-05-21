import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='homepage'>
            <h1 className='title'><Link to='/home'>Meet Me at the Spot</Link></h1>
            <div className='row flex-container museum-box'>
                <div className='column column-left'>
                    <Link to='/harvardmuseum'>
                        <div className='bg-layer'>
                            <h2>Harvard Art Museum</h2>
                            <p>Cambridge, MA</p>
                        </div>
                    </Link>
                </div>
                <div className='row flex-container museum-box'>
                    <div className='column column-right3'>
                        <Link to='/louvre'>
                            <div className='bg-layer'>
                                <h2>Louvre</h2>
                                <p>Paris, France</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row flex-container museum-box'>
                <div className='column column-left2'>
                    <Link to='/cooperhewitt'>
                        <div className='bg-layer'>
                            <h2>Cooper Hewitt</h2>
                            <p>New York, NY</p>
                        </div>
                    </Link>
                </div>
                <div className='row flex-container museum-box'>
                    <div className='column column-right2'>
                        <Link to='/met'>
                            <div className='bg-layer'>
                                <h2>Metropolitan Museum of Art</h2>
                                <p>New York, NY</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='row flex-container museum-box'>
                <div className='column column-left3'>
                    <Link to='/europeana'>
                        <div className='bg-layer'>
                            <h2>Europeana</h2>
                            <p>Virtual</p>
                        </div>
                    </Link>
                </div>
                <div className='row flex-container museum-box'>
                    <div className='column column-right'>
                        <Link to='/aic'>
                            <div className='bg-layer'>
                                <h2>The Art Institute of Chicago</h2>
                                <p>Chicago, IL</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(state => state)(Home)