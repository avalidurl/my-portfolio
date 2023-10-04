const GasPrice = () => {
    const [gasPrice, setGasPrice] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchGasPrice = async () => {
        try {
          const response = await fetch(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`);
          if (response.ok) {
            const data = await response.json();
            setGasPrice(data.result.SafeGasPrice);
            setError(null);  // Clear any existing error
          } else {
            setError('Could not fetch gas price');
          }
        } catch (error) {
          setError('Failed to fetch gas price');
          console.error("Failed to fetch gas price:", error);
        }
      };
  
      fetchGasPrice();
      const intervalId = setInterval(fetchGasPrice, 12000);  // Update every 12 seconds
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="gas-price">
        {error ? error : (gasPrice ? `${gasPrice} Gwei` : 'Loading...')}
      </div>
    );
  };
  
  