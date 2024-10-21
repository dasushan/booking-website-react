import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
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
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path='/admin' element={<Dashboard />}>
            
            <Route path='newlisting' element={<NewProperty />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      

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
    </>
  );
}

export default App;
