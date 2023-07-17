import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Beranda from './pages/Beranda/Beranda'
import NewsList from './components/NewsList/NewsList'
import NewsDetail from './components/NewsDetails/NewsDetails'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Beranda />}>
        <Route path = "news" element ={<NewsList />}/>
        <Route path = "/news/:id" element = {<NewsDetail />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);