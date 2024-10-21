import { Search, Menu } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
const Header = () => {
  return (
    <div className="bg-white  p-2 border-b shadow-sm m-1 container sticky top-0 z-10 overflow-y-auto">
      <div className="flex justify-between">
        <div className="flex gap-9 items-center">
          <div className="flex gap-3 items-center">
            <Menu />
            <h2 className="font-bold text-lg text-white px-4 font-serif bg-indigo-600 rounded-md hover:bg-blue-600 cursor-pointer">
              MyTrip
            </h2>
          </div>
          <div className="bg-slate-100 flex gap-1 p-3 rounded-md items-center hover:cursor-pointer ">
            <Search />
            <input className="bg-transparent outline-none w-80 px-1" />
          </div>
        </div>
        <div className='grid px-7'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
