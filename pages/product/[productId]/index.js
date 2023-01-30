import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
  // this hook returns a router object
  const router = useRouter();

  // with this object access the query parameter's object
  //the parameter we want to access is productid. This 'productId' is coming from dynamic router [productId]. If the router is [id], we need to write: router.query.id
  const productId = router.query.productId;
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Details about Product {productId}</h1>;
    </div>
  );
};

export default ProductDetails;
