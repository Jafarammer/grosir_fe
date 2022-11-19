import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../helper/axios";
import axios from "axios";
import Swal from "sweetalert2";
// css
import styles from "../../css/Auth.module.css";

function Register() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    setIsLoading(true);
    axiosInstance
      .post(`https://grosir-production.up.railway.app/auth/register`, {
        first_name,
        last_name,
        email,
        password,
      })
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: res?.data.message,
        });
        setTimeout(() => {
          navigate("/auth/login");
        }, 1200);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: `${error?.response?.data.message}`,
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
          <h2 className="text-center text-muted fw-bold">Register Form</h2>
          <hr />
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="my-3 mx-4">
              <label for="exampleFormControlInput1" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control py-3"
                id="exampleFormControlInput1"
                placeholder="First Name"
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </div>
            <div className="mb-3 mx-4">
              <label for="exampleFormControlInput2" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control py-3"
                id="exampleFormControlInput2"
                placeholder="Last Name"
                onChange={(e) => setLast_name(e.target.value)}
              />
            </div>
            <div className="mb-3 mx-4">
              <label for="exampleFormControlInput3" className="form-label">
                Email Addres
              </label>
              <input
                type="email"
                className="form-control py-3"
                id="exampleFormControlInput3"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5 mx-4">
              <label for="exampleFormControlInput4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control py-3"
                id="exampleFormControlInput4"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2">
              <button
                className="btn btn-primary py-3 mx-4 mt-5"
                type="submit"
                disabled={isLoading}
                onClick={handleRegister}
              >
                {isLoading && (
                  <span className="spinner-border spinner-border-sm me-2" />
                )}
                {isLoading?.loading ? "Loading..." : "Register Account"}
              </button>
            </div>
          </form>

          <p className="text-center mt-5">
            Already have account ?{" "}
            <Link to="/auth/login" className="text-decoration-none">
              <small className="text-primary fw-bold ms-2 fs-6">
                Login in here
              </small>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
