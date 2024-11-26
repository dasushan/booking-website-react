import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/userSlice';
const AuthForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModuleHandler = () => {
    setIsLogin((prevState) => !prevState);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEamil = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    
    
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
    setIsLoading(true);
    if(isLogin){
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPd3OJu5C4ovhseqO5Cz60GeZfjb_W-Eo', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEamil,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            setIsLoading(false);
            if(res.ok){
                return res.json().then((data) => {
                    console.log(data);
                    dispatch(login(data));
                    navigate('/', {replace: true})
                })
            }else{
                return res.json().then((data) => {
                    let errorMessage = 'Authentication failed!';
                    if(data && data.error && data.error.message){
                        errorMessage = data.error.message;
                    }
                    alert(errorMessage);
                })
            }
        })
    } else {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPd3OJu5C4ovhseqO5Cz60GeZfjb_W-Eo', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEamil,
                password: enteredPassword,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            setIsLoading(false);
            if(res.ok){
                return res.json().then((data) => {
                    console.log(data);
                    dispatch(login(data));
                    navigate('/', {replace: true});
                })
            } else{
                return res.json().then((data) => {
                    let errorMessage = 'Authentication failed!';
                    if(data && data.error && data.error.message){
                        errorMessage = data.error.message;
                    }
                    alert(errorMessage);
                })
            }
        })
    }

  };
  return (
    <div className="h-screen w-[90%] mx-auto flex items-center justify-center  bg-slate-100">
      <form
        onSubmit={submitHandler}
        className="w-[50%] grid place-items-center bg-white p-3 m-3 rounded-lg"
      >
        <div className='text-[3rem] text-center p-4 my-5'>
            {isLogin? 'Login' : 'Sign Up'}
        </div>
        <div className="flex w-[30rem] my-3">
          <label htmlFor="email" className='block w-[25%] text-center py-1'>Email</label>
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            ref={emailInputRef}
            className='bg-slate-50 text-xl focus:outline-none w-full px-3 py-1 border-b-2 border-gray-200 focus:border-blue-500'
          />
        </div>
        <div className='flex w-[30rem] my-3'>
          <label htmlFor="password" className='block w-[25%] text-center py-1'>Password</label>
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            ref={passwordInputRef}
            className='bg-slate-50 text-xl focus:outline-none w-full px-3 py-1 border-b-2 border-gray-200 focus:border-blue-500'
          />
        </div>
        <div className='flex flex-col items-center my-3'>
          {!isLoading && <button type="submit" className='px-5 py-2 m-3 bg-blue-400 text-white text-center font-semibold cursor-pointer rounded-full hover:shadow-lg ring-2 ring-offset-2 hover:ring-offset-4 transition-all'>{isLogin?'Login': 'Create Account'}</button>}
          {isLoading && <p>Sending request...</p>}
          <button onClick={switchAuthModuleHandler}>
            {isLogin? 'Create new account': 'Login with existing account'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
