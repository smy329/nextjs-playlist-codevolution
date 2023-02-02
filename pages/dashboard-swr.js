import React from 'react';
import useSWR from 'swr';

const DashboardSWR = () => {
  const fetcher = async () => {
    const response = await fetch('http://localhost:3000/dashboard');
    const data = await response.json();
    return data;
  };
  const { data, error } = useSWR('dashboard', fetcher);

  if (error) return 'No data found';
  if (!data) return 'loading...';

  return (
    <div>
      <h2>Dashboard Data</h2>
      <h2>Posts: {data.posts}</h2>
      <h2>Likes: {data.likes}</h2>
    </div>
  );
};

export default DashboardSWR;
