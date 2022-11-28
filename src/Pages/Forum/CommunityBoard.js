import { React, useState } from 'react';
import { Link } from 'react-router-dom';
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
           
            {isEditing ? <Link to="/Forum/CommunityBoard/Compose"><Compose isEditing={isEditing} setEdition={setEdition}/></Link> 
            : <Link to="/Forum/CommunityBoard"><BoardList isEditing={isEditing} setEdition={setEdition}/></Link>}
            
        </div>
    )
}

export default CommunityBoard;