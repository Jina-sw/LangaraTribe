import { course } from './assetsComponent/displayTemplate';
import "./DisplayArea.css";
// import course1 from '../../../../Img/course1.png';
// import course1 from '../../../Img/course1.png';

function DisplayArea (props) {    
    // console.log(course);
    return (
        <div className='displayTemplate'>
            {course}
        </div>
    );
}

export default DisplayArea;