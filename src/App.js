import {Component} from 'react'

import HeaderTop from './components/HeaderTop'
import HeaderMain from './components/HeaderMain'
import CategoryList from './components/CategoryList'
import MainContainer from './components/MainContainer'
import ProductCards from './components/ProductCards'
import ProductsContainer from './components/ProductsContainer'
import Testimonials from './components/Testimonials'
import ProductTypes from './components/ProductTypes'
import Footer from './components/Footer'

import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <HeaderTop />
        <HeaderMain />
        <CategoryList />
        <MainContainer />
        <ProductCards />
        <ProductsContainer />
        <Testimonials />
        <ProductTypes />
        <Footer />
      </>
    )
  }
}

export default App
