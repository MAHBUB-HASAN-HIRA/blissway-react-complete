import React from 'react';
import './FastLanes.css';
import Path_49 from '../../../resources/image/Path_49.png';
import Path_44 from '../../../resources/image/Path_44.png';
import Group_17 from '../../../resources/image/Group_17.png';
import Captura_Pantalla from '../../../resources/image/Captura_Pantalla.png';

const FastLanes = () => {
    return (
        <section className="fast-lanes">
            <div className="fast-lanes-inner">
                <div className="common-wrap clear">
                <div className="fast-lanes-content-wrap">
                    <div className="lanes-line">
                        <img src={Path_49} alt=""/>
                        <img src={Path_44} alt=""/>
                    </div>
                    <div className="fast-lanes-content mobi">
                        <h2>Fast lanes,</h2>
                        <p>implemented within months on any highway, anywhere</p>
                    </div>
                    <div className="fast-lanes-thumb-wrap bg-style" style={{backgroundImage: `url(${Captura_Pantalla})`}}>
                        <div className="fast-lanes-logo">
                                <img src={Group_17} alt=""/>
                        </div>
                        <div className="fast-lanes-content desk">
                            <h2>Fast lanes,</h2>
                            <p>implemented within months on any highway, anywhere</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default FastLanes;