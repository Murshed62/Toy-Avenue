import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Shared/Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import useTitle from "../../hooks/useTitle";


const Register = () => {
  useTitle('register');
  const { createUser, userImageDetails } = useContext(AuthContext);
  const formRef = useRef(null);
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState(""); 

  const handleReset =() =>{
    if(formRef.current){
      formRef.current.reset();
    }
  }

  const registerHandler = (event) => {
    event.preventDefault();
    setErrors("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if(password.length < 6){
      setErrors(toast("The password is less than 6 characters"))
    }

    createUser(email, password, name, photo)
      .then((result) => {
        const createdUser = result.user;
        userImageDetails(name, photo);
        navigate("/");
        setSuccess(toast("signup Successfully"));
        
      })
      .catch((error) => {
        console.log(error);
      });
      form.reset();
  };

  return (
    <div className="hero min-h-screen bg-base-200 form-bg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-purple-600">Register now!</h1>
          <p className="py-6 text-2xl font-bold text-purple-600">
            Action figure toys
          </p>
        </div>
        <form onSubmit={registerHandler}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name..."
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email..."
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="URL..."
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className="text-purple-600">
                      Please Login !
                    </Link>
                  </p>
                </label>
              </div>
              <div>
                <button onClick={handleReset} className="bg-purple-300 p-1 text-white font-bold rounded hover:bg-purple-400">Reset</button>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-500 hover:bg-purple-600 font-bold text-2xl">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
