import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import Contex from './ProductContex/Contex';

function App() {
  return (
    <div className="">
      <Contex>
        <RouterProvider router={router}></RouterProvider>
      </Contex>

    </div>
  );
}

export default App;
