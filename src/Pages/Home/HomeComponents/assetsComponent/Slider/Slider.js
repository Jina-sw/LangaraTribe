import React, {useEffect, useState} from 'react';

import './Slider.css';
import SideSlider from './SideSlider'
import UrlData from './UrlData';

export default function Slider() {
    
   
    const [slideIndex, setSlideIndex] = useState(1);
    

    const nextSlide = () => {
        if(slideIndex !== UrlData.length) {
            setSlideIndex(slideIndex + 1);
        } else {
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if(slideIndex == 1) {
            setSlideIndex(UrlData.length)
        } else {
            setSlideIndex(slideIndex-1);
        }
    }

    const onToDot = index => {
        setSlideIndex(index)
    }

    return(
        <div>
            <div className="container-slider">
                {UrlData.map((obj, index) => {
                    return (
                        <div 
                        className={slideIndex === index + 1 ? "slide active" : "slide"}
                        key={obj.id}
                        >
                            <img
                            src={process.env.PUBLIC_URL + `/SliderImg/${index + 1}.jpg`}
                            />
                            <p className="discription">{obj.title}</p>
                            
                        </div>
                    )
                })}
                <SideSlider moveSlide={nextSlide} direction={"next"} />
                <SideSlider moveSlide={prevSlide} direction={"prev"} />
                
                <div className="container-dots">
                        {Array.from({length: UrlData.length}).map((item, index) => (
                            <div 
                            className={slideIndex === index + 1 ? "dot active" : "dot"}
                            onClick={() => onToDot(index + 1)}>

                            </div>
                        ))}
                </div>
            </div>
            <div>
                <h1 className="header1 title">Tribe News</h1>
            </div>
            
        </div>
    )
}