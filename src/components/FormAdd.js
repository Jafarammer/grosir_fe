import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../helper/axios";
import Swal from "sweetalert2";

function FormAdd() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [stock, setStock] = useState("");
  const [file, setFile] = useState("");

  const saveProduct = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("product_name", name);
    formData.append("product_purchase_price", purchasePrice);
    formData.append("product_selling_price", sellingPrice);
    formData.append("product_stock", stock);
    formData.append("product_img", file);

    await axios
      .post(
        `https://grosir-production.up.railway.app/product/add`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        },
        []
      )
      .then((res) => {
        if (res?.data.messageType) {
          Swal.fire({
            icon: "error",
            text: res?.data.messageType,
          });
        } else {
          Swal.fire({
            icon: "success",
            text: res?.data.message,
          });
          setTimeout(() => {
            navigate(0);
          }, 2000);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: `${error?.response?.data.messageFile}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="form-control py-3 mb-4"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <div className="row mb-4">
        <div className="col">
          <input
            type="number"
            className="form-control py-3"
            placeholder="Purchase price"
            onChange={(e) => setPurchasePrice(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control py-3"
            placeholder="Selling price"
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="number"
            className="form-control py-3"
            placeholder="Stock"
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            type="file"
            className="form-control py-3"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </div>
      <button
        className="btn btn-primary mt-5 px-5 fw-bold"
        type="submit"
        onClick={saveProduct}
        disabled={isLoading}
      >
        {isLoading && (
          <span className="spinner-border spinner-border-sm me-2" />
        )}
        {isLoading ? "Loading..." : "Save"}
      </button>
    </form>
  );
}

export default FormAdd;
