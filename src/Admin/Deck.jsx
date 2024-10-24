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

        console.log(data);
        setProperty(data);

        setProperty((prev) => [...prev, ...data]);
        console.log(property);
      } catch (e) {
        console.log(e.message);
      }
    });
  }, []);

  return (
    
      <div className="bg-slate-700 h-screen flex-grow mx-2  rounded-xl p-3 flex flex-col">
        <div className='p-2 text-white font-bold text-lg'>
            Your Listings
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
                    <button className="bg-red-500 hover:bg-red-700 px-4 py-1 text-white rounded-full font-bold font-mono">
                      Edit
                    </button>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className='bg-slate-300 '>
          jfjjf
        </div>
      </div>
      
    
  );
};

export default Deck;
