import React, { useState, useRef, Suspense, lazy } from 'react';
import { Globe, Loader } from 'lucide-react';

const LazyIframe = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve({
      default: ({ src, title }) => (
        <iframe
          src={src}
          title={title}
          style={{ width: '100%', height: '100%', border: 'none' }}
          sandbox="allow-scripts allow-same-origin"
        />
      )
    });
  }, 1000);
}));

const DAppBrowser = () => {
  const [url, setUrl] = useState('');
  const [currentDApp, setCurrentDApp] = useState(null);
  const inputRef = useRef(null);

  const loadDApp = () => {
    if (url) {
      setCurrentDApp(url);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      loadDApp();
    }
  };

  return (
    <div className="dapp-browser bg-gradient-to-br from-purple-900 to-indigo-900 min-h-screen text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center">
          <Globe className="inline-block mr-2 mb-1" />
          Web3 DApp Browser
        </h1>
        <div className="dapp-browser-controls bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg mb-4 sm:mb-8">
          <div className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter DApp URL"
              className="flex-grow p-2 sm:p-3 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={loadDApp} 
              className="p-2 sm:p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Load DApp
            </button>
          </div>
        </div>
        <div className="dapp-browser-content bg-gray-800 rounded-lg shadow-lg" style={{ height: 'calc(100vh - 200px)' }}>
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <Loader className="animate-spin mr-2" />
              <span>Loading DApp...</span>
            </div>
          }>
            {currentDApp ? (
              <LazyIframe src={currentDApp} title="DApp Browser" />
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <Globe className="mb-4 text-blue-400" size={64} />
                <p className="text-xl text-center">Enter a URL and click 'Load DApp' to interact with a decentralized application.</p>
              </div>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default DAppBrowser;