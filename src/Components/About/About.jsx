import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img .svg'
const About = () => {
    return(
        <div className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img } alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Hi! I'm a very good learner and love to learn and make new things.</p>
                        <p>I'm a club leader and I want I club to soo much big.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"90%"}} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{width:"30%"}} /></div>
                        <div className="about-skill"><p>FL Studio</p><hr style={{width:"85%"}} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"60%"}} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>6</h1>
                    <p>months of exprience(LOL)</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>27</h1>
                    <p>Projects completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1></h1>
                    <p>Club Leader</p>
                </div>
            </div>
        </div>
    )
}

export default About