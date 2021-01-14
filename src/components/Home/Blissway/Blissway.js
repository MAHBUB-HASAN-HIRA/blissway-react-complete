import React, { useState } from 'react';
import './Blissway.css';
import Wall from '../../../resources/image/WAL.png';
import fakeDataTwo from '../../FakeData/FakeData-two';

const Blissway = () => {

    const [tabItem, setTabItem] = useState(fakeDataTwo[0]);

    const handleTabItem = number => {
        const findTabItem = fakeDataTwo.find(item => item.number === number);
        setTabItem(findTabItem);
    }
    return (
        <section className="blissway-wrap tabs">
        <div className="blissway-inner">
            <div className="common-wrap clear">
                <div className="section-title">
                   <div className="title-inner">
                       <h1>BLISSWAY</h1>
                       <span>builds next-generation tolling solutions for cities</span>
                       <p>from software-heavy, hardware-lite roadside infrastructure to contract-free public-private partnerships</p>
                   </div>
                </div>
            </div>
            <div className="blissway-tab-wrap">
               <div className="blissway-tab-item-wrap">
                   <div className="tab-item">
                       <div className="tab-item-thumb" style={{backgroundImage: `url(${Wall}`}}></div>
                       <div className="tab-item-content"> 
                           <h6>{tabItem.name}</h6>
                           <ul>
                               
                               {
                                   tabItem.property.map((item, index) => <li key={index}>{item}</li>)
                               }
                           </ul>
                        </div>
                   </div>
               </div>
                <div className="blissway-tab-handler">
                        <div className="tab-nav-wrap">
                            <div className="lanes-tab-nav-inner">
                                <div onClick={() => handleTabItem('one')} className="tab-nav-item">
                                    <input type="radio" id="test1" name="radio-group" defaultChecked/>
                                    <label htmlFor="test1">1</label>
                                </div>
                                <div onClick={() => handleTabItem('two')} className="tab-nav-item">
                                    <input type="radio" id="test2" name="radio-group"/>
                                    <label htmlFor="test2">2</label>
                                </div>
                                <div onClick={() => handleTabItem('three')} className="tab-nav-item">
                                    <input type="radio" id="test3" name="radio-group"/>
                                    <label htmlFor="test3">3</label>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Blissway;