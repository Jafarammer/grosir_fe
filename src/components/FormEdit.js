import React, { useState, useEffect } from "react";
// import axiosInstance from "../helper/axios";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";

export default function FormEdit() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [stock, setStock] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://grosir-production.up.railway.app/find/product/id/${params.id}`
      )
      .then((res) => setData(res.data[0]));
  });

  const updateProduct = async () => {
    const formData = new FormData();
    formData.append("product_name", name);
    formData.append("product_purchase_price", purchasePrice);
    formData.append("product_selling_price", sellingPrice);
    formData.append("product_stock", stock);
    formData.append("product_img", file);

    await axios
      .patch(
        `https://grosir-production.up.railway.app/product/edit/${params.id}`,
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
            navigate("/product");
          }, 2000);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          text: `${error?.response?.data.messageFile}`,
        });
      });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="my-5 mx-4">
        <label for="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control py-3"
          id="exampleFormControlInput1"
          placeholder={data?.product_name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="row">
        <div className="col">
          <div className="mb-5 mx-4">
            <label for="exampleFormControlInput2" className="form-label">
              Purchase price
            </label>
            <input
              type="number"
              className="form-control py-3"
              id="exampleFormControlInput2"
              placeholder={data?.product_purchase_price}
              onChange={(e) => setPurchasePrice(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-5 mx-4">
            <label for="exampleFormControlInput3" className="form-label">
              Selling price
            </label>
            <input
              type="number"
              className="form-control py-3"
              id="exampleFormControlInput3"
              placeholder={data?.product_selling_price}
              onChange={(e) => setSellingPrice(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="mb-5 mx-4">
            <label for="exampleFormControlInput4" className="form-label">
              Stock
            </label>
            <input
              type="number"
              className="form-control py-3"
              id="exampleFormControlInput4"
              placeholder={data?.product_stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-5 mx-4">
            <label for="exampleFormControlInput5" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control py-3"
              id="exampleFormControlInput5"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary py-3 px-5 mx-4 fw-bold"
        onClick={updateProduct}
      >
        Save change
      </button>
    </form>
  );
}
