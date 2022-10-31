import course1 from '../../../../Img/course1.png';
import clubs1 from '../assets/clubs.jpg';
import room from '../assets/room.jpg'
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsFillSuitHeartFill, BsFillDoorOpenFill, BsJoystick } from "react-icons/bs";
import { AiFillQuestionCircle, AiOutlineQuestion } from "react-icons/ai";
import { ImLoop, ImNext2, ImPlay2, ImPrevious2, ImShuffle } from "react-icons/im";
import { FaPersonBooth } from "react-icons/fa";
import { FcRight } from "react-icons/fc"


export const course = (
    <div className='course'>
        <h2 className='header1'>
            Course Feature
        </h2>
        <div className='grid grid_col_2 gap_5'>
            <img className="frImg courseImg" src={course1} alt="Student animation img for courses" />
            <div className='frText'>
                <h3 className='header2 ml-2v mt-5v'>
                    Get the Latest <span>course</span> information <span>here</span>!
                </h3>
                <ul className='courseList'>
                    <li>List of <span>Courses</span></li>
                    <li><span>Course</span> Information</li>
                    <li>Anonymous <span>Open Chatting</span></li>
                </ul>
                <h3 className='header2 ml-2v mt-5v'>
                    Program Designed Just For <br />
                </h3>
                <h3 className='header2 ml-2v'>
                    <span>Langara College</span> Students
                </h3>
            </div>
        </div>
    </div>
);

//defaultState is subjected to be updated
export const defaultState = (
    <div>
        <h2 className='header1'>
            Welcome to Langara Tribe!
        </h2>
        <div className='grid grid_col_2'>
            <h2 className='defaultStateNumber'>
                01
            </h2>
            <div className='frOne mt-5v'>
                <h3 className='header2'>
                    Hover Over Above <span>Icons</span>
                </h3>
                <h3 className='header2'>
                    To Learn More About Our <span>Features</span>
                </h3>
                <p className='defaultStateText'>
                    But before that... Please read on!
                </p>
            </div>
            <div className='frText'>
                <h3 className='header2 ml-2v mt-5v'>
                    Make Sure You <span>Log In!</span><br />
                    You Will <span>Not</span> Have Access to Our Features!
                </h3>
                <p className='defaultStateText ml-2v'>
                    You <u>WON'T</u> be redirected to the feature page <br/>
                    <u>UNLESS</u> you are logged in.
                </p>
            </div>
            <h2 className='defaultStateNumber'>
                02
            </h2>

        </div>
        <div className='mt-5'>
            <h3 className='header2 centerText'>
                All-In-One Program to enhance your experience at <span>Langara College</span>
            </h3>
        </div>
        <h3 className='header2 ml-2v centerText mt-5 mb-5'>
            <span>Langara College</span> Students
        </h3>
    </div>
);

export const Forum = (
    <div>
        <h2 className='header1'>
            Forum Information
        </h2>
        <div className='flex-3 gap_3 mb-5'>
            <div className='card'>
                <div className='cardIcon'>
                    <IoChatbubblesSharp className='chatIcon' />
                </div>
                <h3 className='cardHeader centerText'>
                    <p>
                        Open Chat
                    </p>
                    <div className='spacer' />
                    <BsFillSuitHeartFill />
                </h3>
                <div className='centerDec'>
                    <AiFillQuestionCircle className='decIcon' /><div className='line'></div>
                </div>
                <div className='botDec grid botDecGrid'>
                    <ImShuffle />
                    <ImPrevious2 />
                    <ImPlay2 />
                    <ImNext2 />
                    <ImLoop />
                </div>
                <div className='line linebreak'></div>
            </div>
            <div className='card'>
                <div className='cardIcon'>
                    <FaPersonBooth className='chatIcon' />
                </div>
                <h3 className='cardHeader centerText'>
                    <p>
                        Threads
                    </p>
                    <div className='spacer' />
                    <BsFillSuitHeartFill />
                </h3>
                <div className='centerDec'>
                    <AiFillQuestionCircle className='decIcon' /><div className='line'></div>
                </div>
                <div className='botDec grid botDecGrid'>
                    <ImShuffle />
                    <ImPrevious2 />
                    <ImPlay2 />
                    <ImNext2 />
                    <ImLoop />
                </div>
                <div className='line linebreak'></div>
            </div>
            <div className='card'>
                <div className='cardIcon'>
                    <AiOutlineQuestion className='chatIcon' />
                </div>
                <h3 className='cardHeader centerText'>
                    <p>
                        Search
                    </p>
                    <div className='spacer' />
                    <BsFillSuitHeartFill />
                </h3>
                <div className='centerDec'>
                    <AiFillQuestionCircle className='decIcon' /><div className='line'></div>
                </div>
                <div className='botDec grid botDecGrid'>
                    <ImShuffle />
                    <ImPrevious2 />
                    <ImPlay2 />
                    <ImNext2 />
                    <ImLoop />
                </div>
                <div className='line linebreak'></div>
            </div>
        </div>
    </div>
);


//When all features are made, planning to put some screeshots to explain which is which feature. 
//Connect proper components to icons and links later

export const Clubs = (
    <div>
        <img src={clubs1} alt="Langara Club activity" width="100%"></img>
        <div className = "headContainer">
            <h2 className="option">Join Langara Clubs Online</h2>
            <div className="iconContainer">
                <div className="gap">
                    <div className="iconContent">
                        <BsFillDoorOpenFill className = "clubIcons door"/>
                        <p className="exp">Explore Existing Clubs</p>
                    </div> 
                </div>
                <div className="gap">
                    <div className="iconContent">
                        <BsJoystick className = "clubIcons joyStick"/>
                        <p className="exp">Start a New Club</p>
                    </div>
                </div>
            </div>
        </div>
        <div className = "headContainer">
            <h2 className="info">Tribe offers a <span className="larger">platform</span></h2>
            <h2 className='info'>where Langara students rebase offline experiences <span className="larger">online</span></h2>
        </div>
        <div className = "headContainer">
            <ul>
                <li>Enjoy your <span className="larger">Member-Only</span> online club space </li>
                <li>Announce <span className="larger">Next Events</span> in club group chat</li>
                <li><span className="larger">Create</span>a new club for any interest and hobby</li>
                <li><span className="larger">Recruit</span> new members and <span className="larger">Advertise </span>your club online</li>
            </ul>
            
        </div>
        <div className="Link">
            <p>Go to Clubs</p>
            <FcRight className="arrow"/>
        </div>
    </div>
);