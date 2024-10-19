import React, { useEffect, useState } from 'react';

const Home = () => {
    const [walletData, setWalletData] = useState(null);

    useEffect(() => {
        // Fetch wallet data from the backend
        const fetchWalletData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/wallet'); // Adjust the API endpoint as necessary
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWalletData(data);
            } catch (error) {
                console.error('Error fetching wallet data:', error);
            }
        };

        fetchWalletData();
    }, []);

    return (
        <div>
            <h1>Welcome to the Web3 Wallet</h1>
            {walletData ? (
                <div>
                    <h2>Your Wallet Information</h2>
                    <p>Address: {walletData.address}</p>
                    <p>Balance: {walletData.balance} ETH</p>
                </div>
            ) : (
                <p>Loading wallet information...</p>
            )}
        </div>
    );
};

export default Home;