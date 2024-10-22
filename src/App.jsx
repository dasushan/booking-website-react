import { useState } from 'react';
import './App.css';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/ui/card';
import Dashboard from './Admin/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewProperty from './Admin/NewProperty';
import SimpleSlider from './Admin/Carousel';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/slider' element={<SimpleSlider />}/>
          <Route path='/admin' element={<Dashboard />}>
            
            <Route path='newlisting' element={<NewProperty />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      

      
    </>
  );
}

export default App;
