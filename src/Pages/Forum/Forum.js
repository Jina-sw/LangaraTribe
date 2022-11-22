import Nav from '../../Components/Nav/Nav';
import { Link } from 'react-router-dom';
import { View } from './View';
import { Compose } from './Compose';
import './Forum.css';
function Forum (props) {
    return (
        <div>
           <Nav/>
           <div>
                <div>
                    <Link to='/Forum/View'>View posts</Link>
                </div> 
                <div>
                    <Link to='/Forum/Compose'>Write post</Link>
                </div>
            </div>

        </div>
    )
}

export default Forum;