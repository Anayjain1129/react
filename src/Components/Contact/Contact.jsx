import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    return (
        <div className='contact'>
                <div className='contact-title'>
                    <h1>Get in touch</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's talk</h1>
                        <p>bhai message karo jha se bhi kar payo jada log ni h baat akrne karo karo daba ke karo</p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={mail_icon} alt="" /> <p>anayjain1128@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <img src={call_icon} alt="" /> <p>+966669458</p>
                            </div>
                            <div className="contact-detail">
                                <img src={location_icon} alt="" /> <p>Near vinayak banquet hall, Vidisha</p>
                            </div>
                        </div>
                    </div>
                    <forms className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter your name' name='name' />
                        <label htmlFor="">Your Email</label>
                        <input type="text" placeholder='Enter your email' name='email' />
                        <label htmlFor="">Write your message here</label>
                        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                        <button type='submit' className="contact-submit">Submit Now</button>
                    </forms>
                </div>
            </div>
    )
}

export default Contact




