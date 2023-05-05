
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Shows from './Pages/Shows/Shows';
import Show from './Pages/Show/Show';
import Ticket from './Pages/Ticket/Ticket';

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [{
      path: '/',
      element: <Shows></Shows>
    },
    {
      path: '/show/:id',
      element: <Show></Show>
    },
    {
      path: '/ticket/:id',
      element: <Ticket></Ticket>
    },
    ]
  }])

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
