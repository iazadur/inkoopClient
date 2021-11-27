import React from 'react';
import './Writers.css'
import writer from '../../../../Asserts/azad.jpg'


const Writers = () => {
    return (
        <div className="writersBg">
            <h3 className="featuredWriter">Featured Writers</h3>
            <div className="writers">
                {Array.from({ length: 8 }).map((_, idx) => (

                    <div key={idx} className="">
                        <img src={writer} alt="" className="writerImg" />
                        <h4 className="WriterName">Azadur Rahman</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Writers;