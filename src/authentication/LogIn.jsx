import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";


const LogIn = () => {
  const{userLogIn,googleLogIn}=useContext(AuthContext)
  const [error, setError] = useState(null)
  const navigate=useNavigate()
  const location=useLocation()
  const handleLogIn=(e)=>{
       e.preventDefault()
       const form=e.target 
       const email=form.email.value 
       const password=form.password.value 
  
       setError('')
       userLogIn(email,password)
       .then(()=>{
          toast.success('Successfully Login')
            navigate(location?.state? location.state:'/')
       })
       .catch(error=>{
           setError(error.message)
       })
  }
    const handleGoogleLogIn=()=>{
        googleLogIn()
        .then(()=>{
          toast.success('Successfully Login')
          navigate(location?.state? location.state:'/')
        })
    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200 mb-6">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-[#11192BA8]">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full md:min-w-[440px] max-w-md shadow-2xl bg-base-100">
              <form onSubmit={handleLogIn} className="card-body bg-[#11192BA8]">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-lg">Email</span>
                  </label>
                  <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white text-lg">Password</span>
                  </label>
                  <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-neutral">Login</button>
                </div>
                <div className="text-white text-lg"><h1>Do not have an account  <Link to='/register' className="text-red-500 underline font-bold">Sign Up</Link></h1></div>
                <div>
                  {error && <p className="text-red-500">{error}</p>}
                </div>
                <h1 className="text-center text-xl text-white font-bold">Or</h1>
              </form>
              <div className="flex  justify-center mb-4">
                <button onClick={handleGoogleLogIn} className="border border-[#11192BA8] font-semibold shadow shadow-[#11192BA8] p-2">Google SignIn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;