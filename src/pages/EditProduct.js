import React from "react";
import { Form, useParams } from "react-router-dom";
import FormEdit from "../components/FormEdit";

function EditProduct() {
  const params = useParams();
  return (
    <div className="container">
      <h1 className="text-muted mt-5">Form Edit Product</h1>
      <hr className="mb-5" />
      <FormEdit />
    </div>
  );
}

export default EditProduct;
