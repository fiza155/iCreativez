import React from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../assets/icreative.png";

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

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
                backdropFilter: "blur(30px)",
                backgroundColor: "#e9ecef",
                marginRight: "-20px",
              }}
            >
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      autoComplete="username"
                      {...formRegister("email")}
                    />
                    <label className="form-label">Email address</label>
                    <p className="text-danger small text-start">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      autoComplete="current-password"
                      {...formRegister("password")}
                    />
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <p className="text-danger small text-start">
                      {errors.password?.message}
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4 "
                    style={{ backgroundColor: "#a22b2c" }}
                  >
                    Login
                  </button>
                  <p className="mt-4">or</p>
                  <p>
                    <a href="/register" className="btn btn-link">
                      Create new Account
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <img src={logo} className="w-100 rounded-4 shadow-4" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
