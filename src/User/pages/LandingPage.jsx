import Footer from '../Footer';
import Headband from '../Headband';
import { Outlet } from 'react-router-dom';
const LandingPage = () => {
  return (
    <>
      <div>
        <Headband />
         <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
