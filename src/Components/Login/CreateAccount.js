import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const CreateAccount = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostKey = '39899c0cdbfbe66a2dbde3818a91832c';
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  let signInError;
  if (gUser) {
    navigate('/');
  }

  const createDBUser = data => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageData => {
        const image = imageData.data.url;

        const updateData = {
          name: data?.name,
          email: data?.email,
          img: image,
        };
        fetch(`http://localhost:5000/create-user/${data?.email}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({ updateData }),
        })
          .then(res => res.json())
          .then(data => {
            toast.success('Updated profile');
            navigate('/');
          });
      });

    // console.log(data);
  };

  const onSubmit = data => {
    createDBUser(data);
    createUserWithEmailAndPassword(data.email, data.password);
    signInWithGoogle(data.email, data.password);
    signInWithEmailAndPassword(data.email, data.password);
    updateProfile({ displayName: data.name });
  };
  return (
    <div
      style={{
        backgroundImage: `url("https://png.pngtree.com/background/20210714/original/pngtree-abstract-particles-background-with-geometric-connection-concept-vector-illustration-picture-image_1233144.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vp',
      }}
      className="flex justify-center  bg-slate-700"
    >
      <div className="flex justify-center items-center  mt-4 ">
        <div
          style={{
            backgroundImage: `url("https://img.freepik.com/premium-psd/black-white-glow-dust-particle-abstract-background_35672-1431.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100vp',
          }}
          className="card w-96 shadow-2xl bg-violet-200"
        >
          <div className="card-body text-white">
            <h2 className="text-center text-2xl font-bold">SignUp</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  style={{ width: '400px' }}
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered bg-white w-full  text-black "
                  {...register('name', {
                    required: {
                      value: true,
                      message: 'Name is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              {/* email */}
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered bg-white w-full  text-black "
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'Email is Required',
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email',
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === 'pattern' && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Phone */}
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text text-white">Phone</span>
                </label>
                <input
                  type="phone"
                  placeholder="Write Your Phone Number"
                  className="input input-bordered bg-white w-full   text-black"
                  {...register('phone', {
                    required: {
                      value: true,
                      message: 'Phone is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.phone?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
              {/* photo */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text text-white">
                    Input Your Image{' '}
                  </span>
                </label>
                <input
                  type="file"
                  placeholder="Your Image"
                  className="input input-bordered text-black w-96 pt-2 sm:w-full   hover:shadow-xl shadow-inner"
                  {...register('image', {
                    required: {
                      value: true,
                      message: 'Image is Required',
                    },
                  })}
                />
                <label className="label">
                  {errors.image?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors?.image?.message}
                    </span>
                  )}
                </label>
              </div>
              {/* password */}
              <div className="form-control w-full   ">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered text-black font-bold bg-white w-full   "
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is Required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer',
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInError}
              <input
                className="btn w-full text-white"
                type="submit"
                value="Sign Up"
              />
            </form>
            <p>
              <small></small>
            </p>
            <div className="divider">OR</div>
            <p className="ml-2">Already Have An Account</p>

            <Link
              to="/login"
              className="btn btn-outline  bg-lime-500 text-black font-bold"
            >
              Please Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
