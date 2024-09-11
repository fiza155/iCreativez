import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../assets/icreative.png";

// Validation
const schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(register(data));
    navigate("/login");
  };

  return (
    <section
      className="text-center text-lg-start"
      style={{ backgroundColor: "#a22b2c" }}
    >
      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              className="card cascading-right bg-body-tertiary"
              style={{
                backgroundColor: "#e9ecef",
                backdropFilterer: "blur(30px)",
                marginRight: "-20px",
              }}
            >
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign-up now</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline ">
                        <input
                          type="text"
                          id="firstName"
                          className="form-control "
                          {...formRegister("firstName")}
                        />
                        <label className="form-label" htmlFor="firstName">
                          First name
                        </label>
                        <p className="text-danger small text-start">
                          {errors.firstName?.message}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="lastName"
                          className="form-control"
                          {...formRegister("lastName")}
                        />
                        <label className="form-label" htmlFor="lastName">
                          Last name
                        </label>
                        <p className="text-danger small text-start">
                          {errors.lastName?.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      autoComplete="username"
                      {...formRegister("email")}
                    />
                    <label className="form-label" htmlFor="email">
                      Email address
                    </label>
                    <p className="text-danger small text-start">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      autoComplete="new-password"
                      {...formRegister("password")}
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <p className="text-danger small text-start">
                      {errors.password?.message}
                    </p>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="confirmPassword"
                      className="form-control"
                      autoComplete="new-password"
                      {...formRegister("confirmPassword")}
                    />
                    <label className="form-label">Confirm Password</label>
                    <p className="text-danger small text-start">
                      {errors.confirmPassword?.message}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4 px-2"
                    style={{ backgroundColor: "#a22b2c" }}
                  >
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src={logo}
              className="w-100 rounded-4 shadow-4"
              alt="Sign Up"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
