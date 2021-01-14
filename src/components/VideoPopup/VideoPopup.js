import React from 'react';
import Popup from 'reactjs-popup';
import './VideoPopup.css';
import 'reactjs-popup/dist/index.css';
import video from '../../resources/video/video-1.mp4';
import cross from '../../resources/image/cross.png';

const VideoPopup = ({open, closeModal}) => {
    return (
        <Popup open={open} closeOnDocumentClick={false} lockScroll={true} onClose={closeModal}>
            <section className={open ? 'video-modal video-modal-one video-modal-one-show' : 'video-modal video-modal-one'}>
                <div className="common-wrap clear">
                    <div className="video-wrapper">
                        <figure onClick={closeModal} className="modal-close">
                            <img src={cross} alt=""/>
                        </figure>
                        <video autoPlay muted loop playsInline="metadata">
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </section>
        </Popup>

    
    );
};

export default VideoPopup;