import React from 'react'
import Nav from '../Nav'
import Bitss_server_database_TOP_Component from './Bitss_server_database_TOP_Component'
import Bitss_server_database_DOWN_Component from './Bitss_server_database_DOWN_Component'

const Bitss_server_database_CONTAINER = () => {
  return (
    <div>
      <Nav/>
      <Bitss_server_database_TOP_Component/>
      <Bitss_server_database_DOWN_Component/>
    </div>
  )
}

export default Bitss_server_database_CONTAINER
