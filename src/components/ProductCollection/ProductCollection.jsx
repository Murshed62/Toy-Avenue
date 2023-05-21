import React, { useEffect, useState } from "react";
import Products from "../../Shared/Products/Products";

const ProductCollection = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center mt-20 mb-10 text-3xl font-bold text-purple-600">
        Available Products
      </h1>
      <div className="grid lg:grid-cols-3 gap-y-20">
        {products.map((pd) =><Products pd={pd}></Products>)}
      </div>
    </div>
  );
};

export default ProductCollection;
