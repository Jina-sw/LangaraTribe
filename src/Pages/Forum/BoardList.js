import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BoardPost from './BoardPost';
import Nav from '../../Components/Nav/Nav'
import Compose from './Compose';


function BoardList(props) {
    const [posts, setPosts] = useState();

    const request = async () => {
        const res = await axios.get('http://localhost:5000/posts')
        .catch(err => console.log(err));
        const data = await res.data
        return data;
    }

    useEffect(()=>{
        request().then(data => setPosts(data.posts))
    },[])

    return(
        <div>
            <Nav/>
            <button className="editbtn" onClick={()=>{props.setEdition(true)}}><Link to="/Forum/CommunityBoard/Compose">Contribute</Link></button>
            <div className="mainBoardctn">
                <h1 className="CB">Community Board</h1>
                <div className="mainBoard">
                    <div className="tribeStory">
                        <h1 className="ts">Tribe Story</h1>
                        
                    </div>
                    <div>
                        {posts && posts.map((post, index)=> (<BoardPost id={post._id} title={post.title} content={post.content} setState={setPosts} currentState={posts}/>))}
                    </div>
                </div>
            </div>
            
        </div>
        
    )

}

export default BoardList;