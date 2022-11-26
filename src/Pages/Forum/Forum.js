import Nav from '../../Components/Nav/Nav';
import { Link } from 'react-router-dom';
import { CommunityBoard } from './CommunityBoard';
import { Compose } from './Compose';
import blogImg  from '../../Img/blogIcon.png'
import './Forum.css';
function Forum (props) {
    return (
        <div>
           <Nav/>
           <h1 className="forumTitle"><span className="forumSpan">&nbsp;<span className="bg_forum">Forum</span>&nbsp;</span></h1>
           <div className="optContainer">
                <div className="opt1">
                    
                    <Link to='/Forum/CommunityBoard'>Community Board</Link>
                </div> 
                <div className="opt2">
                    <Link to='/Forum/CommunityBoard/Compose'>Top 15 Blogs Today</Link>
                </div>
            </div>
            
        </div>
    )
}

export default Forum;