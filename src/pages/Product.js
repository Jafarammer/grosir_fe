import React from "react";
// component
import TableProduct from "../components/TableProduct";
import FormAdd from "../components/FormAdd";
// css
import styles from "../css/Product.module.css";

function Product() {
  return (
    <div className={`container-fluid ${styles.d_product}`}>
      <div className="mx-5 px-5 py-3 mt-5">
        <h1 className="text-muted ms-5">Data Product</h1>
        <hr />
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-primary mt-3 p-3 fw-bold"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Product
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Form Add Product
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <FormAdd />
              </div>
            </div>
          </div>
        </div>
        <TableProduct />
      </div>
    </div>
  );
}

export default Product;
