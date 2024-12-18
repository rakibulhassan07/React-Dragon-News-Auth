import React, { useContext } from "react";
import Navbar from "../Home/Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
   
    const {singIn} = useContext(AuthContext);
     const location =useLocation()
     const navigate=useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email=form.get('email')
    const password=form.get('password')
    console.log(email,password)

    singIn(email,password)
    .then(result=>{
        console.log(result.user)
        //navigate after login 
        navigate(location?.state?location.state :'/')

    })
    .catch(error=>{
        console.log(error)
    })
    
    
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-3xl my-10 text-center">Login your account</h2>
        <form
          onSubmit={handleLogin}
          className="card-body md:w-3/4 lg:w-1/2 mx-auto"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        <p className="text-center">
          Don't have an account{" "}
          <Link className="text-blue-800 font-bold" to="/register">
            Please Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
