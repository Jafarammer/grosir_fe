import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// css
import styles from "../css/Nav.module.css";

function FormSearch() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [key, setKey] = useState("");

  const handleSearch = (e) => {
    setIsLoading(true);
    e.preventDefault();
    setTimeout(() => {
      navigate(`/searchPage/${key}`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <form className={`d-flex mx-5 ${styles.d_form}`} onSubmit={handleSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search product in here"
        aria-label="Search"
        onChange={(e) => setKey(e.target.value)}
      />
      <button
        className="btn btn-primary px-5 fw-bold"
        type="submit"
        disabled={isLoading}
      >
        {isLoading && (
          <span className="spinner-border spinner-border-sm me-2" />
        )}
        {isLoading ? "" : "Search"}
      </button>
    </form>
  );
}

export default FormSearch;
