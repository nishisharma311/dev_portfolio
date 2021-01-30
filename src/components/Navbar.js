import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="active">
                About
            </div>
            <div className="navbar_items">
                <div className="navbar_item">About</div>
                <div className="navbar_item">Resume</div>
                <div className="navbar_item">Projects</div>
                <div className="navbar_item">Education</div>
            </div>
            
        </div>
    );
};

export default Navbar;
