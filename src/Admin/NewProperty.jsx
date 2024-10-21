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
const NewProperty = () => {
  const [preview, setPreview] = useState(false);
  return (
    <div className="bg-slate-50 rounded-lg p-2 mx-2 flex-grow">
      <div>
        <ArrowLeft className="w-5 h-5 hover:bg-slate-300 rounded-full cursor-pointer mx-1" />
      </div>

      <div className="text-sm text-slate-800 p-2 mx-3 ">
        <p>Add New Location</p>
      </div>
      <div className="flex items-center justify-center">
        <form>
          <div className='mb-2'>
            <label htmlFor="property" className="block mb-1">
              Property
            </label>
            <input type="text" id="property" className='w-full' />
          </div>
          <div>
            <label htmlFor="price" className="block">
              Price
            </label>
            <input type="number" placeholder="1000" />
          </div>
          <div>
            <label>Address</label>
            <input type="text" placeholder=""/>   
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Bangalore"/>
          </div>
          <div>
            <label>PIN Code</label>
            <input type="number" placeholder="" className='hover:outline-none'/>
          </div>
          <div>
            <label htmlFor="proptype" className='block '>
                Property Type
            </label>
            <select id="proptype" className='block border border-gray-300 w-full outline-none h-6 mt-1 '>
                <option value="">Select a Property Type</option>
                <option value="villa">Villa</option>
                <option value="apartment">Apartment</option>
                <option value="houseboat">HouseBoat</option>
            </select>
          </div>
        </form>
      </div>
      {/* <div>
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
        </div> */}
    </div>
  );
};

export default NewProperty;
