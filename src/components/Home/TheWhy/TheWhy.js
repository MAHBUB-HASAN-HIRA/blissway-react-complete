import React, { useContext } from 'react';
import './TheWhy.css';
import play_btn from '../../../resources/image/play-btn.png'; 
import videoThumb from '../../../resources/image/video-thumb .jpg'; 
import { UserContext } from '../../../App';

const TheWhy = () => {
    const {setOpen} = useContext(UserContext);
    return (
        <section className="video-wrap the-why">
            <div className="common-wrap clear">
                <div className="video-wrap-inner">
                    <div className="video-content-wrap">
                        <div className="play-btn-wrap">
                            <div onClick={() => setOpen(true)} className="play-btn" id="play-btn-one">
                                <img src={play_btn} alt=""/>
                            </div>
                        </div>
                        <div className="video-content">
                            <div className="section-title">
                                <h3>The Why</h3>
                                <span>of traffic congestion</span>
                            </div>
                            <div className="video-wrap-thumb">
                                <figure>
                                    <img src={videoThumb} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheWhy;