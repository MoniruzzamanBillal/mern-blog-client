import React from "react";
import { useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <div className=" bg-red-600 ">
      <h1>EditBlog</h1>
      <h1>EditBlog</h1>
      <h1>EditBlog</h1>
      <h1>EditBlog</h1>
      <h1>EditBlog</h1>
      <h1>EditBlog</h1>
      <h1>EditBlog</h1>
    </div>
  );
};

export default EditBlog;
