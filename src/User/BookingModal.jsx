import { Equal, X } from 'lucide-react';
import { setShowBookingModal } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

const BookingModal = () => {
  const dispatch = useDispatch();
  const bookedProperty = useSelector((state) => state.user.bookedProperty)
  console.log(bookedProperty);
  const enteredAddressInputRef = useRef(null);
  const enteredCheckInInputRef = useRef(null);
  const enteredCheckOutInputRef = useRef(null);
  const enteredNoOfGuestsInputRef = useRef(null);

  function submitHandler() {
    const booking = {
        id: bookedProperty.id,
        address: enteredAddressInputRef.current.value,
        checkin: enteredCheckInInputRef.current.value,
        checkout: enteredCheckOutInputRef.current.value,
        guestsno : enteredNoOfGuestsInputRef.current.value
    }
    console.log(booking);
    dispatch(setShowBookingModal(false))
  }
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center z-20 bg-opacity-55">
      <form className="bg-white rounded-lg shadow-2xl w-[50%]">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400">
            <Equal />
          </span>
          <button onClick={() => dispatch(setShowBookingModal(false))}>
            <span className="text-gray-400">
              <X />
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="address"
              placeholder="Add address"
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              ref={enteredAddressInputRef}
            />
            <div className="flex gap-7 items-center justify-center">
              <label
                htmlFor="checkin"
                className="bg-transparent inline-block text-gray-600 text-2xl font-semibold shadow-b shadow-xl w-[25%]"
              >
                CheckIn
              </label>
              <input
                type="date"
                name="checkin"
                required
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                ref={enteredCheckInInputRef}
              />
            </div>
            <div className="flex gap-7 items-center justify-center">
              <label
                htmlFor="checkout"
                className="bg-transparent inline-block text-gray-600 text-2xl font-semibold shadow-b shadow-xl w-[25%]"
              >
                CheckOut
              </label>
              <input
                type="date"
                name="checkout"
                required
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                ref={enteredCheckOutInputRef}
              />
            </div>
            <div className="flex gap-7 items-center justify-center">
              <label
                htmlFor="guests"
                className="bg-transparent inline-block text-gray-600 text-2xl font-semibold shadow-b shadow-xl w-[25%]"
              >
                Guests
              </label>
              <input
                type="number"
                name="guests"
                placeholder="No of guests"
                required
                className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                ref={enteredNoOfGuestsInputRef}
              />
            </div>
            <div className='flex justify-end mt-3'>
                <button type="submit" onClick={submitHandler} className='px-5 py-3 m-3 bg-green-500 text-white text-center font-semibold hover:scale-125 cursor-pointer transition-all ease-in-out duration-300 hover:font-extrabold'>
                    Confirm Booking
                </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingModal;
