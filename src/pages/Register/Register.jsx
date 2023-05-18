import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Shared/Provider/AuthProvider";

const Register = () => {
  const { createUser, userImageDetails } = useContext(AuthContext);

  const registerHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, email, password, photo);

    createUser(email, password, name, photo)
      .then((result) => {
        const createdUser = result.user;
        userImageDetails(name, photo);
        navigate("/");
        setSucess(toast("signup Successfully"));
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
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
              <div className="form-control mt-6">
                <button className="btn bg-purple-500 hover:bg-purple-600 font-bold text-2xl">
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
