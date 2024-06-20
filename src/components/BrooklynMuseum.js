import React from "react";
import { Link } from 'react-router-dom';

const BrooklynMuseum = ({}) => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return (
        <div>
            hi
        </div>
    )
}

export default (BrooklynMuseum);