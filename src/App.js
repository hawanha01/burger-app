import React from 'react'
import './App.css'
import Burger from './components/burger/burger'
import Footer from './components/footer/footer'
import MyNavbar from './components/navbar/navbar'
const App = () => {
  return (
    <div className='App'>
      <MyNavbar />
      <div className='BurgerBody'>
        <Burger />
      </div>
      <div className='footerBody'>
        <Footer/>
      </div>
    </div>
  )
}

export default App
