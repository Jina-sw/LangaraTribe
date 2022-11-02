import { course, defaultState, Forum, Clubs, News } from './assetsComponent/displayTemplate';
import "./DisplayArea.css";


function DisplayArea (props) {    
    
    let displayed = "";

    switch(props.heroState){
        case "default":
            displayed = defaultState;
            break;
        case "course":
            displayed = course;
            break;
        case "forum":
            displayed = Forum;
            break;
        case "clubs":
            displayed = Clubs;
            break;
        case "news":
            displayed = News;
            break;
        default:
            displayed = defaultState;
            break;
    };

    return (
        <div className='displayTemplate'>
            {displayed}
        </div>
    );
}

export default DisplayArea;