import {
  Navigation,
  ChevronDown,
  Search,
  BackpackIcon,
  BaggageClaim,
  CircleUser,
} from 'lucide-react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
const Headband = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  function clickHandler(){
    if(isLoggedIn){
      dispatch(logout())
      navigate('/login', {replace: true})
    }
    if(!isLoggedIn){
      navigate('/login', {replace: true})
    }
  }
  return (
    <div className="bg-white shadow-md mb-2">
      <div className="flex justify-between items-center h-[4rem] w-[90%] bg-red-300 mx-auto">
        <div className="flex items-center justify-center gap-1">
          <div className="p-2 bg-yellow-300 rounded-sm">
            <Navigation className="w-4 h-4" />
          </div>
          <div className="text-[1.2rem]">Expedia</div>
          <div className="ml-[2rem] text-[0.75rem] flex justify-center items-center">
            Shop Travel
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mx-3">
          <div className="flex items-center justify-center bg-slate-50 rounded-md hover:cursor-pointer p-2 mr-2">
            <Search />
            <input className="bg-transparent outline-none w-96 px-1" />
          </div>
          <div className="hover:cursor-pointer p-2 mr-2 hover:text-white">
            <BaggageClaim />
          </div>
          <div className="flex hover:cursor-pointer hover:text-white gap-1 justify-center items-center p-2 mr-2" onClick={clickHandler}>
            <CircleUser />
            {isLoggedIn? 'Log out': 'Sign in'}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headband;
