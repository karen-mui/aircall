import React from 'react';
import ReactDOM from 'react-dom/client.js';
import { useState } from 'react';

// assets
import Header from './Header.jsx';
import Button from 'react-bootstrap/esm/Button.js';

// pages
import ActivityFeed from './pages/ActivityFeed.js';
import Archive from './pages/Archive.js';


export default function App() {

  const [page, setPage] = useState("ActivityFeed");

  return (
    <div className='container'>
      <Header />
      { page === "ActivityFeed" ? <ActivityFeed /> : <Archive />}
      <Button onClick={() => setPage("ActivityFeed")}>
        Activity Feed
      </Button>
      <Button onClick={() => setPage("Archive")}>
        Archive
      </Button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <App />
);
