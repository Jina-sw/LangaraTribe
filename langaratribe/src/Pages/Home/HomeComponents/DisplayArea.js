import React, { useState } from 'react';
import Video from './assetsComponent/Video';
import course from './assets/course.jpg';
import "./DisplayArea.css";

function DisplayArea ({heroState}) {
    //const arr = props.map((element) => `hello${element.id}`  ); 

    console.log(`hello ${heroState}`);

 

    

    return (
        <div>
            <img src={course} className="img1"></img>
             
        </div>
    )
}

/*
const DisplayArea = (props) => {

    const array = ["1", "2", "3"];

    array.map() << array[]

    const function top{
        array.map = (element) => {
            <div>{element}</div>
            if (element.id == "course") {
                return (
                    <div>
                        <Circles />
                        <Hero />
                    </div>
                );
            }

            else if (element.id == "chat") {
                return (
                <Hero />
                <Circles />
                );
            }


        }

    const chat = (
        <div className="template">
            <h2 className="heading"></h2>
            <div className={state ? box : none}>
                <div>
                    <img></img>
                    <span></span>
                </div>
            </div>
            <div>
                <section>

                </section>
            </div>
        </div>
    );



    return (
    );
};

*/
export default DisplayArea;