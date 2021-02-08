import React from 'react';
import {FaDownload} from 'react-icons/fa';
import {FiFacebook} from 'react-icons/fi';
import {FiInstagram} from 'react-icons/fi';
import {FiLinkedin} from 'react-icons/fi';
import {ImGithub} from 'react-icons/im';
import {GoLocation} from 'react-icons/go';
import {FiPhoneCall} from 'react-icons/fi';
import nishi from '../images/nishi.jpg';
import nishi_resume from '../nishi_resume.pdf';
const Sidebar = () => {
    const handleEmail = () => {
        window.open("mailto:nishisharmaanil@gmail.com")
    }
    return (
        <div className="sidebar">
             
            <img src={nishi} alt="hello" className="sidebar_avtar"></img>
            <div className="sidebar_name">Nishi <span>Sharma</span></div>
            <div className="sidebar_item sidebar_title">Web Developer</div>
            <a href={nishi_resume} download="nishi_resume.pdf">
                <div className="sidebar_item sidebar_resume">
                <FaDownload color="#34e89e" /><span>Download Resume</span>
                </div></a>
                <div className="sidebar_icons">
                    <a href="https://facebook.com/nishisharma311"><FiFacebook size="25px" color="#34e89e"/></a>
                    <a href="https://instagram.com/nishisharma311"><FiInstagram size="25px" color="#34e89e"/></a>
                    <a href="https://www.linkedin.com/in/nishi-sharma-1819071a7"><FiLinkedin size="25px" color="#34e89e"/></a>
                </div>
                <div className="contact">
                <div className="sidebar_item sidebar_github"><a href="https://github.com/nishisharma311"><ImGithub size="15px" color="#34e89e"/>Github</a></div>
                <div className="sidebar_item"><GoLocation size="15px" color="#34e89e"/>Prayagraj,India</div>
                <div className="sidebar_item">nishisharmaanil@gmail.com</div>
                <div className="sidebar_item"><FiPhoneCall size="15px" color="#34e89e"/>8077394388/6387945288</div></div>
                <div className="sidebar_email " onClick={handleEmail}><span>Email Me</span></div>
                
        </div>
    )
}
export default Sidebar;

