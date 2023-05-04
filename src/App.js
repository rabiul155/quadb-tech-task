
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Shows from './Pages/Shows/Shows';

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <Shows></Shows>
    }]
  }])

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
