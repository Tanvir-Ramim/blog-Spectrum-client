import { Link } from "react-router-dom";


const AuthButton = () => {
    return (
        <div className="px-20 py-5 ml-8 bg-[#11192BA8] text-white text-xl rounded-3xl hover:bg-black ">
             <Link><button className='   '> Create An Account</button></Link>
        </div>
    );
};

export default AuthButton;