import React from "react";
import { Form, Button } from "react-bootstrap";
import { getprice, getdesc, getimage, getPname, getcat, submitProduct } from "../components/utilities/one";

const AddProduct = () => {
  return (
    <div className="w-100 justify-center px-3 d-flex items-center flex-col">
      <h3>Add products In the database</h3>
      <Form className="w-1/2">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control onInput={getPname} type="text" placeholder="Enter product Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control onInput={getprice} type="text" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Category</Form.Label>
          <Form.Control onInput={getcat} type="text" placeholder="Category" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image Url</Form.Label>
          <Form.Control onInput={getimage} type="text" placeholder="image url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>description</Form.Label>
           <textarea  onInput={getdesc} className="form-control" id="exampleFormControlTextarea3" rows="7"></textarea>
        </Form.Group>
        <Button onClick={submitProduct} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddProduct;
