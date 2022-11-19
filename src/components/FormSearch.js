import React from "react";
// css
import styles from "../css/Nav.module.css";

function FormSearch() {
  return (
    <form className={`d-flex mx-5 ${styles.d_form}`}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search product in here"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default FormSearch;
