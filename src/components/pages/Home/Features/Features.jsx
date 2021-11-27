import React from 'react';
import { GrLinkedinOption } from 'react-icons/gr'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import sunglass from '../../../../Asserts/sunglass.jpg'
import './Features.css'

const Features = () => {
    return (
        <div className="my">
            <div className="FeatureSection">
                <img src={sunglass} alt="" className={"featureImg"} />
                <div className="outerFeature">
                    <div className="feature">
                        <div className="innerFeature">
                            <h6 className="featureTitle">Lorem ipsum </h6>
                            <h3 className="featureName">
                                Lorem ipsum dolor, sit amet
                            </h3>
                            <p className="feactureDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quidem ex fugit soluta.</p>
                        </div>
                    </div>
                    <div className="socialIcons">
                        <AiOutlineTwitter className="icon" />
                        <BsFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <GrLinkedinOption className="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;