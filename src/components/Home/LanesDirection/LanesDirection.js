import React, { useState } from 'react';
import './LanesDirection.css';
import Path_46 from '../../../resources/image/Path_46.png';
import Path_47 from '../../../resources/image/Path_47.png';
import Path_64 from '../../../resources/image/Path_64.png';

import fakeData from '../../FakeData/FakeData-one';

const LanesDirection = () => {
    const [directionData, setDirectionData] = useState(fakeData[0]);

    const handleDirection = number =>{
        const findDirection = fakeData.find( data => data.number === number );
        setDirectionData(findDirection);
    }
    
    return (
        <section className="lanes-direction tabs">
        <div className="common-wrap clear">
            <div className="lanes-direction-inner">
                <div className="lanes-direction-content">
                    <div className="section-title">
                        <h5>Why every city should deploy fast lanes*</h5>
                        <span>*a.k.a. express lanes, HOT lanes, or managed lanes</span>
                    </div>
                    <div className="lanes-direction-line">
                        <img src={Path_46} alt=""/>
                    </div>
                </div>
                <div className="lanes-direction-tab-wrap">
                    <div className="lanes-direction-tab-inner"> 
                        <div className="lanes-direction-tab">
                            <div className="lanes-direction-tab-nav">
                                <div className="lanes-tab-nav-inner">
                                   <form action="">
                                   <div onClick={() => handleDirection('one')} className="tab-nav-item">
                                        <input type="radio" id="test11" name="radio-group1" defaultChecked/>
                                        <label  htmlFor="test11">1</label>
                                    </div>
                                    <div onClick={() => handleDirection('two')} className="tab-nav-item">
                                        <input type="radio" id="test22" name="radio-group1"/>
                                        <label htmlFor="test22">2</label>
                                    </div>
                                    <div onClick={() => handleDirection('three')} className="tab-nav-item">
                                        <input type="radio" id="test33" name="radio-group1"/>
                                        <label htmlFor="test33">3</label>
                                    </div>
                                    <div  onClick={() => handleDirection('four')} className="tab-nav-item">
                                        <input type="radio" id="test44" name="radio-group1"/>
                                        <label htmlFor="test44">4</label>
                                    </div>
                                   </form>
                                </div>
                            </div>
                            <div className="direction-tab-item-wrap">
                                <div className="direction-tab-item">
                                    <figure>
                                        <img src={directionData.image_link} alt=""/>
                                    </figure>
                                    <div className="direction-tab-item-content">
                                        <p className="lead"> {directionData.firstPart} <dfn>{directionData.secondPart}</dfn> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lanes-direction-line-down">
                    <img className="desk" src={Path_47} alt=""/>
                    <img className="mobi" src={Path_64} alt=""/>
                </div>
            </div>
        </div>
     </section>
    );
};

export default LanesDirection;