import React from 'react'
import './App.css';
import './index.css';

import { Footer, Blog, Possibility, Features, WhatGpt3, Header} from './containers';
import { Brand, Cta, Navbar} from './components';

const App = () => {
  return (
    <div ClassName="App">
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGpt3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
      


      
    </div>
  )
}

export default App


