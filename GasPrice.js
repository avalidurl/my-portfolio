const GasPrice = () => {
    const [gasPrice, setGasPrice] = useState(null);
  
    useEffect(() => {
      const fetchGasPrice = async () => {
        try {
          const response = await fetch(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`);
          const data = await response.json();
          setGasPrice(data.result.SafeGasPrice);
        } catch (error) {
          console.error("Failed to fetch gas price:", error);
        }
      };
  
      fetchGasPrice();
      const intervalId = setInterval(fetchGasPrice, 60000); 
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="gas-price">
        {gasPrice ? `${gasPrice} Gwei` : 'Loading...'}
      </div>
    );
  };
  