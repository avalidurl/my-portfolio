const GasPrice = () => {
    const [gasData, setGasData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchGasPrice = async () => {
        try {
          const response = await fetch(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`);
          if (response.ok) {
            const data = await response.json();
            setGasData(data.result);
            setError(null);
          } else {
            setError('Could not fetch gas data');
          }
        } catch (error) {
          setError('Failed to fetch gas data');
          console.error("Failed to fetch gas data:", error);
        }
      };
  
      fetchGasPrice();
      const intervalId = setInterval(fetchGasPrice, 12000);  // Update every 12 seconds
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="gas-price">
        {error ? error : (
          gasData ? (
            <>
              Safe: {gasData.SafeGasPrice} Gwei, 
              Proposed: {gasData.ProposeGasPrice} Gwei, 
              Fast: {gasData.FastGasPrice} Gwei,
              Base Fee: {gasData.suggestBaseFee},
              Gas Used Ratio: {gasData.gasUsedRatio}
            </>
          ) : 'Loading...'
        )}
      </div>
    );
  };
  
  
  