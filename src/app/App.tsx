import React from 'react';
import {ChakraProvider, Img, Link} from '@chakra-ui/react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "./App.scss"
import Banner from "../components/banner/Banner";
import About from "../components/about/About";
import LeftSideBar from "../components/sideBar/LeftSideBar";
import RightSideBar from "../components/sideBar/RightSideBar";

const App = () => {
  return <ChakraProvider>
    <Header/>
    <LeftSideBar/>
    <RightSideBar/>
    <main className="fillHeight content">
      <Banner/>
      <About/>
    </main>
    <Footer/>
  </ChakraProvider>

}
export default App