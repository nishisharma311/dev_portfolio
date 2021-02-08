import React from 'react';

const Skillcard = ({skill:{title,about}}) => 
        <div className="col-lg-6">
            <div className="skill-card">
                <img src="" alt="icon" className="card-item-icon"></img>
                <div className="skill-card-body">
                    <h6 className="title">{title}</h6>
                    <p className="skill-card-about">{about}</p>
                </div>
            </div>

        </div>

export default Skillcard;