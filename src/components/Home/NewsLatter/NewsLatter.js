import React from 'react';
import './NewsLatter.css';
import emailjs from 'emailjs-com';
import {emailJsData} from '../../../SecretKey';

const NewsLatter = () => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(emailJsData.YOUR_SERVICE_ID, emailJsData.YOUR_TEMPLATE_ID, e.target, emailJsData.YOUR_USER_ID)
          .then((result) => {
              alert('We Received Your Email. Thanks For Your Email.');
              e.target.reset();
          }, (error) => {
              if(error){
                alert('OPPS!! There are some problem. Please try again.')
                console.log(error.text);
              }
          });
      }

    return (
        <section className="news-letter-wrap">
            <div className="common-wrap clear">
                <div className="news-letter-form-wrap">
                    <form onSubmit={sendEmail}>
                        <div className="news-letter-form">
                            <span>Schedule a <dfn>45-minute demo:</dfn></span>
                            <div className="input-row">
                                <div className="input-col">
                                    <input type="email" className='email_field' name='email' placeholder="Your email here"/>
                                </div>
                                <div className="input-col submit">
                                    <input type="submit" value="SUBMIT"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsLatter;