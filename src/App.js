import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/home/home.component';

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
};

const App = () => {
  const Shop = () => {
    return <h1>I am the shop page</h1>;
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
