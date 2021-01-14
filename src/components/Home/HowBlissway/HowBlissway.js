import React, { useContext } from 'react';
import './HowBlissway.css';
import play_btn from '../../../resources/image/play-btn.png'; 
import howBlissway from '../../../resources/image/how-blissway.jpg'; 
import { UserContext } from '../../../App';

const HowBlissway = () => {
    const {setOpen} = useContext(UserContext);
    return (
        <section className="video-wrap how-blissway">
            <div className="common-wrap clear">
                <div className="video-wrap-inner">
                    <div className="video-content-wrap">
                        <div className="play-btn-wrap">
                            <div onClick={() => setOpen(true)} className="play-btn" id="play-btn-two">
                                <img src={play_btn} alt=""/>
                            </div>
                        </div>
                        <div className="video-content">
                            <div className="section-title">
                                <h3>How Blissway</h3>
                                <span>can solve it</span>
                            </div>
                            <div className="video-wrap-thumb">
                                <figure>
                                    <img src={howBlissway} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowBlissway;