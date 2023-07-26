import React from 'react';
import ReactDOM from 'react-dom/client.js';
import { useState } from 'react';

// assets
import Header from './Header.jsx';

// pages
import ActivityFeed from './pages/ActivityFeed.js';
import ActivityDetail from './pages/ActivityDetail.js';
import Archive from './pages/Archive.js';


export default function App() {

  return (
    <div className='container'>
      <Header/>
      <ActivityFeed />
      <Archive />
    </div> 
  );
}
ReactDOM.createRoot(document.getElementById('app')).render(
  <App />
)
