import React from 'react';
import './NewTake.css';
import Path_48 from '../../../resources/image/Path_48.png';
import Path_64 from '../../../resources/image/Path_64.png';
import Path_51 from '../../../resources/image/Path_51.png';
import p3_ from '../../../resources/image/p3_.png';

const NewTake = () => {
    return (
        <section className="new-take-wrap bg-style" style={{backgroundImage: `url(${p3_})`}}>
            <div className="common-wrap">
                <div className="new-take-inner">
                    <div className="new-take-content-wrap">
                <div className="new-take-line-left">
                    <img src={Path_51} alt=""/>
                </div>  
                <div className="new-take-content">
                        <h4>A new take on P3</h4>
                        <ul>
                            <li>Zero upfront cost</li>
                            <li>Turnkey tolling as a service</li>
                            <li>No contract required</li>
                            <li>Revenue sharing – from day 1</li>
                        </ul>
                </div>
                </div>
                <div className="new-take-line-right">
                    <img className="desk" src={Path_48} alt=""/>
                    <img className="mobi" src={Path_64} alt=""/>
                </div>
                </div>
            </div>
        </section>
    );
};

export default NewTake;