import React from 'react';
import './Header.css';
import blissway from '../../../resources/image/blissway.png';
import solving from '../../../resources/image/solving.png';
import scrollDown from '../../../resources/image/scroll-down.png';

const Header = () => {

    function handleScroll() {
        window.scroll({
            top: document.body.offsetHeight,
            top:800,
            behavior:'smooth',
        });
      }


    return (
        <section className="hero-wrap">
            <div className="common-wrap clear">
                <div className="hero-inner">
                   <div className="hero-link-wrap">
                       <a  href="#">CONTACT</a>
                   </div>
                   
                    <div className="logo">
                        <img src={blissway} alt=""/>
                    </div>
                    <div className="hero-content-wrap">
                        <div className="hero-content">
                          <div className="solving-logo-wrap">
                              <div className="solving-logo">
                                  <figure>
                                      <img src={solving} alt=""/>
                                  </figure>
                              </div>
                          </div>
                            <h4>Highway Congestion</h4>
                        </div>
                        <div className="scroll-down-wrap">
                            <div  onClick={handleScroll} className="scroll-down-btn">
                                <img src={scrollDown} alt=""/>
                                <span>scroll down <dfn>to learn more</dfn></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Header;