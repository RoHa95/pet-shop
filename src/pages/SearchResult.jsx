import React from 'react'
import Ads from '../components/Ads'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import CartItem from "../components/CartItem"
import Card from "../components/Card"
function SearchResult() {
  const location = useLocation();
  const data = location.state;
    console.log(data);
    
  return (
    <div>
        <Ads/>
        <Navbar/>
        <div className=' container mx-auto p-8 max-w-[1240px] grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>{data.length === 0 ?<p>محصول مورد نظر شما یافت نشد. </p>: data.map(item=>(<Card data={item}/>))}</div>
        <Footer/>
    </div>
  )
}

export default SearchResult