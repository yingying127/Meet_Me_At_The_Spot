import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <h1 className='title'><Link to='/'>Meet Me at the Spot</Link></h1>
        </div>
    )
}

export default connect(state => state)(Navbar)