import React from "react";
// css
import styles from "../css/Home.module.css";

function Home() {
  return (
    <div className="container-fluid">
      <div className="px-5 mx-5 mt-5">
        <div
          className={`card mx-3 mb-3 bg-dark border-0 px-1 pb-1 ${styles.card_home}`}
        >
          <img src="/images/default.png" className="card-img-top" />
          <p className="position-absolute fixed-bottom ms-4 text-light">
            Data Static
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
