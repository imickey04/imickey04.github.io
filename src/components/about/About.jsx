import React from 'react';
import "./about.css";
import AboutMe from "../../images/Me5.jpeg";
import Skill from "../../images/CSS_Skill.png";

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <div className='about-card bg'></div>
            <div className='about-card'>
                <img className='about-image' src={AboutMe} alt='AboutMeImage' />
            </div>
        </div>
        <div className='about-right'>
            <h1 className='about-title'>About Me</h1>
            <p className='about-subtitle'>
                This portfolio is just a showcase of some of my skills, other projects are on the way: stay connected to enjoy them also!
            </p>
            <p className='about-description'>
                I just love to Develop new things. I'm also a good Problem Solver who loves to code everyday.
            </p>
            <div className="about-skill">
                <img src={Skill} alt="" className="about-skill-img" />
                <div className="about-skill-texts">
                    <h4 className="about-skill-title">Hackerrank Certified CSS Skill Holder</h4>
                    <p className="about-skill-description">
                        When I'm not feeling well, then CSS is one of the joy - giving tonics for me. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;