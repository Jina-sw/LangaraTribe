import {React, useState, useEffect} from 'react'
import axios from 'axios'
import BoardList from './BoardList';



function BoardPost(props) {

    
    const [isOpen, setOpen] = useState(false);
    

    function setOpenChange () {

      setOpen(!isOpen)
    }
    
 

    return(
        <div className="postCtn">
            <button className="boardPost" onClick={setOpenChange} >{props.title}</button>
            { isOpen? <div className="contentBox"><div className="content">{props.content}</div></div> : ""}
        </div>
        
        
        
    )
} 

export default BoardPost;