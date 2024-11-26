import { useSelector, useDispatch } from 'react-redux';
import {
  setProperty,
  setShowBookingModal,
  setBookedProperty,
} from '../store/userSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SimpleSlider from '../Admin/Carousel';
import BookingModal from './BookingModal';

const Details = () => {
  const navigate = useNavigate();

  const category = useSelector((state) => state.user.selectedCategory);

  const property = useSelector((state) => state.user.property);
  const showBookingModal = useSelector((state) => state.user.showBookingModal);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  console.log(category);
  const [minPrice, setMinPrice] = useState(300);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [filteredProperty, setFilteredProperty] = useState([]);

  useEffect(() => {
    fetch(
      `https://travel-website-bc25b-default-rtdb.asia-southeast1.firebasedatabase.app/listings.json`,
      {
        method: 'GET',
      }
    ).then(async (response) => {
      const result = await response.json();
      const data = [];
      for (const value of Object.values(result)) {
        if (value.document.type === category) {
          data.push(value);
        }
      }
      dispatch(setProperty(data));
    });
  }, []);

  useEffect(() => {
    const filter = property.filter((item) => {
      const price = Number(item.document.price);

      return price >= minPrice && price <= maxPrice;
    });
    setFilteredProperty(filter);
    console.log(filter);
    console.log('ran');
  }, [minPrice, maxPrice, property]);

  const clickHandler = (item) => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    } else {
      dispatch(setShowBookingModal(true));
      dispatch(setBookedProperty(item));
    }
  };

  return (
    <>
      {showBookingModal && <BookingModal />}
      <div className="bg-white">
        <div className="w-[90%] mx-auto">
          <div className="flex ">
            <div className="w-[20%] flex flex-col bg-slate-300 h-screen mr-2 rounded-md overflow-hidden">
              <div className="p-3 mt-3">
                <div className="font-semibold text-lg mb-5">Filter By</div>
                <div className="text-sm">
                  <div>Price per night</div>
                  <div className="flex w-[70%] items-center justify-center gap-2 mt-3">
                    <label htmlFor="min">Min Price:</label>
                    <input
                      type="number"
                      id="min"
                      className=" border-2 bg-transparent outline-none w-[5rem]"
                      value={minPrice}
                      min={300}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                    />
                  </div>
                  <div className="flex w-[70%] items-center justify-center gap-2 mt-3">
                    <label htmlFor="max">Max Price:</label>
                    <input
                      type="number"
                      id="max"
                      className=" border-2 bg-transparent outline-none w-[5rem]"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      max={10000}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-screen overflow-y-scroll flex-grow no-scrollbar">
              {filteredProperty.map((item) => {
                return (
                  <div
                    className="flex mb-3 gap-3 p-1 bg-slate-100 rounded-md"
                    key={item.id}
                  >
                    <div className="max-w-[15rem] h-[15rem]">
                      <SimpleSlider images={item.document.images} />
                    </div>
                    <div className="flex w-[100%] justify-between">
                      <div className="flex flex-col p-2">
                        <div className="font-semibold text-lg mb-3">
                          {item.document.name}
                        </div>
                        <div>{item.document.address}</div>
                        <div className="font-thin">{item.document.type}</div>
                      </div>
                      <div className="flex flex-col p-2 mr-3 items-center">
                        <div className="bg-sky-500 text-white p-2 rounded-lg">
                          INR {item.document.price}
                        </div>
                        <div className="italic text-sm">per night</div>
                        <div className="italic text-sm">
                          including all taxes
                        </div>
                        <div className="mt-[5rem] bg-green-500 w-full p-3 text-center rounded-md hover:bg-green-700 hover:shadow-lg transition-shadow">
                          <button
                            onClick={() => {
                              clickHandler(item);
                            }}
                            className="text-white "
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// <div className="bg-white">
//   <div className="w-[90%] mx-auto">
//     <div className="flex ">
//       <div className="w-[20%] flex flex-col bg-slate-300 h-screen mr-2 rounded-md overflow-hidden">
//         <div className="p-3 mt-3">
//           <div className="font-semibold text-lg mb-5">Filter By</div>
//           <div className="text-sm">
//             <div>Price per night</div>
//             <div className='flex w-[90%] items-center justify-center gap-2 mt-3'>
//               <label htmlFor="filter">Min Price:</label>
//               <input
//                 type="number"
//                 id="filter"
//                 className=" border-2 bg-transparent outline-none"
//                 value={minPrice}
//                 onChange={e => setMinPrice(Number(e.target.value))}
//               />
//             </div>
//             <div className='flex w-[90%] items-center justify-center gap-2 mt-3'>
//               <label htmlFor="filter">Max Price:</label>
//               <input
//                 type="number"
//                 id="filter"
//                 className=" border-2 bg-transparent outline-none"
//                 value={maxPrice}
//                 onChange={e => setMaxPrice(e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="h-screen overflow-y-scroll flex-grow no-scrollbar">
//         {property.map((item) => {
//           return (
//             <div className="flex mb-3 gap-3 p-1 bg-slate-300 rounded-md">
//               <div className="max-w-[15rem] h-[15rem]">
//                 <SimpleSlider images={item.document.images} />
//               </div>
//               <div className="flex w-[100%] justify-between">
//                 <div className="flex flex-col p-2">
//                   <div className="font-semibold text-lg mb-3">
//                     {item.document.name}
//                   </div>
//                   <div>{item.document.address}</div>
//                   <div className="font-thin">{item.document.type}</div>
//                 </div>
//                 <div className="flex flex-col p-2 mr-3 items-center">
//                   <div className="bg-sky-500 text-white p-2 rounded-lg">
//                     INR {item.document.price}
//                   </div>
//                   <div className="italic text-sm">per night</div>
//                   <div className="italic text-sm">including all taxes</div>
//                   <div className="mt-[5rem] bg-green-500 w-full p-3 text-center rounded-md hover:bg-green-700 hover:shadow-lg transition-shadow">
//                     <button className="text-white ">Book Now</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// </div>

export default Details;
