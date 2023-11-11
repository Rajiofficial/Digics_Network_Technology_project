import React from 'react'
import Bitss_wd_top_component from './Bitss_wd_top_component'
import Bitss_wd_down_component from './Bitss_wd_down_component'
import Nav from '../Nav'

const Bitss_wd_home_container = () => {
  return (
    <div>
        <Nav/>
      <Bitss_wd_top_component/>
      <Bitss_wd_down_component/>
    </div>
  )
}

export default Bitss_wd_home_container
