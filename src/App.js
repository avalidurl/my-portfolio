import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gökhan Turhan</h1>
      </header>
      <main>
        <section className="link-section">
          <h2>Socials</h2>
          <div className="links">
            <a href="https://twitter.com/0xgokhan" className="link-item">Twitter</a>
            <a href="https://github.com/avalidurl" className="link-item">Github</a>
            <a href="https://warpcast.com/gokhan" className="link-item">Farcaster</a>
            <a href="https://hey.xyz/u/acceleration" className="link-item">Lens</a>
            <a href="https://bsky.app/profile/0xgokhan.bsky.social" className="link-item">Bluesky</a>
          </div>
        </section>
        <section className="link-section">
          <h2>Writing</h2>
          <div className="links">
            <a href="https://gokhan.substack.com" className="link-item">Substack</a>
            <a href="https://gokhan.mirror.xyz" className="link-item">Mirror</a>
            <a href="https://paragraph.xyz/@gokhan" className="link-item">Paragraph</a>
            <a href="https://medium.com/@0xgokhan" className="link-item">Medium</a>
            <a href="https://midnight.pub/site" className="link-item">Midnight Pub</a>
          </div>
        </section>
        <section className="link-section">
          <h2>Formality</h2>
          <div className="links">
            <a href="https://www.linkedin.com/in/goekhanturhan/" className="link-item">LinkedIn</a>
            <a href="https://independentresearcher.academia.edu/gokhanturhan" className="link-item">Academia</a>
            <a href="https://scholar.google.com/citations?user=EgZE838AAAAJ&hl=en" className="link-item">Google Scholar</a>
            <a href="https://www.researchgate.net/profile/Goekhan-Turhan-2" className="link-item">Research Gate</a>
            <a href="https://hcommons.org/members/gokhanturhan/" className="link-item">Humanities Commons</a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
