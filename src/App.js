import React from 'react'
import './App.css'
import Burger from './components/burger/burger'
import Footer from './components/footer/footer'
import Layout from './layout'
const App = () => {
  return (
    <Layout>
      <div className='App'>
        <div className='BurgerBody'>
          <Burger />
        </div>
        <div className='footerBody'>
          <Footer/>
        </div>
      </div>
    </Layout>
  )
}

export default App
