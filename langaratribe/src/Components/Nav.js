import './Nav.css';
const Nav = () => {

    return (
        <div className="navContainer">
            <section className="logoContainer">
                <p>Tribe.</p>
                <p>Langara College.</p>
            </section>
            <section className='grid signUpReq'>
                <p>Log In</p>
                <p>|</p>
                <p>Sign Up</p>
            </section>
        </div>
    );
};

export default Nav;