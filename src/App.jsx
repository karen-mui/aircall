import React from 'react';
import ReactDOM from 'react-dom/client.js';
import { useState } from 'react';

// assets
import Header from './Header.jsx';

// components
import ActivityFeed from './components/ActivityFeed.js';
import ActivityDetail from './components/ActivityDetail.js';
import Archive from './components/Archive.js';


export default function App() {

  const [state, setState] = useState()

  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
      <ActivityDetail />
      <Archive />
      <ActivityFeed />
    </div> 
  );
}
ReactDOM.createRoot(document.getElementById('app')).render(
  <App />
)
