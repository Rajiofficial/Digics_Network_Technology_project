import React from 'react'
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation

import ChangingProgressProvider from "../ChangingProgressProvider";
import "./Css/section2.css"






const Section2 = () => {
  return (
    <div >
      

<div className='section_2_container'>
  <div className='section_2_row1'>

  <div className='round_1' label="No animation when returning to 0">
      <ChangingProgressProvider values={[0, 100]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#58468C",
              pathColor: "  #58468C",
              trailColor: "white",
              pathTransition:
                percentage === 50  
            })}
          />
        )}
      </ChangingProgressProvider>
    </div>
  

  <div>
    <h2 className='sec_2_h'>Network Access</h2>
    <h2 className='sec_2_h'>Security</h2>
  </div>
  <div>
  <p className='sec_2_con1'>

  Bitss N for networks controlling servers. Respecting the bitss system 100% procedures for Cyberwall and Firewall security, Bitss will protect your network from intrusion, prevent data theft, hostage ransom bids, block hacking and bitss detection systems, and VPN solutions will ensure protection for all the servers within the network on condition the bitss security procedure system is respected
  </p>
  </div>


  </div>

 

  
  <div className='section_2_row1'>

  <div className='round_2' label="No animation when returning to 0">
      <ChangingProgressProvider values={[0, 100]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "#58468C",
              pathColor: "#668DFF",
              trailColor: "white",
              pathTransition:
                percentage === 0  
            })}
          />
        )}
      </ChangingProgressProvider>
    </div>

    <div>
    <h2 className='sec_2_h'>Dedicated Server</h2>
    <h2 className='sec_2_h'> Access Security</h2>
  </div>
  <div>
  <p className='sec_2_con2'>
  Bitss S for total server protection housing administration sites, retail websites, service websites, video content websites and media websites, and intern infrustruture sites. Installing and following bitss server security system, bitss will Protect your database, detect and respond to any unauthorized activities or breaches


  </p>
  </div>


  </div>







  <div className='section_2_row1'>

<div className='round_3' label="No animation when returning to 0">
    <ChangingProgressProvider values={[0, 100]}>
      {percentage => (
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#58468C",
            pathColor: "#AA6FFA",
            trailColor: "white",
            pathTransition:
              percentage === 0  
          })}
        />
      )}
    </ChangingProgressProvider>
  </div>


  <div>
    <h2 className='sec_2_h'>Cloud Protection</h2>
  
  </div>
  <div>
  <p className='sec_2_con3'>

  All Websites and administration sites in cloud hosting, follow bitss and protect online vulnerability with the bitss protection techniques that protects your data in cloud, encryption, access controls, and advanced threat detection mechanisms
  </p>
  </div>

</div>




<div className='section_2_row1'>

<div className='round_4' label="No animation when returning to 0">
    <ChangingProgressProvider values={[0, 100]}>
      {percentage => (
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#58468C",
            pathColor: "#FF8A73",
            trailColor: "white",
            pathTransition:
              percentage === 0  
          })}
        />
      )}
    </ChangingProgressProvider>
  </div>


  <div>
    <h2 className='sec_2_h'>Cloud Protection</h2>
  
  </div>
  <div>
  <p className='sec_2_con4'>
  Bitss C secures web contact page, protect scamming by contact page, real-time threat intelligence and advanced threat detection and advanced malware detection tools

  </p>
  </div>
</div>


</div>








    </div>
  )
}

export default Section2
