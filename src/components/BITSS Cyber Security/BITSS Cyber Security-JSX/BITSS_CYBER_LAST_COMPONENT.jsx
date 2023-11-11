import React from 'react'
import "../BITSS Cyber Security-CSS/BITSS_CYBER_LAST_COMPONENT.css"
import {FaLongArrowAltRight} from "react-icons/fa"
import {Link} from "react-router-dom"

const BITSS_CYBER_LAST_COMPONENT = () => {
  return (
    <div>
                              <div className='BITSS_CYBER_LAST_COMPONENT_container'>




            {/* --------first----------- */}
                 <div className='BITSS_CYBER_LAST_COMPONENT_left'>

             <h2 className='BITSS_CYBER_LAST_COMPONENT_left_h2'>
             Cyper Protection
             </h2>
             <p className='BITSS_CYBER_LAST_COMPONENT_p_tag'>Malware, such as ransomware, botnet software, RATs (remote access Trojans), rootkits and bootkits, spyware, Trojans, viruses, and worms.<br/>Backdoors, which allow remote access.<br/>Formjacking, which inserts malicious code into online forms.<br/>Cryptojacking, which installs illicit cryptocurrency mining software.<br/>DDoS (distributed denial-of-service) attacks, which flood servers, systems, and networks with traffic to knock them offline.<br/>DNS (domain name system) poisoning attacks, which compromise the DNS to redirect traffic to malicious stes</p>

                 </div>
                 {/* --------------second========= */}
                <div className='BITSS_CYBER_LAST_COMPONENT_center'>
              <h2 className='BITSS_CYBER_LAST_COMPONENT_left_h2'>
              WordPress Protection
              </h2>
              <div>
                <p className='BITSS_CYBER_LAST_COMPONENT_p_tag'><img draggable="false" role="img" className="emoji" alt="✔" src="https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg"/> Customized Security Solutions</p><p className='BITSS_CYBER_LAST_COMPONENT_p_tag'><img draggable="false" role="img" className="emoji" alt="✔" src="https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg"/> Proactive Threat Monitoring</p><p className='BITSS_CYBER_LAST_COMPONENT_p_tag'><img draggable="false" role="img" className="emoji" alt="✔" src="https://s.w.org/images/core/emoji/14.0.0/svg/2714.svg"/> Trusted Partner Network</p></div>

              <p className='BITSS_CYBER_LAST_COMPONENT_p_tag'>BFIN BITSS WP cyber protection for wordpress&nbsp; is an easy-to-use plugin for fighting off intrusion and malicios spamming on your WordPress website. This BITTS works by screening suspected spam against its database of known spam entries, blocking backdoor access and strengthening access security. The software is loaded direct to the device you want to protect, so it’s great for providing a good user experience while protecting your Network, the servers, websites, databases effectively.</p>



                </div>
       {/* -------------------third--------------          */}
               <div className='BITSS_CYBER_LAST_COMPONENT_right'>
                  

                  <img className='BITSS_CYBER_LAST_COMPONENT_imgs'  src="	https://bitss.fr/wp-content/uploads/2023/07/security_logo_4.png" alt="" />
   

                   <Link to="contact_us"><h6 className='BITSS_CYBER_LAST_contact' >Contact Us<FaLongArrowAltRight color='black'/></h6></Link>
                          
                      
                     <a href="https://officetools.bobosoho.com/fixed-business-xtra-packages/"><span className='navi_bitss'>bitss.fr cyber security</span></a>

               </div>







                              </div>
    </div>
  )
}

export default BITSS_CYBER_LAST_COMPONENT
