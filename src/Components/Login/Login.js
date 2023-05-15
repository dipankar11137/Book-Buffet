import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
// import axios from "axios";
import Loading from "../Share/Loading";
import login from "../../Images/Login/login.jpg";
import { toast } from "react-toastify";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user || gUser) {
    navigate(from, { replace: true });
  }

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  const onSubmit = async (data) => {
    const email = data.email;
    await signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://png.pngtree.com/background/20210714/original/pngtree-abstract-particles-background-with-geometric-connection-concept-vector-illustration-picture-image_1233144.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vp",
      }}
      className="flex justify-center h-screen bg-slate-700"
    >
      <div className="mt-32  ">
        <div
          style={{
            backgroundImage: `url("https://media.istockphoto.com/id/108224668/photo/open-book-by-lamp-light.jpg?b=1&s=170667a&w=0&k=20&c=LswLXyD7KMPwO2gzKnnC2la52R4RIsHOJIJT0lWaP24=")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            boxShadow: "2px ",
          }}
          className="card w-96 shadow-2xl bg-violet-50"
        >
          <div className="card-body text-white">
            <h2 className="text-center text-3xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  style={{ width: "400px" }}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered bg-white  w-96 text-black"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered text-black font-bold bg-white w-full "
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              {signInError}
              <input
                className="btn btn-orange-500 w-full text-white"
                type="submit"
                value="Login"
              />
            </form>
            <p></p>
            <div className="divider">OR</div>

            <Link
              to="/createAccount"
              className="btn btn-outline font-black bg-lime-500 "
            >
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
