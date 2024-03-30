import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';
import Sidebar from './sidebar';
import Videos from './videos';
import reportWebVitals from './reportWebVitals';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(""); 

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <React.StrictMode>
      <Header handleSearchChange={handleSearchChange} /> 
      <Sidebar />
      <Videos searchQuery={searchQuery} />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
