import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import BoardPost from './BoardPost';


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

    console.log(posts);

    return(
        <div>
            <button className="editbtn" onClick={()=>{props.setEdition(true)}}><Link to='/Forum/CommunityBoard/Compose'>Contribute</Link></button>
            <div className="mainBoardctn">
                <h1 className="CB">Community Board</h1>
                <div className="mainBoard">
                    <h1 className="ts">Tribe Story</h1>
                    <div>
                        {posts && posts.map((post, index)=> (<BoardPost id={post.id} title={post.title} content={post.content}/>))}
                    </div>
                </div>
            </div>
            
        </div>
        
    )

}

export default BoardList;