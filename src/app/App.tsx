import React from 'react';
import {ChakraProvider, Img, Link} from '@chakra-ui/react'
// import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";
import LeftSideBar from "../components/sideBar/LeftSideBar";
import RightSideBar from "../components/sideBar/RightSideBar";
import Experience from "../components/experience/Experience";
import "./App.scss"
import Contact from "../components/contact/Contact";

const Header = React.lazy(() => import('../components/header/Header'));
const Banner = React.lazy(() => import('../components/banner/Banner'));


const App = () => {
  return <ChakraProvider>
    <React.Suspense><Header/></React.Suspense>
    <LeftSideBar/>
    <RightSideBar/>
    <main className="fillHeight content">
      <React.Suspense><Banner/></React.Suspense>
      <About/>
      <Experience/>
      <Contact/>
    </main>
    <Footer/>
  </ChakraProvider>

}
export default App