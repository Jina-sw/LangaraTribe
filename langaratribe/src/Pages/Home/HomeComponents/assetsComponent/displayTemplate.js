import course1 from '../../../../Img/course1.png';

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
        <div className='grid grid_col_2 gap_5'>
            <div className='frOne mt-5v'>
                <h3 className='header2'>
                    Hover Over Above <span>Icons</span>
                </h3>
                <h3 className='header2'>
                    To Learn More About Our <span>Features</span>
                </h3>
                <div className='mt-5'>
                    <h3 className='header2'>
                        All-In-One Program to enhance your experience at <span>Langara College</span>
                    </h3>
                </div>
            </div>


            <div className='frText'>
                <h3 className='header2 ml-2v mt-5v'>
                    Make Sure You <span>Log In!</span><br/>
                    You Will <span>Not</span> Have Access to Our Features!
                </h3>

            </div>
        </div>
                <h3 className='header2 ml-2v centerText mt-5 mb-5'>
                    <span>Langara College</span> Students
                </h3>
    </div>
);

