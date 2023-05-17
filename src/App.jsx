import {Provider} from 'react-redux';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import HomePage from './pages';
import store from './redux/store';
import CarsPage from './pages/cars';

const router= createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/cars',
    Component: CarsPage,
  },
]);

const App= ()=> {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
