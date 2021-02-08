import React from 'react';
import Skillcard from './Skillcard';

const About = () => {
    const skills=[{
        
        title:"front-end development",
        about: "Lorem ipsum dolor sit amet . Debitis, perferendis."

    },
    {
        
        title:"responsive web designing",
        about: "Lorem ipsum dolor sit, amet. Perferendis harum maxime sit!"

    },
    {
        
        title:"API development using Nodejs",
        about: "Lorem ipsum dolor sit  elit. Similique magnam quaerat culpa."

    },
    {
       
        title:"designing control system",
        about: "Lorem ipsum dolor sit amet  accusantium laborum?"

    },
    {
        
        title:"power system",
        about: "Lorem ipsum dolor sit amet, corrupti iste fugiat impedit ab."

    },
    {
        
        title:"embedded systems and IOT",
        about: "Lorem ipsum dolor sit amet consectetur  elit. Ab, nostrum."

    }
]
    return (
        <div>
           <div className=" about">
               <div className="objective">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum harum placeat vitae quisquam quidem ipsum!
               </div>
               <div className="container about_container skillcard">
                   <h6 className="heading">What I offer</h6>
                   <div className="row skill-card-row">
                       {
                           skills.map(skill=>
                            <Skillcard skill={skill}/>
                            )
                       }
                   </div>
               </div>
           </div>
        </div>
    );
};

export default About;