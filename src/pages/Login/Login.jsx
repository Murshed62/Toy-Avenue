import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Shared/Provider/AuthProvider";
import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle('login');
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const loginHandling = (event) => {
    event.preventDefault();
    setError("");
    setSuccess("")
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const createdUser = result.user;
        // const loggedUser = {
        //   email:user.email
        // }
        // console.log(loggedUser);
        navigate(from, { replace: true });
        // fetch('http://localhost:5000/jwt',{
        //   method:'POST',
        //   headers:{
        //     'content-type': 'application/json'
        //   },
        //   body: JSON.stringify(loggedUser)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //   console.log('jwt response',data);
        // })

        
        setSuccess(toast("signIn Successfully"));

      })
      .catch((error) => {
        setError(toast("wrong-password"));
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, {replace: true})
        setSuccess(toast('GoogleSignIn Successfully'))
      })
      .catch((error) => setError(toast(`${error}`)));
      form.reset();
  };

  return (
    <div className="hero min-h-screen bg-base-200 form-bg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-purple-600">Login now!</h1>
          <p className="py-6 text-2xl font-bold text-purple-600">
            Action figure toys
          </p>
        </div>
        <form onSubmit={loginHandling}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p>
                    Does not have an account?{" "}
                    <Link to="/register" className="text-purple-600">
                      Please Register !
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-500 hover:bg-purple-600 font-bold text-2xl">
                  Login
                </button>
                <button
                  className="border primary-color p-2 flex items-center mx-auto mt-5 hover:bg-purple-600 hover:text-white transition rounded-2xl"
                  onClick={handleGoogleSignIn}
                >
                  <FaGoogle className="text-3xl" />
                  <span className="ms-2 text-2xl font-bold">
                    Login with Google
                  </span>
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

export default Login;

