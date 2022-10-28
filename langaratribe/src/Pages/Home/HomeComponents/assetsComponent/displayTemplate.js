import course1 from '../../../../Img/course1.png';

export const course = (
    <div className='course'>
        <h2 className='header1'>
            Course Feature
        </h2>
        <div className='grid grid_col_2 gap_5'>
            <img className="frImg courseImg" src={course1} alt="Student animation img for courses"/>
            <div className='frText'>
                <h3 className='header2 centerText mt-5'>
                    Get the Latest <span>course</span> information <span>here</span>!
                </h3>
                <ul className='courseList'>
                    <li>List of <span>Courses</span></li>
                    <li><span>Course</span> Information</li>
                    <li>Anonymous <span>Open Chatting</span></li>
                </ul>
                <h3 className='header2 ml-2v mt-5v'>
                    Program Designed Just For <br/>
                </h3>
                <h3 className='header2 ml-2v'>
                     <span>Langara College</span> Students
                </h3>
            </div>
        </div>
    </div>
);

// export * as displayTemplate from "./displayTemplate";
