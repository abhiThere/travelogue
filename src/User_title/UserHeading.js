import React from "react";
import './UserHeadingStyle.css';
import canimage from '../images/can-pzs4.jpg'

const UserHeading = () =>
{
    return(
        <div className="heading-body">
        <div className="heading-card">
        <div className="circle">
           
        </div>
        <div className="heading-content">
            <h2>Checkout Who's Traveling</h2>
        </div>
        <img src={canimage} />
    </div>
    </div>
    );
}

export default UserHeading;