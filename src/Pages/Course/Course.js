import Nav from '../../Components/Nav/Nav'
import { useEffect, useState } from 'react';
import axios from 'axios';
import NoteBoard from './NoteBoard';

function Course() {
    const [courseState, setCourseState] = useState({
        loading: false,
        img: null,
    });

    console.log("Knock Knock");

    useEffect(() => {
        setCourseState({loading: true});

        async function fetchImg() {
            
            const url = 'https://api.unsplash.com/photos/?client_id=rD9jZSXefgkPTo0fzi7MlJHMEwjv7Q0jlhVuIUyuG04';
            
            const images = await axios.get(url);
          
            setCourseState({loading:false, img: images.data.slice(0,7)})
            
        }

        fetchImg();
       
    }, [setCourseState]);
    
    console.log(courseState.img);
   
    return(
        
        <div>
            <Nav />
            {courseState.loading? <div></div> : <NoteBoard imgs={courseState.img} isLoading={courseState.loading}/> }
            
        </div>
        
    )

}

export default Course;

