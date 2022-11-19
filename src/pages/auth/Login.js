import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axiosInstance from "../../helper/axios";
import axios from "axios";
import Swal from "sweetalert2";
// css
import styles from "../../css/Auth.module.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post(`http://localhost:8000/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        localStorage.setItem("message", res?.data?.message);
        Swal.fire({
          icon: "success",
          text: localStorage.getItem("message"),
        });
        setTimeout(() => {
          navigate("/");
          // window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: `${error?.response?.data.error}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={`container ${styles.d_auth}`}>
      <div className="mt-5">
        <Link to="/" className="fw-bold fs-5 text-primary">
          Back
        </Link>
      </div>
      <div
        className={`d-flex justify-content-center align-items-center ${styles.d_card_auth}`}
      >
        <div className={`card p-3 shadow ${styles.card_auth}`}>
          <h2 className="text-center text-muted fw-bold">Login Form</h2>
          <hr />
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="my-3 mx-4">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control py-3"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5 mx-4">
              <label for="exampleFormControlInput2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control py-3"
                id="exampleFormControlInput2"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary py-3 mx-4 mt-5"
                type="submit"
                disabled={isLoading}
                onClick={handleLogin}
              >
                {isLoading && (
                  <span className="spinner-border spinner-border-sm me-2" />
                )}
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>

          <p className="text-center mt-5">
            Don't have an account ?{" "}
            <Link to="/auth/register" className="text-decoration-none">
              <small className="text-primary fw-bold ms-2 fs-6">Sign Up</small>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
