import React, { useEffect, useState } from "react";
import axiosInstance from "../helper/axios";
// css
import styles from "../css/Home.module.css";

function Home() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axiosInstance.get("/product").then((res) => {
      setProduct(res.data);
    });
  });

  const addDefaultSrc = (e) => {
    e.target.src = "/images/default.png";
  };

  return (
    <div className="container-fluid px-5">
      <div className="px-5 mx-5 mt-5 row">
        {product.map((item) => (
          <div
            className={`card mx-3 mb-3 border-1 px-1 pb-1 shadow ${styles.card_home}`}
          >
            <img
              onError={addDefaultSrc}
              src={item?.product_img || "/images/default.png"}
              className="card-img-top"
              alt="images"
            />
            <span className="text-primary fw-bold ms-3 mt-2">
              {item?.product_name}
            </span>
            <p className="text-center text-muted mt-2">
              <b>Rp. </b>
              {item?.product_purchase_price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
