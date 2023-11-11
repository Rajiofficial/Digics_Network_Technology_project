import React from 'react'
import BITSS_Cyber_Security_top from './BITSS Cyber Security-JSX/BITSS_Cyber_Security_top'
import Nav from "../Nav"
import BITSS_CYBER_prime_goal from './BITSS Cyber Security-JSX/BITSS_CYBER_prime_goal'
import BITSS_Cyber_Security_CLONE from './BITSS Cyber Security-JSX/BITSS_Cyber_Security_CLONE'
import BITSS_Cyber_Security_CART from './BITSS Cyber Security-JSX/BITSS_Cyber_Security_CART'
import BITSS_CYBER_LAST_COMPONENT from './BITSS Cyber Security-JSX/BITSS_CYBER_LAST_COMPONENT'

const BITSS_Cyber_Security_CONTAIN = () => {
  return (
    <div><Nav/>
      <BITSS_Cyber_Security_top/>
      <BITSS_CYBER_prime_goal/>
      <div className='clone'>
      <BITSS_Cyber_Security_CLONE/>
      </div>
    
      <BITSS_Cyber_Security_CART/>
      <BITSS_CYBER_LAST_COMPONENT/>
      
    </div>
  )
}

export default BITSS_Cyber_Security_CONTAIN
