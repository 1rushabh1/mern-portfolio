import React from 'react';
import{Routes,Route}from'react-router-dom';
import Nav from './components/Navbar';import Foot from './components/Footer';
import H from './pages/Home';import A from './pages/About';import P from './pages/Projects';import C from './pages/Contact';
export default()=>(
<div className='app'><Nav/><main><Routes>
<Route path='/' element={<H/>}/><Route path='/about' element={<A/>}/><Route path='/projects' element={<P/>}/><Route path='/contact' element={<C/>}/>
</Routes></main><Foot/></div>);