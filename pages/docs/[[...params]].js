import { useRouter } from 'next/router';
import React from 'react';

const Doc = () => {
  const router = useRouter();
  // needs to be same as filename, otherwise undefined
  //set the initial value to the params array to make sure your code doesn't throw a runtime error
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>Viewing docs for feature {params[0]}</h1>;
  }
  return <h1>Docs Home Page</h1>;
};

export default Doc;
