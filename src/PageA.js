import React from 'react'; 
import { BrowserRouter, Route, Link } from 'react-router-dom';
import page1 from './App'; 
import page2 from './PageA';

function PageA() {
  return (
    <div>
      <p>第二ページ</p>
      <Link to={'/'}>~１ページ目へ~</Link> 
    </div>
    );
};
export default PageA;