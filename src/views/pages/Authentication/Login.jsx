/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Applogo } from "../../../Routes/ImagePath";
import { Controller, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup.js";
import { useDispatch } from "react-redux";
import { resetFunctionwithlogin } from "../../../components/ResetFunction";
import { useLoginMutation } from "./authApi";
import { setCredentials } from "./store/authSlice";
import { Button, Toast, ToastContainer } from "react-bootstrap";


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),
});

const Login = () => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState(false);
  const [loginMutation, { isLoading }] = useLoginMutation();

  // Toast states
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const userData = await loginMutation(data).unwrap();
      console.log(userData); // Check the full response
  
      const { token, id, firstName, lastName, email, role } = userData?.data || {};
      const user = {
        id,
        firstName,
        lastName,
        name: `${firstName} ${lastName}`,
        email,
        role,
      };
  
      if (token && user) {
        // ✅ Only dispatch the final action, not the mutation
        dispatch(setCredentials({ user, token }));
  
        // Store in localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
  
        // Save UI settings
        localStorage.setItem("colorschema", "orange");
        localStorage.setItem("layout", "vertical");
        localStorage.setItem("layoutwidth", "fixed");
        localStorage.setItem("layoutpos", "fluid");
        localStorage.setItem("topbartheme", "light");
        localStorage.setItem("layoutSized", "lg");
        localStorage.setItem("layoutStyling", "default");
        localStorage.setItem("layoutSidebarStyle", "dark");
  
        setToastMessage("Login successful! Redirecting...");
        setShowSuccessToast(true);
        setShowErrorToast(false);
        setEmailError(false);
  
        setTimeout(() => {
          navigate("/profile");
          resetFunctionwithlogin();
        }, 1500);
      } else {
        throw new Error("Invalid response from server.");
      }
    } catch (err) {
      setEmailError(true);
      console.error("Login failed:", err);
      setToastMessage(`Login failed: ${err.message || 'Please check your credentials.'}`);
      setShowErrorToast(true);
      setShowSuccessToast(false);
    }
  };
  


  useEffect(() => {
    // Pre-fill the form if credentials exist
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail) setValue("email", savedEmail);
    if (savedPassword) setValue("password", savedPassword);
  }, [setValue]);

  const [eye, seteye] = useState(true);
  const onEyeClick = () => seteye(!eye);

  return (
    <div>
      <div className="account-page">
        <div className="main-wrapper">
          <div className="account-content">
            <div className="container">
              <div className="account-logo">
                <Link to="/instructor-dashboard">
                  <img src={Applogo} alt="Dreamguy's Technologies" />
                </Link>
              </div>

              {/* Toast Container */}
              <ToastContainer
                position="top-end"
                className="p-3"
                style={{ zIndex: 11 }}
              >
                <Toast
                  show={showSuccessToast}
                  onClose={() => setShowSuccessToast(false)}
                  delay={3000}
                  autohide
                  bg="success"
                >
                  <Toast.Header>
                    <strong className="me-auto">Success</strong>
                  </Toast.Header>
                  <Toast.Body className="text-white">{toastMessage}</Toast.Body>
                </Toast>

                <Toast
                  show={showErrorToast}
                  onClose={() => setShowErrorToast(false)}
                  delay={3000}
                  autohide
                  bg="danger"
                >
                  <Toast.Header>
                    <strong className="me-auto">Error</strong>
                  </Toast.Header>
                  <Toast.Body className="text-white">{toastMessage}</Toast.Body>
                </Toast>
              </ToastContainer>

              <div className="account-box">
                <div className="account-wrapper">
                  <h3 className="account-title">Login</h3>
                  <p className="account-subtitle">Access to our dashboard</p>

                  {emailError && (
                    <div className="alert alert-danger">
                      Invalid email or password
                    </div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-block mb-4">
                      <label className="col-form-label">Email Address</label>
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <input
                            className={`form-control ${
                              errors?.email ? "error-input" : ""
                            }`}
                            type="text"
                            defaultValue={localStorage.getItem("email")}
                            {...field}
                            autoComplete="email"
                          />
                        )}
                      />
                      <span className="text-danger">
                        {errors.email?.message}
                      </span>
                    </div>

                    <div className="input-block mb-4">
                      <div className="row">
                        <div className="col">
                          <label className="col-form-label">Password</label>
                        </div>
                        <div className="col-auto">
                          <Link className="text-muted" to="/forgot-password">
                            Forgot password?
                          </Link>
                        </div>
                      </div>
                      <div style={{ position: "relative" }}>
                        <Controller
                          name="password"
                          control={control}
                          render={({ field }) => (
                            <input
                              className={`form-control ${
                                errors?.password ? "error-input" : ""
                              }`}
                              type={eye ? "password" : "text"}
                              defaultValue={localStorage.getItem("password")}
                              {...field}
                              autoComplete="current-password"
                            />
                          )}
                        />
                        <span
                          style={{
                            position: "absolute",
                            right: "5%",
                            top: "30%",
                            cursor: "pointer",
                          }}
                          onClick={onEyeClick}
                          className={`fa-solid ${
                            eye ? "fa-eye-slash" : "fa-eye"
                          }`}
                        />
                      </div>
                      <span className="text-danger">
                        {errors.password?.message}
                      </span>
                    </div>

                    <div className="input-block text-center">
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={isLoading}
                        className="account-btn"
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Logging in...
                          </>
                        ) : (
                          "Login"
                        )}
                      </Button>
                    </div>
                  </form>

                  <div className="account-footer">
                    <p>
                      Don't have an account yet?{" "}
                      <Link to="/register">Register</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
