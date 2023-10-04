import React, { useState, useEffect } from 'react';
import './GasPrice.css'; // Import your CSS

const GasPrice = () => {
  const [gasPrice, setGasPrice] = useState(null);

  useEffect(() => {
    const fetchGasPrice = async () => {
      const response = await fetch(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=gsqr3am9z8mxyyCK88SYZUMZ4S2PBQ7CVZ`);
      const data = await response.json();
      setGasPrice(data.result.SafeGasPrice); // Adjust depending on the API response
    };

    fetchGasPrice();
    const intervalId = setInterval(fetchGasPrice, 60000); // Update every 60 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="gas-price">
      {gasPrice ? `Gas Price: ${gasPrice} Gwei` : 'Loading...'}
    </div>
  );
};

export default GasPrice;
