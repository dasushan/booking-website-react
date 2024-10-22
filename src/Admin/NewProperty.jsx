import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import SimpleSlider from './Carousel';

const NewProperty = () => {
  const [preview, setPreview] = useState(null)
  const [uploading, setUploading] = useState(false);
  const propertyInputRef = useRef();
  const priceInputRef = useRef();
  const addressInputRef = useRef();
  const cityInputRef = useRef();
  const pinInputRef = useRef();
  const propTypeInputRef = useRef();
  const fileInputRef = useRef();

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState([]);
  const [imageList, setImageList] = useState([]);

  const handleImageChange = (event) => {
    event.preventDefault();
    if (event.target.files[0]) {
      setImage(event.target.files);
    }
  };

  const imageListRef = ref(storage, 'images/');

  const handleUpload = () => {
    if (!image) {
      return alert('Please select an image');
    }
    for (let i = 0; i < image.length; i++) {
        setUploading(true);
      const imageRef = ref(
        storage,
        `images/${propTypeInputRef.current.value + v4()}`
      );
      const metadata = {
        contentType: 'image/jpeg',
      };
      uploadBytes(imageRef, image[i], metadata).then((snapshot) => {
        console.log(snapshot);
        setUploading(false);
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setImageList((prev) => [...prev, url]);
          })
          .catch((error) => {
            switch (error.code) {
              case 'storage/object-not-found':
                //File doesn't exist
                break;
              case 'storage/unauthorized':
                //User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User cancelled the upload
                break;
            }
          });
      });
    }
    
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredProperty = propertyInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPin = pinInputRef.current.value;
    const enteredpropType = propTypeInputRef.current.value;

    const document = {
      name: enteredProperty,
      price: enteredPrice,
      address: enteredAddress,
      city: enteredCity,
      pin: enteredPin,
      type: enteredpropType,
      images: imageList,
    };
    console.log(document);

    fetch(
      `https://travel-website-bc25b-default-rtdb.asia-southeast1.firebasedatabase.app/listings.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ document, booked: false, id: v4() }),
      }
    )
      .then(async (response) => {
        const result = await response.json();
        console.log(result);
        setImageList([]);

        propertyInputRef.current.value = '';
        priceInputRef.current.value = '';
        addressInputRef.current.value = '';
        cityInputRef.current.value = '';
        pinInputRef.current.value = '';
        propTypeInputRef.current.value = '';
        fileInputRef.current.value = '';
        fetch(`https://travel-website-bc25b-default-rtdb.asia-southeast1.firebasedatabase.app/listings/${result.name}.json`, {
            method: 'GET'
        }).then(async (response) => {
            const result = await response.json();
            console.log(result)
            setPreview(result)
        })
      })
      
  };

  //   useEffect(() => {
  //     listAll(imageListRef).then((response) => {
  //         response.items.forEach((item) => {
  //             getDownloadURL(item).then((url) => {
  //                 setImageList((prev) => [...prev, url])
  //             })
  //         })
  //     })
  //   }, [])

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
          <form className="p-2 m-1" onSubmit={formSubmitHandler}>
            <div className="mb-2">
              <label htmlFor="property" className="block mb-1 font-mono">
                Property
              </label>
              <input
                type="text"
                id="property"
                className="border border-gray-200 w-full focus:outline-none cursor-pointer rounded-xl px-2 font-mono h-8 focus:shadow-sm"
                ref={propertyInputRef}
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="proptype" className="block mb-1 font-mono">
                Property Type
              </label>
              <select
                id="proptype"
                className="border border-gray-200 w-full outline-none h-8 mt-1 px-2 font-mono rounded-xl focus:shadow-sm"
                ref={propTypeInputRef}
                required
              >
                <option value="">Select a Property Type</option>
                <option value="villa">Villa</option>
                <option value="apartment">Apartment</option>
                <option value="houseboat">HouseBoat</option>
              </select>
            </div>
            <div className="mb-2">
              <label htmlFor="photo" className="block mb-1 font-mono">
                Uplaod Image
              </label>
              <input
                type="file"
                multiple
                id="photo"
                className="font-mono h-8 mt-1 px-2 rounded-xl cursor-pointer block"
                onChange={handleImageChange}
                ref={fileInputRef}
              />
            </div>
            <div className="flex items-center justify-end mb-2">
            
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full font-mono"
                onClick={handleUpload}
              >
                Upload
              </button>
              {uploading && (<div className='ml-4 font-mono text-green-400'>Uploading...</div>)}
            </div>
            <div className="flex items-center justify-center">
                
              {imageList.length == 0 && (
                <p className="font-mono">Upload Image to enable Submit Btn</p>
              )}
              {imageList.length > 0 && (
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full font-mono w-full "
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>

        <div> 
          {!!preview && (
            <Card className="w-[20rem] h-auto m-1 grid place-items-center">
              <CardHeader>
                <CardTitle>
                    <div>
                        <div>{preview.document.name}</div>
                        <div>{preview.document.city}</div>
                        
                    </div>
                </CardTitle>
                <CardDescription>
                    <div>
                        <div>{preview.document.type}</div>
                        <div>{preview.document.price} per night <span>inculdes taxes and fees</span></div>
                    </div>
                </CardDescription>
              </CardHeader>
              <CardContent className='flex max-w-56 overflow-hidden h-[12rem]'>
                <SimpleSlider images={preview.document.images}/> 
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
