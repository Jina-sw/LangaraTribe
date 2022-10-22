import './Nav.css';
import { IoPersonOutline,IoTrailSignOutline } from "react-icons/io5"
const Nav = () => {

    return (
        <div className="navContainer">
            <section className="logoContainer">
                <p>Tribe.</p>
                <p>Langara College.</p>
            </section>
            <section className='signUpReq'>
                <span className='iconBox'>
                    <IoPersonOutline />
                    <p>Log In</p>
                </span>
                <span className='iconBox'>
                    <IoTrailSignOutline />
                    <p>Sign Up</p>
                </span>
            </section>
        </div>
    );
};

export default Nav;