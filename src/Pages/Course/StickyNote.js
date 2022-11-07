import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './Course.css'
import {BsFillPinAngleFill} from 'react-icons/bs'
import {ImPushpin} from 'react-icons/im';

const StickyNote = (props) => {
    
    const { key, photo } = props; 
    return (
        //implant course name from api 
        <div className="Container">
            <ImPushpin className="pin" />
            <div className="frame">
                <div className="imgContainer"><img src={photo.urls.small_s3}></img></div>
            </div>
            
            <div className="Text">Tribe Name : CPSC2600</div>
        </div>
        
        
    )

}

export default StickyNote;