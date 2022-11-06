import Nav from '../../Components/Nav/Nav'
import { useEffect, useState } from 'react';
import axios from 'axios';


function Course() {
    const [courseState, setCourseState] = useState({
        loading: false,
        img: null,
    });

    useEffect(() => {
        setCourseState({loading: true});
        async function fetchImg() {
            setCourseState({loading:true});
            const url = 'https://picsum.photos/200/300?grayscale';
            const images = await axios.get(url);
            setCourseState({loading:false, img: images.data})
        }

        setTimeout(fetchImg, 2500);
    }, [setCourseState]);
    
    return(
        
        <div>
            <Nav />
            
            
        </div>
        
    )

}

export default Course;

