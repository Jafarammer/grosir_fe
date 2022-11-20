import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../helper/axios";
// css
import styles from "../css/Home.module.css";

function Search() {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/find/product/name?product_name=${params.keyword}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((error) => {
        setIsError(true);
        setMsg(error.response.data);
      });
  }, []);

  const addDefaultSrc = (e) => {
    e.target.src = "/images/default.png";
  };

  return (
    <div className="container">
      <div className="row mt-5">
        {isError ? (
          <div className="text-center">
            <h1 className="text-center text-muted mb-5">{msg}</h1>
            <img src="/images/notFound2.svg" alt="images" />
          </div>
        ) : (
          <div>
            {product.map((item) => (
              <div
                key={item?.product_id}
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
        )}
      </div>
    </div>
  );
}

export default Search;
