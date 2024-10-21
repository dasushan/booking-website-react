import Sidebar from './Sidebar';
import Header from './HeroSection';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="h-screen w-screen overflow-y-auto">
      <Header />
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
