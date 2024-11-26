import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import SimpleSlider from '../Admin/Carousel';
import CustomCarousel from './CustomCarousel';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCategory } from '../store/userSlice';
const UserDeck = () => {
  const [hotels, setHotels] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://travel-website-bc25b-default-rtdb.asia-southeast1.firebasedatabase.app/listings.json`,
      {
        method: 'GET',
      }
    ).then(async (response) => {
      const result = await response.json();
      let data = Object.values(result)
      // for (const [key, value] of Object.entries(result)) {
      //   data.push(value);
      // }
      setHotels(data);
    });
  }, []);

  const clickHandler = (category) => {
    return () => {
      dispatch(setCategory(category));
      navigate(`/lodging/${category}`);
    };
  };
  return (
    <div className="bg-white">
      <div className="w-[90%] mx-auto">
        <div className="text-xl p-2 font-semibold">
          Choose from your favourite category
        </div>
        <div className="flex justify-around items-center gap-3">
          <div
            className="px-2 m-2 bg-gray-100 hover:bg-neutral-400 hover:text-white hover:scale-125 cursor-pointer rounded-lg font-semibold transition-all ease-in-out duration-300"
            onClick={clickHandler('villa')}
          >
            Villa
          </div>
          <div
            className="px-2 m-2 bg-gray-100 hover:bg-neutral-400 hover:text-white hover:scale-125 cursor-pointer rounded-lg font-semibold transition-all ease-in-out duration-300"
            onClick={clickHandler('apartment')}
          >
            Apartment
          </div>
          <div
            className="px-2 m-2 bg-gray-100 hover:bg-neutral-400 hover:text-white hover:scale-125  cursor-pointer rounded-lg font-semibold transition-all ease-in-out duration-300"
            onClick={clickHandler('cottage')}
          >
            Cottage
          </div>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <div className="px-2 font-light">All properties</div>
        <div className="h-[50rem] overflow-x-scroll no-scrollbar grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-3 gap-3 mb-3">
          {hotels?.map((item) => {
            return (
              <Card
                className="w-[20rem] h-auto m-1 grid place-items-center bg-slate-300"
                key={item.id}
              >
                <CardHeader>
                  <CardTitle>
                    <div>
                      <div>{item.document.name}</div>
                      <div className="text-base font-normal">
                        {item.document.city}
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription>
                    <div>
                      <div></div>
                      <div>
                        INR {item.document.price} per night{' '}
                        <span className="text-xs font-mono">
                          inculdes taxes and fees
                        </span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex max-w-64 h-[17rem]">
                  {/* <SimpleSlider images={item.document.images} /> */}
                  <CustomCarousel>
                    {item.document.images.map((s, index) => {
                      return (
                        
                          <img src={s} key={index} className="w-[14rem] h-[14rem] object-cover" />
                        
                      );
                    })}
                  </CustomCarousel>
                </CardContent>
                <CardFooter>
                  <div className="w-[10rem] flex justify-end">
                    <button
                      className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 px-4 py-1 text-white rounded-xl font-bold font-mono"
                      onClick={() => {
                        console.log(item.id);
                      }}
                    >
                      View
                    </button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserDeck;
