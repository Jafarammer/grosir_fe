import React, { useState, useEffect } from "react";
import axiosInstance from "../helper/axios";
import { useNavigate, Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

function TableProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProduct = async () => {
    const res = await axiosInstance.get(
      `${process.env.REACT_APP_API_URL}/product`
    );
    setProduct(res.data);
    setFilterProduct(res.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    const result = product.filter((item) => {
      return item.product_name.toLowerCase().match(search.toLowerCase());
    });
    setFilterProduct(result);
  }, [search]);

  const column = [
    {
      name: <p className="fw-bold fs-5">Name</p>,
      selector: (row) => row.product_name,
      sortable: true,
    },
    {
      name: <p className="fw-bold fs-5">Purchase Price</p>,
      selector: (row) => row.product_purchase_price,
    },
    {
      name: <p className="fw-bold fs-5">Selling Price</p>,
      selector: (row) => row.product_selling_price,
    },
    {
      name: <p className="fw-bold fs-5">Stock</p>,
      selector: (row) => row.product_stock,
    },
    {
      name: <p className="fw-bold fs-5">Image</p>,
      selector: (row) => (
        <img className="my-3" width={100} height={100} src={row.product_img} />
      ),
    },
    {
      name: <p className="fw-bold fs-5">Action</p>,
      selector: (row) => (
        <div>
          <Link
            to={`/editProduct/${row.product_id}`}
            className="btn btn-primary my-3 mx-2"
          >
            Edit
          </Link>
          <button
            className="btn btn-danger my-3 mx-2"
            onClick={() =>
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  axiosInstance
                    .delete(
                      `${process.env.REACT_APP_API_URL}/product/delete/${row.product_id}`
                    )
                    .then(() => {
                      setTimeout(() => {
                        Swal.fire(
                          "Deleted!",
                          "Your file has been deleted.",
                          "success"
                        );
                        navigate(0);
                      }, 1000);
                    });
                }
              })
            }
          >
            Delete
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <DataTable
        columns={column}
        data={filterProduct}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search data in here"
            className="w-25 form-control py-3 my-5"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
      />
    </div>
  );
}

export default TableProduct;
