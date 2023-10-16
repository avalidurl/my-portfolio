import React from 'react';
import './App.css';

// Main App Component
function App() {
  return (
    <div className="App">
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
          </div>
        </section>
        <section className="link-section">
          <h2>Chats & Guilds</h2>
          <div className="links">
            <a href="https://guild.xyz/conceptual" className="link-item cag">CAG Guild</a>
            <a href="https://discord.gg/DvX5FRXKf9" className="link-item discord">Discord: CAG</a>
            <a href="https://t.me/artinfinance" className="link-item tgmarketualresearchunit">TG: Marketual Research Unit</a>
            <a href="https://t.me/eaccs" className="link-item tgunconditionalacceleration">TG: Unconditional Acceleration</a>
            <a href="https://t.me/farcaster_istanbul" className="link-item tgfarcasteristanbul">TG: Farcaster Istanbul</a>
            <a href="https://t.me/+sCGdzUEACdVmYjk0" className="link-item tgdevcoffee">TG: Devcoffee</a>
            <a href="https://t.me/writingnfts" className="link-item tgwritingnfts">TG: Writing NFTs</a>
            <a href="https://matrix.to/#/#art-in-finance:matrix.org" className='link-item matrix'>Matrix: Art in Finance</a>
          </div>
        </section>
        <section className="link-section">
          <h2>Aggregators</h2>
          <div className="links">
            <a href="https://linktr.ee/0xgokhan" className="link-item linktree">Linktree</a>
            <a href="https://nf.td/gokhan" className="link-item nftd">NFTD</a>
            <a href="https://lu.ma/u/gokhan" className="link-item luma">Luma</a>
            <a href="https://0xgokhan.carrd.co/" className="link-item cardco">Card Co</a>
            <a href="https://read.cv/gokhanturhan" className="link-item readcv">Read CV</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
