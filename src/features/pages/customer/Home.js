import React from 'react'
// import Layout from '../../components/customer/Layout'



import Banner from './../../components/Banner'
import Services from './../../components/Services'
import TxtOverImg from './../../components/TxtOverImg'
import SideBySide from './../../components/SideBySide'
import Ratings from './../../components/Ratings'

import img from './../../../assets/images/clay-banks-s-hw64ghWEA-unsplash_resize.jpg'
import { Box } from '@mui/material'

import bannerImg from './../../../assets/images/clay-banks-s-hw64ghWEA-unsplash_resize.jpg'

import {content} from './../../../content/customer'


const Home = () => {
  const txtOverPic = content.home.txtOverPic
  const sideBySide = content.home.sideBySide
  const rating = content.home.rating
  const services = content.home.services
  return (
    <React.Fragment>
        <Banner img={bannerImg} alt='banner_hands holding tomatos'/>
        <Services title={services.title} subtitle={services.subtitle} items={services.items}/>
        <TxtOverImg img={txtOverPic.bgImg} title={txtOverPic.title} subtitle={txtOverPic.subtitle} items={txtOverPic.items} />
        {/* <SideBySide img={sideBySide.img} title={sideBySide.title} subtitle={sideBySide.subtitle} items={sideBySide.items}/> */}
        <Ratings reviews={rating}/>
    </React.Fragment>
  )
}

export default Home
