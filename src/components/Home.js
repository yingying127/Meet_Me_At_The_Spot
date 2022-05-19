import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='homepage'>
            <div className='row flex-container museum-box'>
                <div className='column column-left'>
                    <Link to='/harvardmuseum'>
                        <div className='bg-layer'>
                            <h2>Harvard Art Museum</h2>
                        </div>
                    </Link>
                </div>
                {/* <div className='column column-right'>
                    <Link to='/cooperhewitt'>
                        <div className='bg-layer'>
                            <h2>Cooper Hewitt Museum</h2>
                        </div>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}

export default connect(state => state)(Home)