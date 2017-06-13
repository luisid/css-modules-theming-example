import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Root from './root';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Root} />
    </BrowserRouter>
  );
}

export default App;
