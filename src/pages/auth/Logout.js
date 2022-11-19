import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// css
import styles from "../../css/Auth.module.css";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
      navigate("/auth/login");
    }, 2000);
  });

  return (
    <div
      className={`d-flex align-items-center justify-content-center ${styles.d_loading}`}
    >
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Logout;
