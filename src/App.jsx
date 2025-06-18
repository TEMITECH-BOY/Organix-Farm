import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './routes/navbar.jsx'
import Hero from './routes/hero.jsx'
import Mission from './routes/mission.jsx'
import Product from './routes/product.jsx'
import ProductDisplay from './routes/productDisplay.jsx'
import Banner from './routes/banner.jsx'
import SpecialProduct from './routes/specialProduct.jsx'
import Client from './routes/client.jsx'
import Blog from './routes/blog.jsx'
import Subscribe from './routes/subscribe.jsx'
import Footer from './routes/footer.jsx'


function App() {
      return(
        <main className="w-full flex flex-col"> 
        <NavBar/> 
        <Hero/>
        <Mission/>
        <Product/>
        <ProductDisplay/>
        <Banner/>
        <SpecialProduct/>
        <Client/>
        <Blog/>
        <Subscribe/>
        <Footer/>
        </main>
       
      )


}

export default App
