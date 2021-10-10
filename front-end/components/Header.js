import React from "react";
import headerStyle from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <div className='title' style={headerStyle}>
            <h1>
                <span className='title'>Northern Herpetoculture</span>
            </h1><h4><span>captive bred reptiles and the tools and knowledge to care for them</span></h4>
            <style jsx>
                {`
                    .title {
                      color: #18231a;
                    }
                `}
            </style>
            </div>
        </div>
    )
}

export default Header;