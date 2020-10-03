import React from 'react'
import './Public.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header" style={{paddingLeft:"50px"}}>
            <div className="row">
                <div className="col-md-12" style={{height:"60px"}}>
                    <div className="header-name" style={{}}>
                        CHATGUNCUP
                    </div>
                </div>
            </div>
        </div>
    )
}
    
export default Header