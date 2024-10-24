import React from 'react';
import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import SimpleSlider from './Carousel';
import { useNavigate } from 'react-router-dom';
const Deck = () => {
  const [property, setProperty] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://travel-website-bc25b-default-rtdb.asia-southeast1.firebasedatabase.app/listings.json`,
      {
        method: 'GET',
      }
    ).then(async (response) => {
      try {
        const result = await response.json();
        const data = [];
        for (const [key, value] of Object.entries(result)) {
          data.push(value);
        }
        console.log(property);
        setProperty((prev) => {
          return [...prev, ...data];
        });
      } catch (e) {
        console.log(e.message);
      }
    });
  }, []);
  console.log(property);
  return (
    <div className="bg-slate-700 h-screen flex-grow mx-2  rounded-xl p-3 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <div className="p-2 text-white font-bold text-l">Your Listings</div>
        <div className="rounded-xl bg-gradient-to-r from-fuchsia-600 to-violet-600  w-[10rem] hover:from-fuchsia-700 hover:to-violet-700">
          <div
            className="p-2 text-white font-bold text-l text-center cursor-pointer "
            onClick={() => {
              navigate('/admin/newlisting');
            }}
          >
            Add Listing
          </div>
        </div>
      </div>

      <div className="  h-[25rem]  overflow-x-scroll no-scrollbar grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-3 gap-3 mb-3">
        {property.map((item) => {
          return (
            <Card className="w-[20rem] h-auto m-1 grid place-items-center">
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
              <CardContent className="flex max-w-56 overflow-hidden h-[12rem]">
                <SimpleSlider images={item.document.images} />
              </CardContent>
              <CardFooter>
                <div className="w-[10rem] flex justify-end">
                  <button
                    className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 px-4 py-1 text-white rounded-xl font-bold font-mono"
                    onClick={() => {
                      console.log(item.id);
                      navigate(`/admin/listing/${item.id}`);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="bg-slate-300 ">jfjjf</div>
    </div>
  );
};

export default Deck;
