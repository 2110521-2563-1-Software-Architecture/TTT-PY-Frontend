import React, { useState, useEffect } from 'react'
import '../Public.css';
import { useHistory } from "react-router-dom";
import Util from '../../Util';

function NotFound() {
    return (
        <div className="background-color">
            <div className="title" style={{paddingTop:"100px",paddingLeft:"100px"}}>
                404 Not Found
            </div>
        </div>
    )
}

export default NotFound
