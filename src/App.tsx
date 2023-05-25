import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';

import { urls } from './constants/urls';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Monitoring from './pages/Monitoring/Monitoring';
import Analytics from './pages/Analytics/Analytics';

const App = () => {
  return (
    <Routes>
      <Route path={urls.home} element={<Home />} />
      <Route path={urls.monitoring} element={<Monitoring />} />
      <Route path={urls.analytics} element={<Analytics />} />
      <Route path={`${urls.monitoring}/:id`} element={<Monitoring />} />
      <Route path={urls.notFound} element={<ErrorPage error={404} />} />
    </Routes>
  );
};

export default App;
