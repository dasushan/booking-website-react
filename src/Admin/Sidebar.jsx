import { ClipboardList, Menu, UsersRound, House, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`h-screen flex flex-col  bg-gray-900 text-slate-100  ${
        isCollapsed ? 'w-[5%]' : 'w-[15%]'
      } rounded-lg overflow-y-auto`}
    >
      <div className="flex h-16 items-center justify-between px-4">
        {!isCollapsed && (
          <span className="text-base font-bold text-white  ">Admin Panel</span>
        )}
        <button
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
          className=" p-1.5 text-gray-400 hover:bg-800"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <div className={`p-2`}>
        <div className="flex items-center gap-3 py-1  my-2 mx-4 hover:bg-gray-800 rounded-r-full">
          <House className="h-5 w-5 text-amber-500" />
          {!isCollapsed && <span>Home</span>}
        </div>
      </div>
      <div className={`p-2`}>
        <div className="flex items-center gap-3 py-1  my-2 mx-4 hover:bg-gray-800 rounded-r-full">
          <UsersRound className="h-5 w-5 text-amber-500" />
          {!isCollapsed && <span>Users</span>}
        </div>
      </div>
      <div className={`p-2`}>
        <div className="flex items-center gap-3 py-1  my-2 mx-4 hover:bg-gray-800 rounded-r-full">
          <ClipboardList className="h-5 w-5 text-amber-500" />
          {!isCollapsed && <span>Bookings</span>}
        </div>
      </div>
      <div
        className={`p-2`}
        onClick={() => {
          navigate('/admin/newlisting');
        }}
      >
        <div className="flex items-center gap-3 py-1  my-2 mx-4 hover:bg-gray-800 rounded-r-full">
          <Plus className="h-5 w-5 text-amber-500" />
          {!isCollapsed && <span>Add Location</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
