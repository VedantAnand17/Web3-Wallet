import React, { useState, useRef, Suspense, lazy } from 'react';
import { Globe, Loader, Search } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

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
    <div className="min-h-screen bg-dark text-white pt-24 px-4 sm:px-8">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-primary-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-display font-bold mb-6 flex items-center justify-center">
            <Globe className="mr-3 text-primary-400" />
            Web3 DApp Browser
          </h1>

          <div className="max-w-2xl mx-auto flex gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
              <Input
                ref={inputRef}
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter DApp URL (e.g. https://uniswap.org)"
                className="pl-10 bg-white/5 border-white/10"
              />
            </div>
            <Button onClick={loadDApp} variant="premium">
              Go
            </Button>
          </div>
        </div>

        <Card className="flex-grow bg-white/5 border-white/10 overflow-hidden relative">
          <div className="w-full h-full bg-black/40">
            <Suspense fallback={
              <div className="flex items-center justify-center h-full">
                <Loader className="animate-spin mr-2 text-primary-400" />
                <span className="text-gray-400">Loading DApp...</span>
              </div>
            }>
              {currentDApp ? (
                <LazyIframe src={currentDApp} title="DApp Browser" />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <Globe className="mb-4 text-white/10" size={64} />
                  <p className="text-lg">Enter a URL to browse decentralized applications.</p>
                </div>
              )}
            </Suspense>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DAppBrowser;