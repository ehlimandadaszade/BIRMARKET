import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Discount from '../../components/Discount/Discount'
import Brend from '../../components/Brend/Brend'
import SalesMan from '../../components/SalesMan/SalesMan'
import MostSales from '../../components/MostSales/MostSales'
import Actual from '../../components/Actual/Actual'
import Mega from '../../components/Mega/Mega'
import Top from '../../components/Top/Top'
import New from '../../components/New/New'
import Mobile from '../../components/Mobile/Mobile'
import Footer from '../../components/Footer/Footer'


const Home = () => {
  return (
    <>
    <Hero />
    <Discount />
    <Brend />
    <SalesMan />
    <MostSales />
    <Actual />
    <Mega />
    <Top />
    <New />
    <Mobile />
    </>
  )
}

export default Home