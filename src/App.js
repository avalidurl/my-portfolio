import React, { useState, useEffect } from 'react';
import './App.css';

// GasPrice Component
const GasPrice = () => {
  const [gasPrice, setGasPrice] = useState(null);

  useEffect(() => {
    const fetchGasPrice = async () => {
      const response = await fetch(`https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourAPIKeyHere`);
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

// Main App Component
function App() {
  return (
    <div className="App">
      <GasPrice />
      <header className="App-header">
        <h1>Gökhan Turhan</h1>
        <h4>proactive artist<br/> experimenting at the longhouse of finance, art, compute<br/> to appreciate the use of knowledge in society.</h4>
      </header>
      <main>
        <section className="link-section">
          <h2>Socials</h2>
          <div className="links">
            <a href="https://twitter.com/0xgokhan" className="link-item twitter">Twitter</a>
            <a href="https://github.com/avalidurl" className="link-item github">Github</a>
            <a href="https://warpcast.com/gokhan" className="link-item farcaster">Farcaster</a>
            <a href="https://hey.xyz/u/acceleration" className="link-item lens">Lens</a>
            <a href="https://bsky.app/profile/0xgokhan.bsky.social" className="link-item bluesky">Bluesky</a>
            <a href="https://cryptodon.lol/@gokhan" className="link-item cryptodon">Mastodon</a>
          </div>
        </section>
        <section className="link-section">
          <h2>Writing</h2>
          <div className="links">
            <a href="https://gokhan.substack.com" className="link-item substack">Substack</a>
            <a href="https://gokhan.mirror.xyz" className="link-item mirror">Mirror</a>
            <a href="https://paragraph.xyz/@gokhan" className="link-item paragraph">Paragraph</a>
            <a href="https://medium.com/@0xgokhan" className="link-item medium">Medium</a>
            <a href="https://beta.cent.co/goekhanturhan/" className='link-item cent'>Cent</a>
            <a href="https://midnight.pub/site" className="link-item pub">Midnight Pub</a>
          </div>
        </section>
        <section className="link-section">
          <h2>Formality</h2>
          <div className="links">
            <a href="https://www.linkedin.com/in/goekhanturhan/" className="link-item linkedin">LinkedIn</a>
            <a href="https://independentresearcher.academia.edu/gokhanturhan" className="link-item academia">Academia</a>
            <a href="https://scholar.google.com/citations?user=EgZE838AAAAJ&hl=en" className="link-item scholar">Google Scholar</a>
            <a href="https://www.researchgate.net/profile/Goekhan-Turhan-2" className="link-item gate">Research Gate</a>
            <a href="https://hcommons.org/members/gokhanturhan/" className="link-item commons">Humanities Commons</a>
          </div>
        </section>
        <section className="link-section">
          <h2>Chats & Guilds</h2>
          <div className="links">
            <a href="httpshttps://guild.xyz/conceptual" className="link-item cag">CAG Guild</a>
            <a href="https://discord.gg/DvX5FRXKf9" className="link-item discord">Discord: CAG</a>
            <a href="https://t.me/artinfinance" className="link-item tg: marketual research unit">TG: Marketual Research Unit</a>
            <a href="https://t.me/eaccs" className="link-item tg: unconditional acceleration">TG: Unconditional Acceleration</a>
            <a href="https://t.me/farcaster_istanbul" className="link-item tg: farcaster istanbul">TG: Farcaster Istanbul</a>
            <a href="https://t.me/+sCGdzUEACdVmYjk0" className="link-item tg: devcoffee">TG: Devcoffee</a>
            <a href="https://t.me/writingnfts" className="link-item tg: writing nfts">TG: Writing NFTs</a>
            <a href="https://matrix.to/#/#art-in-finance:matrix.org" className='link-item matrix'>Matrix: Art in Finance</a>
          </div>
        </section>
        <section className="link-section">
          <h2>Aggregators</h2>
          <div className="links">
            <a href="https://linktr.ee/0xgokhan" className="link-item linktree">Linktree</a>
            <a href="https://nf.td/gokhan" className="link-item nftd">NFTD</a>
            <a href="https://lu.ma/u/gokhan" className="link-item luma">Luma</a>
            <a href="https://0xgokhan.carrd.co/" className="link-item card co">Card Co</a>
            <a href="https://read.cv/gokhanturhan" className="link-item read cv">Read CV</a>
          </div>
        </section>
        </main>
    </div>
  );
}

export default App;
