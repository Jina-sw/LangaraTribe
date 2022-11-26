import {React, useState, useEffect} from 'react'
import axios from 'axios'
import BoardList from './BoardList';


function BoardPost(props) {

    


    return(
        <div className="postCtn">
            <div className="boardPost">{props.title}</div>
        </div>
        
        
        
    )
} 

export default BoardPost;