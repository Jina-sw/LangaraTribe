import { React, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import Nav from '../../Components/Nav/Nav'
import Compose from './Compose';
import Board from './BoardPost';
import BoardList from './BoardList';
import BoardPost from './BoardPost';

function CommunityBoard (props) {
        const [isEditing, setEdition] = useState(false);
  

    
    return(
        <div>
            <Nav />
            {isEditing ? <Compose isEditing={isEditing} setEdition={setEdition}/> : <BoardList isEditing={isEditing} setEdition={setEdition}/>}
            
        </div>
    )
}

export default CommunityBoard;