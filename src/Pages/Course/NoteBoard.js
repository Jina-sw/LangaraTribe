import StickyNote from './StickyNote'
import React from 'react'
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'



const NoteBoard = (props) => {
    const{ imgs, isLoading } = props
   
    console.log("here is NoteBoard")
    console.log(imgs)
    
    if(!imgs || imgs.length === 0) {
        return(<p>Something's wrong</p>)
    }

    return (
        <div>
            <div className="header"><BsReverseLayoutTextSidebarReverse className="icon"/><h1> Course List </h1><BsReverseLayoutTextSidebarReverse className="icon"/></div> 
            <div className="board">
                {!isLoading && imgs.map((photo) => {
                    return(
                    <StickyNote key={photo.id} photo={photo} />
                    )
                })}
            </div>
            
        </div>
    );
};

export default NoteBoard;
