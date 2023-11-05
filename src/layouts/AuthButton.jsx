import { Link } from "react-router-dom";


const AuthButton = () => {
    return (
        <div className="md:px-20 px-16  md:py-5 py-3 md:ml-8 md:mt-0 mt-4 bg-[#11192BA8] text-white text-xl rounded-3xl hover:bg-black ">
             <Link to='/logIn'><button className='   '> Create An Account</button></Link>
        </div>
    );
};

export default AuthButton;