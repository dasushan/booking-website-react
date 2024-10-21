import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useRef } from 'react';
const NewProperty = () => {
  const [preview, setPreview] = useState(true);
  const propertyInputRef = useRef();
  const priceInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const pinInputRef = useRef();
  const propTypeInputRef = useRef();

  return (
    <div className="bg-slate-50 rounded-lg p-2 mx-2 flex-grow h-screen overflow-y-auto">
      <div>
        <ArrowLeft className="w-5 h-5 hover:bg-slate-300 rounded-full cursor-pointer mx-1" />
      </div>

      <div className="text-sm text-slate-800 p-2 mx-3 ">
        <p className="text-xl font-semibold">Add New Location</p>
      </div>

      <div className="flex justify-around mt-2">
        <div className="mx-2 bg-slate-100 rounded-lg w-[25rem] ">
          <form className="p-2 m-1">
            <div className="mb-2">
              <label htmlFor="property" className="block mb-1 font-mono">
                Property
              </label>
              <input
                type="text"
                id="property"
                className="border border-gray-200 w-full focus:outline-none cursor-pointer rounded-xl px-2 font-mono h-8 focus:shadow-sm"
                ref={propertyInputRef}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="price" className="block mb-1 font-mono">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="border border-gray-200 w-full focus:outline-none cursor-pointer rounded-xl px-2 font-mono h-8 focus:shadow-sm"
                ref={priceInputRef}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address" className="block mb-1 font-mono">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="border border-gray-200 w-full focus:outline-none cursor-pointer rounded-xl px-2 font-mono h-8 focus:shadow-sm"
                ref={addressInputRef}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="city" className="block mb-1 font-mono">
                City
              </label>
              <input
                type="text"
                id="city"
                className="border border-gray-200 w-full focus:outline-none cursor-pointer rounded-xl px-2 font-mono h-8 focus:shadow-sm"
                ref={cityInputRef}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="pin" className="block mb-1 font-mono">
                PIN Code
              </label>
              <input
                type="number"
                id="pin"
                className="border border-gray-200 w-full focus:outline-none cursor-pointer rounded-xl px-2 font-mono h-8 focus:shadow-sm"
                ref={pinInputRef}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="proptype" className="block mb-1 font-mono">
                Property Type
              </label>
              <select
                id="proptype"
                className="border border-gray-200 w-full outline-none h-8 mt-1 px-2 font-mono rounded-xl focus:shadow-sm"
                ref={propTypeInputRef}
              >
                <option value="">Select a Property Type</option>
                <option value="villa">Villa</option>
                <option value="apartment">Apartment</option>
                <option value="houseboat">HouseBoat</option>
              </select>
            </div>
            <div className='mb-2'>
                <label htmlFor="photo" className='block mb-1 font-mono'>
                    Uplaod Image
                </label>
                <input type="file" multiple id="photo" className='font-mono h-8 mt-1 px-2 rounded-xl cursor-pointer'/>
            </div>
          </form>
        </div>

        <div>
          {preview && (
            <Card className="w-60 h-56 m-1 grid place-items-center">
              <CardHeader>
                <CardTitle>Loki</CardTitle>
                <CardDescription>Serene Beautiy</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
                <p>fjfjfj</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewProperty;
