import React from 'react'
import Prenavbar from './components/Prenavbar'
import "../src/App.css"
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading from "./components/Heading.js"
import Starproduct from "./components/Starproducts.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from './components/HotAccessories.js'
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"


function App() {
  return (
    <Router>
      <Prenavbar></Prenavbar>
      <Navbar></Navbar>
      <Slider start={data.banner.start} />
      <Offers offer={data.offer}></Offers>
      <Heading text="STAR PRODUCTS" />
      <Starproduct starProduct={data.starProduct}></Starproduct>
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu></HotAccessoriesMenu>
      <Routes>
        <Route exact path="/musicStore" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}>

        </Route>
        <Route exact path="/smartDevices" element={<HotAccessories smartDevices={data.hotAccessories.smartDevice} smartDevicesCover={data.hotAccessoriesCover.smartDevice} />}>

        </Route>
        <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}>

        </Route>
        <Route exact path="/lifestyle" element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />}>

        </Route>
        <Route exact path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}>

        </Route>

      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer/>

    </Router>
  )
}

export default App
