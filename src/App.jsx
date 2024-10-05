// App.jsx
import { Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import DAppBrowserPage from './pages/DAppBrowserPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Analytics />
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dapp-browser" element={<DAppBrowserPage />} />
      </Routes>
    </>
  );
}

export default App;
