import React from 'react';
import { Link } from "react-router-dom";
import './Pagination.scss';

const Pagination  = (props) => {
    return (
        <div className='pagination'>
            <div className={props.previous?"pagination-link":"pagination-link hidden"}>
                 Previous: <Link to={props.previousUrl?props.previousUrl:'/'}>{props.previous}</Link>
            </div>
            <div className={props.next?"pagination-link":"pagination-link hidden"}>
                 Next: <Link to={props.nextUrl?props.nextUrl:''}>{props.next}</Link>
            </div>
        </div>
    );
}

export default Pagination;