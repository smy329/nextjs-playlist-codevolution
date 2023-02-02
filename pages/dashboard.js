import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState('');

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch('http://localhost:3000/dashboard');
      const data = await response.json();
      console.log(data);
      setDashboardData(data);
      setIsLoading(false);
    }
    fetchDashboardData();
  }, []);

  if (isLoading) {
    <div>
      <h2>Loading...</h2>
    </div>;
  }
  console.log({ dashboardData });

  return (
    <div>
      <h2>Dashboard Data</h2>
      <h2>Posts: {dashboardData.posts}</h2>
      <h2>{dashboardData.likes}</h2>
    </div>
  );
};

export default Dashboard;
