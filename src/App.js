import React from 'react';
import './App.css';

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
            <a href="https://warpcast.com/gokhan" className="link-item farcaster">Farcaster</a>
            <a href="https://hey.xyz/u/acceleration" className="link-item lens">Lens</a>
            <a href="https://bsky.app/profile/0xgokhan.bsky.social" className="link-item bluesky">Bluesky</a>
          </div>
        </section>
        <section className="link-section">
          <h2>Writing</h2>
          <div className="links">
            <a href="https://gokhan.substack.com" className="link-item substack">Substack</a>
            <a href="https://gokhan.mirror.xyz" className="link-item mirror">Mirror</a>
            <a href="https://paragraph.xyz/@gokhan" className="link-item paragraph">Paragraph</a>
            <a href="https://medium.com/@0xgokhan" className="link-item medium">Medium</a>
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
      </main>
    </div>
  );
}

export default App;
