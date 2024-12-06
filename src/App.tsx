import React from 'react'
import './App.css'
import './index.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Content from './components/content/Content'

const App: React.FC = () => {
    return (<>
    <Header/>
    <Content/>
    <Footer/>
    </>)
  }
  
  export default App;  